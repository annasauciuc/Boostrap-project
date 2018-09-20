function formatDate(date) {
  var monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  var dateMoment = moment();
  console.log("dateMomenet", dateMoment);
  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();

  return day + " " + monthNames[monthIndex] + " " + year;
}

console.log(formatDate(new Date())); // show current date-time in console

document.getElementById("f-date").innerHTML = formatDate(new Date());

formatDate();
console.log(formatDate(new Date()));
