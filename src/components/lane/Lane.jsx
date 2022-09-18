import Card from '../ui/Card';
import PropTypes from 'prop-types';
import LaneItem from '../lane/LaneItem';
import styles from './lane.module.css';
const Lane = ({
  title,
  tasks,
  className,
  dispatchDrop,
  laneId
}) => {
  const cardOnDropHandler = (e) => {
    e.preventDefault();
    // We'll get the data from ondragstart from the draggable element
    // We let the list element know that the lanes are droppable targets
    const data = e.dataTransfer.getData('text/json');
    const { task, parentId, id } = JSON.parse(data);
    console.debug('same', parentId, laneId);
    // cancel the drop if we are trying to move into the same lane
    if (parentId === laneId) return;
    else
      dispatchDrop({
        task,
        targetParent: laneId,
        oldParent: parentId,
        id: id
      });
  };

  // The documentation says a drop candiate is one who invokes preventDefault
  // for the onDragEnter and onDragOver event
  const cardOnDragEnterHandler = (e) => {
    e.preventDefault();
  };
  const cardOnDragOverHandler = (e) => {
    e.preventDefault();
  };

  const cardOnDragEndHandler = (e) => {
    e.preventDefault();
    // e.dataTransfer.clearData(); // don't call this, it modifies the document
  };

  return (
    <Card
      className={className}
      onDragEnter={cardOnDragEnterHandler}
      onDragOver={cardOnDragOverHandler}
      onDrop={cardOnDropHandler}
      onDragEnd={cardOnDragEndHandler}
    >
      <header>
        <h4>{title}</h4>
      </header>
      <div>
        <ul className={styles.custom}>
          {tasks.map((task, idx) => (
            <LaneItem key={idx} task={task}></LaneItem>
          ))}
        </ul>
      </div>
    </Card>
  );
};

Lane.propTypes = {
  tasks: PropTypes.array,
  className: PropTypes.string,
  dispatchDrop: PropTypes.func
};

export default Lane;
