import styles from '../styles/Object/Component/aboutApp.module.scss';

const AboutApp = () => {
  return (
    <section className={styles.root}>
      <h2>このサイトは？</h2>
      <p>誕生日を入力すると、17才何ヶ月なのかを教えてくれます。</p>
      <p>結果はTwitterでシェアしよう！</p>
    </section>
  );
};

export default AboutApp;
