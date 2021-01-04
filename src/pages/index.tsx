import { Fragment, useState } from 'react';
import { KeyboardDatePicker } from '@material-ui/pickers';
import { get17yearsBirthday, getAge } from '../lib/calcAge';
import SiteMeta from '../component/config';
import publicConst from '../lib/publicConst';

import Layout from '../component/layout';

import styles from '../styles/Object/Component/index.module.scss';
import { FaTwitter } from 'react-icons/fa';

import pink from '@material-ui/core/colors/pink';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

const materialTheme = createMuiTheme({
  palette: {
    primary: pink,
  },
  typography: {
    fontFamily: 'M PLUS Rounded 1c, sans-serif',
    fontSize: 24,
  },
});

const Home = () => {
  const now = new Date();
  const [selectedDate, handleDateChange] = useState(new Date());
  const [age, setAge] = useState<string>('誕生日を入力してね');
  const [state, setState] = useState<string>('disable');
  const [is17, setIs17] = useState<boolean>(true);

  const checkAge = (date): void => {
    const _17yearsBirthday = get17yearsBirthday(date);
    const ageLabel = getAge(_17yearsBirthday, now);
    ageLabel === publicConst.NOT_BIRTH ? setIs17(false) : setIs17(true);
    setAge(ageLabel);
    setState('able');
  };
  return (
    <Layout>
      <Fragment>
        <ThemeProvider theme={materialTheme}>
          <div className={styles.main}>
            <img
              src={is17 ? './img/topImg.png' : './img/topImg_baby.png'}
              className={styles.topImage}
            />
            <label className={styles.ageLabel}>
              {state === 'able' && 'あなたは…'}
              {age}
              {state === 'able' && '！'}
            </label>
            <KeyboardDatePicker
              name="birthday"
              value={selectedDate}
              onChange={(date) => {
                handleDateChange(date), checkAge(date);
              }}
              format="yyyy年MM月dd日"
            />
          </div>
          <div className={styles[state]}>
            <section className={styles.share}>
              <h2>結果をシェアしよう</h2>
              <a
                href={
                  'https://twitter.com/intent/tweet?url=' +
                  SiteMeta.url +
                  '&text=私は' +
                  age +
                  '！'
                }
                data-size="large"
                className={styles.twitterButton}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <FaTwitter />
                </span>
                TWEET
              </a>
            </section>
          </div>
        </ThemeProvider>
      </Fragment>
    </Layout>
  );
};

export default Home;
