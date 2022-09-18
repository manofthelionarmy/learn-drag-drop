import PropTypes from 'prop-types';
import styles from './card.module.css';

const Card = ({
  children,
  className,
  onDrag,
  onDrop,
  onDragEnter,
  onDragOver,
  onDragEnd
}) => {
  const onDragOverHandler = (e) => {
    if (!onDragOver) return;
    onDragOver(e);
  };
  const onDragEnterHandler = (e) => {
    if (!onDragEnter) return;
    onDragEnter(e);
  };

  const onDragHandler = (e) => {
    if (!onDrag) return;
    onDrag(e);
  };

  const onDropHandler = (e) => {
    if (!onDrop) return;
    onDrop(e);
  };

  const onDragEndHandler = (e) => {
    if (!onDragEnd) return;
    onDragEnd(e);
  };

  return (
    <div
      className={`${styles.cardDefault} ${className}`}
      onDragEnter={onDragEnterHandler}
      onDragOver={onDragOverHandler}
      onDrop={onDropHandler}
      onDrag={onDragHandler}
      onDragEnd={onDragEndHandler}
    >
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onDrop: PropTypes.func,
  onDrag: PropTypes.func,
  onDragOver: PropTypes.func,
  onDragEnter: PropTypes.func,
  onDragEnd: PropTypes.func
};

export default Card;
