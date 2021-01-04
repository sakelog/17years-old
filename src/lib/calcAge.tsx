import { isValid, addYears, differenceInMonths } from 'date-fns';
import publicConst from './publicConst';

export function get17yearsBirthday(birthday: Date): Date {
  if (isValid(birthday)) {
    let _17yearsBirthday = new Date(
      birthday.getFullYear(),
      birthday.getMonth(),
      birthday.getDate()
    );

    _17yearsBirthday = addYears(_17yearsBirthday, 17);
    return _17yearsBirthday;
  } else {
    return null;
  }
}

export function getAge(_17yearsbirthday: Date, now: Date): string {
  let ageLabel: string;
  const AGE_YEAR = 17;
  const NOT_BIRTH = publicConst.NOT_BIRTH;

  const diffMonth = differenceInMonths(now, _17yearsbirthday);

  ageLabel = diffMonth < 0 ? NOT_BIRTH : AGE_YEAR + '才' + diffMonth + 'ヶ月';

  return ageLabel;
}
