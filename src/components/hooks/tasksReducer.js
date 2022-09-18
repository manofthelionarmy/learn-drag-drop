import { useReducer } from 'react';

// using a symbol
export const DROP = Symbol('drop');

const taksReducer = (state, action) => {
  switch (action.type) {
    case DROP: {
      const { targetParent, id, task, oldParent } = {
        ...action.task
      };
      // Check if the target parent has the same entry
      const idx = state[targetParent].findIndex(
        (t) => t.id === id
      );

      // Return if a duplicate was found
      if (idx !== -1) return { ...state };

      // shallow copy the previous state
      const newState = { ...state };
      // access the target parent's array and concat to it
      newState[targetParent] = newState[targetParent].concat({
        task,
        id,
        parentId: targetParent // had to rename to parentId because it was overlapping with parent html element
      });

      // Find the index from the previous lane
      const oldIdx = newState[oldParent].findIndex(
        (task) => task.id === id
      );

      // And remove the task from that lane
      newState[oldParent] = [
        ...newState[oldParent].slice(0, oldIdx),
        ...newState[oldParent].slice(oldIdx + 1)
      ];
      console.debug(
        'new tasks',
        targetParent,
        newState[targetParent]
      );
      return newState;
    }
  }
  return { ...state };
};

export const tasksReducer = (initialState) => {
  const [tasks, dispatch] = useReducer(
    taksReducer,
    initialState
  );
  const dispatchDrop = (task) => {
    dispatch({ type: DROP, task });
  };
  return { tasks, dispatch, dispatchDrop };
};
