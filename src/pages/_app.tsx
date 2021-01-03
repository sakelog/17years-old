import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import jaLocale from 'date-fns/locale/ja';
import { format } from 'date-fns';

import '../styles/global.scss';

class jaLocalizedUtils extends DateFnsUtils {
  getDatePickerHeaderText(date) {
    return format(date, 'yyyy年M月d日', { locale: this.locale });
  }
}

function MyApp({ Component, pageProps }) {
  return (
    <MuiPickersUtilsProvider utils={jaLocalizedUtils} locale={jaLocale}>
      <Component {...pageProps} />
    </MuiPickersUtilsProvider>
  );
}

export default MyApp;
