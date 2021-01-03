import { isValid, addYears, differenceInMonths } from 'date-fns';

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
  const diffMonth = differenceInMonths(now, _17yearsbirthday);

  const ageYear = 17;
  const ageMonth = diffMonth;
  const ageLabel = ageYear + '才' + ageMonth + 'ヶ月';

  return ageLabel;
}
