const dateAdd = (date) => {
    let dateToString = date.toString();
  
    // get last character of date string
    const last = dateToString.charAt(dateToString.length - 1);
  
    if (last === '1' && dateToString !== '11') {
      dateToString = `${dateToString}st`;
    } else if (last === '2' && dateToString !== '12') {
      dateToString = `${dateToString}nd`;
    } else if (last === '3' && dateToString !== '13') {
      dateToString = `${dateToString}rd`;
    } else {
      dateToString = `${dateToString}th`;
    }
  
    return dateToString;
  };
  
  // function to format a timestamp, accepts the timestamp and an `options` object as parameters
  module.exports = (
    timestamp,
    { monthLength = 'short', dateSuffix = true } = {}
  ) => {
    // create month object
    const months = {
      0: monthLength === 'short' ? 'Jan' : 'January',
      1: monthLength === 'short' ? 'Feb' : 'February',
      2: monthLength === 'short' ? 'Mar' : 'March',
      3: monthLength === 'short' ? 'Apr' : 'April',
      4: monthLength === 'short' ? 'May' : 'May',
      5: monthLength === 'short' ? 'Jun' : 'June',
      6: monthLength === 'short' ? 'Jul' : 'July',
      7: monthLength === 'short' ? 'Aug' : 'August',
      8: monthLength === 'short' ? 'Sep' : 'September',
      9: monthLength === 'short' ? 'Oct' : 'October',
      10: monthLength === 'short' ? 'Nov' : 'November',
      11: monthLength === 'short' ? 'Dec' : 'December',
    };
  
    const dates = new Date(timestamp);
    const dateMonth = months[dates.getMonth()];
  
    const dateDay = dateSuffix
      ? dateAdd(dates.getDate())
      : dates.getDate();
  
    const year = dates.getFullYear();
    let hour =
      dates.getHours() > 12
        ? Math.floor(dates.getHours() - 12)
        : dates.getHours();
  
    // if hour is 0 (12:00am), change it to 12
    if (hour === 0) {
      hour = 12;
    }
  
    const minutes = (dates.getMinutes() < 10 ? '0' : '') + dates.getMinutes();
  
    // set am or pm
    const amPm = dates.getHours() >= 12 ? 'pm' : 'am';
  
    const timeStamp = `${dateMonth} ${dateDay}, ${year} at ${hour}:${minutes} ${amPm}`;
  
    return timeStamp;
  };