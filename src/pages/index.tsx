import { Fragment, useState } from 'react';
import { KeyboardDatePicker } from '@material-ui/pickers';
import { get17yearsBirthday, getAge } from '../lib/calcAge';

import Layout from '../component/layout';

import styles from '../styles/Object/Component/index.module.scss';

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

  const checkAge = (date): void => {
    const _17yearsBirthday = get17yearsBirthday(date);
    const ageLabel = getAge(_17yearsBirthday, now);
    setAge(ageLabel);
    setState('able');
  };
  return (
    <Layout>
      <Fragment>
        <ThemeProvider theme={materialTheme}>
          <div className={styles.main}>
            <label className={styles.ageLabel}>{age}</label>
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
            <a
              href={
                'https://twitter.com/intent/tweet?url=https://test.com&text=私は' +
                age +
                'です'
              }
              data-size="large"
              className={styles.twitterButton}
              target="_blank"
            >
              TWEET
            </a>
          </div>
        </ThemeProvider>
      </Fragment>
    </Layout>
  );
};

export default Home;
