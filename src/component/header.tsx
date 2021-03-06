import { FiHeart } from 'react-icons/fi';

import styles from '../styles/Object/Component/header.module.scss';

const Header = () => {
  return (
    <header className={styles.root}>
      <p className={styles.title}>
        <FiHeart />
        <h1>永遠の１７才</h1>
        <FiHeart />
      </p>
    </header>
  );
};

export default Header;
