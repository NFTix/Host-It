import moment from 'moment'

export function extractTimestampInfo(timestamp) {
  const parsedDate = moment(timestamp);
  return {
    monthName: parsedDate.format('MMM'),
    monthDay: parsedDate.format('DD'),
    year: parsedDate.format('YYYY'),
    time: parsedDate.format('h:mmA'),
  };
}