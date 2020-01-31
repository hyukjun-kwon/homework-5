$(document).ready(function() {
  /************************************************ CONFIGURATION CONSTANTS ************************************************/
  const PAST_HOURS = 3; // Display Three previous hours
  const FUTURE_HOURS = 6; // Display Six future hours

  /************************************************ LOCAL STORAGE FUNCTIONS ************************************************/
  
  // If data exists on local Storage
  let calendarData = localStorage.getItem("calendarData");
  calendarData = {};
  calendarData["0130"] = [ "what", "intheworld", "", "", "","","","","",""];
  if( calendarData != null ) {
    let today = moment().format("MMDD");
    buildCalendar(calendarData[today]);
  }
  else {
    calendarData = {};
    console.log("data e???");
  }

  /************************************** Display Current Time at the Header Jumbotron **************************************/
  // Initial display
  let currentDay = $("#currentDay");
  currentDay.text(moment().format("MMMM Do YYYY, h:mm:ss A"));
  // Refresh every second
  let headerTimer = setInterval(function() {
    currentDay.text(moment().format("MMMM Do YYYY, h:mm:ss A"));
  }, 1000);

  /************************************************* Render Data on timeblock ***************************************************/
  function buildCalendar(schedule) {
    for (let i = 0; i < 10; i++) {
      $(`#content-${i}`).text(schedule[i]);
    }
  }

  /*************************************************** Save Button Function *****************************************************/
  $(".save-button").on("click", function(event) {
    event.preventDefault();
    console.log($(this).attr("data-time-stamp"));
    // Search through the data base, look for time stamp

    // Modify the content on the data base
  });
});
