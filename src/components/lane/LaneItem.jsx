import PropTypes from 'prop-types';
import styles from './lane-item.module.css';
const LaneItem = ({ task }) => {
  const onDragStartHandler = (e) => {
    e.dataTransfer.clearData();
    const taskJson = JSON.stringify({
      task: task.task,
      parentId: task.parentId,
      id: task.id
    });
    console.debug('taskJson ', taskJson);
    e.dataTransfer.setData('text/json', taskJson);
  };

  return (
    <li
      className={styles.item}
      draggable={true}
      onDragStart={onDragStartHandler}
    >
      <p>{task.task}</p>
    </li>
  );
};

LaneItem.propTypes = {
  task: PropTypes.object
};

export default LaneItem;
