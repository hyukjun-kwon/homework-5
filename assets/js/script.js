// Display Current Time at the Header Jumbotron
// Initial display
let currentDay = $("#currentDay");
currentDay.text(moment().format('MMMM Do YYYY, h:mm:ss a'));
// Refresh every second
let headerTimer = setInterval(function() {
  currentDay.text(moment().format('MMMM Do YYYY, h:mm:ss a'));
}, 1000);
