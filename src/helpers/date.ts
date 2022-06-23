const secondsToDate = (seconds: number): Date => {
  return new Date(seconds * 1000);
};

const dateFormatDefault = (
  date: Date,
  dateSeparator: string = '-',
  timeSeparator: string = ':'
): string => {
  return `${date.getFullYear()}${dateSeparator}${
    date.getMonth() + 1
  }${dateSeparator}${date.getDate()} ${date.getHours()}${timeSeparator}${date.getMinutes()}${timeSeparator}${date.getSeconds()}`;
};

export { secondsToDate, dateFormatDefault };
