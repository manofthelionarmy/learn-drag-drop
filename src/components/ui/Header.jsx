import PropTypes from 'prop-types';
import styles from './header.module.css';
const Header = ({ title }) => {
  return <header className={styles.header}>{title}</header>;
};

Header.propTypes = {
  title: PropTypes.string
};

export default Header;
