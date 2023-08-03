// const moment = require("moment");
var moment = require("moment-timezone");

// function convertTimeZone(timeNow, anotherTimeZone) {
//   return moment(timeNow).tz(anotherTimeZone).format();
// }
// console.log(convertTimeZone(moment().format(), "America/Los_Angeles"));

// console.log(moment().format("MMMM Do YYYY, h:mm:ss a"));
// console.log(moment().format("[Month number: ] Mo"));
// console.log(moment().format("[Month number0: ] MM"));
// console.log(moment().format("[Month half-name: ] MMM"));
// console.log(moment().format("[Month Name: ] MMMM "));

// console.log(moment().format("[Quarter: ] Qo "));

// console.log(moment().format("[Day of month: ] DD"));

// console.log(moment().format("[Day of year: ] DDDD"));

// console.log(moment().format("[Day of Week: ] dddd"));

// console.log(moment().format("[Day of Week: ] w"));

// console.log(moment().format("[Era of year: ] y"));

// console.log(moment().format("[time in : ] h:mm:ss a  x L"));
// console.log(moment().format("[ Date & Time : ] llll"));

// var a = moment("2018-18-10T10:20:25");
// console.log(a.isValid());
// console.log(a.invalidAt());

// "Aug 1st, 2023".

// console.log(moment().format("MMM Do [,] YYYY"));

// console.log(moment().toDate());

// console.log(moment().utc().format());
// let moment=moment()

// console.log(moment("Ibtisam")); // It would crash the program as it is not in RFC2822 or ISO format
// console.log(moment("2013")); // It would take '2013' as an year
// console.log(moment(true)); // Returns exception
// console.log(moment(undefined)); // undefine is Allowed
// console.log(moment(null)); // null gives error of Invalid date
// console.log(moment([3, 5, 3, 5])); // arrays are allowed
// console.log(moment({ 1: "c", v: 2 })); // Objects are allowed

// function isEqualDate(dates) {
//   if (dates.length === 2) {
//     return dates[0].isBefore(dates[1]) || dates[0].isSame(dates[1]);
//   } else {
//     console.log("invalid Input");
//     return false;
//   }
// }
// console.log(
//   isEqualDate([
//     moment("2019-08-01T17:52:40+05:00"),
//     moment("2021-08-01T17:52:40+05:00"),
//   ])
// );
// function formatDate(unixDate) {
//   return moment.unix(unixDate).format("YYYY-MM-DD H:mm:ss");
// }

// console.log(formatDate(moment().unix()));

// function minutesDiff() {
//   let today = moment();
//   let weekAgo = moment().subtract(7, "d").format();
//   return today.diff(weekAgo, "m");
// }
// function hourDiff() {
//   let today = moment();
//   let weekAgo = moment().subtract(7, "d").format();
//   return today.diff(weekAgo, "h");
// }

// console.log("Difference in minutes: ", minutesDiff());
// console.log("Difference in Hours: ", hourDiff());

// function convertUTCToTimezone(utcDt, timezone) {
//   return moment.utc(utcDt).tz(timezone).format("YYYY-MM-DD hh:mm:ss A");
// }
// // UTC date "2020-05-20 04:42:44 PM" to "America/Los_Angeles" timezone date:
// console.log(
//   convertUTCToTimezone("2020-05-20 04:42:44 PM", "America/Los_Angeles")
// );

function convertDate(localTime) {
  const timeDiff = moment.tz("EST").utcOffset() - localTime.utcOffset();
  return timeDiff > 0
    ? localTime.add(timeDiff, "minutes")
    : localTime.subtract(timeDiff, "minutes");
}

convertedDate = convertDate(moment());
console.log(moment().format("lll z"));
console.log(moment.tz(convertedDate, "EST").format("lll z"));
