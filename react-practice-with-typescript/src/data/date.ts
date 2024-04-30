import { DateTime } from 'luxon'

export const makeRandomPastDate = () => {
  const value = new Date().valueOf();
  const yearMilliSeconds = 31536000000;
  return DateTime.fromMillis(value - Math.floor(Math.random() * yearMilliSeconds));
};

// export const randomDayMonthYear = () => makeRandomPastDate().toLocaleString(DateTime.DATE_FULL);

export const randomDayMonthYear = () => makeRandomPastDate().toFormat('yyyy/MM/dd').toString()