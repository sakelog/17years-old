import siteMeta from '../component/config';

import { FaTwitter, FaGithub } from 'react-icons/fa';
import styles from '../styles/Object/Component/footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.root}>
      <ul>
        <li>
          作成者：{siteMeta.author}
          <span className={styles.iconText}>
            (
            <a
              href={'https://twitter.com/' + siteMeta.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />@{siteMeta.social.twitter}
            </a>
            )
          </span>
        </li>
        <li>
          <a
            href="https://github.com/sakelog/17years-old"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={styles.iconText}>
              <FaGithub />
              (sakelog/17years-old)
            </span>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
