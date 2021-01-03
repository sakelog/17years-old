import Image from 'next/image';
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
      <Image
        src="/img/topImg.png"
        width={124}
        height={150}
        layout="intrinsic"
      />
    </header>
  );
};

export default Header;
