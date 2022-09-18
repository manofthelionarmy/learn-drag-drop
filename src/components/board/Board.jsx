import { Fragment, useState } from 'react';
import Card from '../ui/Card';
import Lane from '../lane/Lane';
import Header from '../ui/Header';
import styles from './board.module.css';
import { v4 as uuid } from 'uuid';
import { tasksReducer, DROP } from '../hooks/tasksReducer';
const allTasks = {
  todo: [
    { task: 'Brush Teeth', parentId: 'todo', id: uuid() },
    { task: 'Play Guitar', parentId: 'todo', id: uuid() }
  ],
  inProgress: [
    { task: 'Cook Dinner', parentId: 'inProgress', id: uuid() }
  ],
  review: [
    { task: 'Plan For Tomorrow', parentId: 'review', id: uuid() }
  ],
  done: [{ task: 'Work', parentId: 'done', id: uuid() }]
};

const Board = () => {
  // TODO: this should be an array of arrays
  const { tasks, dispatch, dispatchDrop } =
    tasksReducer(allTasks);
  return (
    <Fragment>
      <Header title="Project Management"></Header>
      <main className={styles.boardMain}>
        <Lane
          title="To Do"
          laneId="todo"
          className={styles.todo}
          tasks={tasks.todo}
          dispatchDrop={dispatchDrop}
        ></Lane>
        <Lane
          title="In Progress"
          laneId="inProgress"
          className={styles.inProgress}
          tasks={tasks.inProgress}
          dispatchDrop={dispatchDrop}
        ></Lane>
        <Lane
          className={styles.review}
          laneId="review"
          title="Review"
          tasks={tasks.review}
          dispatchDrop={dispatchDrop}
        ></Lane>
        <Lane
          className={styles.done}
          title="Done"
          laneId="done"
          tasks={tasks.done}
          dispatchDrop={dispatchDrop}
        ></Lane>
      </main>
    </Fragment>
  );
};

export default Board;
