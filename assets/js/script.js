$(document).ready(function() {
  /************************************************ CONFIGURATION CONSTANTS ************************************************/
  const PAST_HOURS = 3; // Display Three previous hours
  const FUTURE_HOURS = 6; // Display Six future hours

  /************************************************ LOCAL STORAGE FUNCTIONS ************************************************/

  // If data exists on local Storage
  let plannerData = JSON.parse(localStorage.getItem("plannerData"));
  console.log(plannerData);
  
  // date that is being displayed as a string "MMDD" ie. 1225 = Dec 25th
  let currentDate = moment().format("MMDD");
  console.log(currentDate);

  // If plannerData exists in local storage
  if (plannerData != null) {
    // Build planner if there is some data in today's array
    if (plannerData[`"${currentDate}"`] != undefined) {
      buildPlanner(plannerData[`"${currentDate}"`]);
    }
  }
  // If plannerData does not exist in local storage, create object
  else {
    plannerData = {};
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
  function buildPlanner(schedule) {
    for (let i = 0; i < 10; i++) {
      $(`#content-${i}`).text(schedule[i]);
    }
  }

  /*************************************************** Save Button Function *****************************************************/
  $(".save-button").on("click", function(event) {
    event.preventDefault();
    // timeIndex - 0:9AM, 1:10AM, 2:11AM, ... , 9:6PM
    let timeIndex = $(this).attr("data-time-index");

    // Load current day array. If not defined, build one
    if (plannerData[`"${currentDate}"`] === undefined) {
      plannerData[`"${currentDate}"`] = ["", "", "", "", "", "", "", "", "", ""];
    }

    // edit the plannerData object, and update it in the local storage too
    plannerData[`"${currentDate}"`][timeIndex] = $(`#content-${timeIndex}`).val();
    localStorage.setItem("plannerData", JSON.stringify(plannerData));
  });

});
