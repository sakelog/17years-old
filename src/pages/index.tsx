import { Fragment, useState } from 'react';
import { KeyboardDatePicker } from '@material-ui/pickers';
import { get17yearsBirthday, getAge } from '../lib/calcAge';

import Layout from '../component/layout';

import pink from '@material-ui/core/colors/pink';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

const materialTheme = createMuiTheme({
  palette: {
    primary: pink,
  },
  typography: {
    fontFamily: 'M PLUS Rounded 1c, sans-serif',
    fontSize: 20,
  },
});

const Home = () => {
  const now = new Date();
  const [selectedDate, handleDateChange] = useState(new Date());
  const [age, setAge] = useState<string>('誕生日を入力してね');

  const checkAge = (date): void => {
    const _17yearsBirthday = get17yearsBirthday(date);
    setAge(getAge(_17yearsBirthday, now));
  };

  return (
    <Layout>
      <Fragment>
        <ThemeProvider theme={materialTheme}>
          <label className="ageLabel">{age}</label>
          <KeyboardDatePicker
            name="birthday"
            value={selectedDate}
            onChange={(date) => {
              handleDateChange(date), checkAge(date);
            }}
            format="yyyy年MM月dd日"
          />
        </ThemeProvider>
      </Fragment>
    </Layout>
  );
};

export default Home;
