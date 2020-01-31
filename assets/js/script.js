$(document).ready(function() {
  // If data exists on local Storage
  let plannerData = JSON.parse(localStorage.getItem("plannerData"));

  // date that is being displayed as a string "MMDD" ie. 1225 = Dec 25th
  let currentDate = moment().format("MMDD");

  // If plannerData exists in local storage
  if (plannerData != null) {
    // Build planner if there is some data in today's array
    if (plannerData[`${currentDate}`] != undefined) {
      buildPlanner(plannerData[`${currentDate}`]);
    }
  }
  // If plannerData does not exist in local storage, create object
  else {
    plannerData = {};
  }

  // Border the current hour block (only if displaying today)
  if(currentDate === moment().format("MMDD")
  && ((moment().format("H") - 9) >= 0)
  && ((moment().format("H") - 9) <= 9)) {
    $(`#content-5`).addClass("border border-primary highlighted");
  }

  /************************************** Display Current Time at the Header Jumbotron **************************************/
  // Initial display
  let currentDay = $("#currentDay");
  currentDay.text(moment().format("MMMM Do YYYY, h:mm:ss A"));
  // Refresh every second
  let headerTimer = setInterval(function() {
    currentDay.text(moment().format("MMMM Do YYYY, h:mm:ss A"));
  }, 1000);
  $("#current-date").text(moment().format("YYYY - MMMM - DD"));

  /************************************************* Render Data on timeblock ***************************************************/
  function buildPlanner(schedule) {
    for (let i = 0; i < 10; i++) {
      $(`#content-${i}`).val("");
      $(`#content-${i}`).val(schedule[i]);
    }
  }

  /*************************************************** Save Button Function *****************************************************/
  $(".save-button").on("click", function(event) {
    event.preventDefault();
    // timeIndex - 0:9AM, 1:10AM, 2:11AM, ... , 9:6PM
    let timeIndex = $(this).attr("data-time-index");

    // Load current day array. If not defined, build one
    if (plannerData[`${currentDate}`] === undefined) {
      plannerData[`${currentDate}`] = ["","","","","","","","","",""];
    }

    // edit the plannerData object, and update it in the local storage too
    plannerData[`${currentDate}`][timeIndex] = $(`#content-${timeIndex}`).val();
    localStorage.setItem("plannerData", JSON.stringify(plannerData));
  });

  /*************************************************** Date Button Function *****************************************************/
  $("#date-forward").on("click", event => {
    event.preventDefault();

    // move forward a day
    currentDate = moment(moment(`2020${currentDate}`)).add(1, 'days').format("MMDD");

    refreshPlanner();
  });

  $("#date-backward").on("click", event => {
    event.preventDefault();

    // move backward a day
    currentDate = moment(moment(`2020${currentDate}`)).add(-1, 'days').format("MMDD");

    refreshPlanner();
  });

  function refreshPlanner() {
    // renew data (discard any unsaved changes)
    plannerData = JSON.parse(localStorage.getItem("plannerData"));
    if(plannerData === null) {
      plannerData = {};
    }

    // adjust the current date display
    $("#current-date").text(moment(moment(`2020${currentDate}`)).format("YYYY - MMMM - DD"));

    // Remove highlighted hour block if there is any
    if($(".highlighted").length != 0) {
      $(".highlighted").removeClass("border border-primary highlighted");
    }

    // Border the current hour block (only if displaying today)
    if(currentDate === moment().format("MMDD")
    && ((moment().format("H") - 9) >= 0)
    && ((moment().format("H") - 9) <= 9)) {
      $(`#content-5`).addClass("border border-primary highlighted");
    }

    // check if there is data for the new current date, and build planner
    if (plannerData[`${currentDate}`] === undefined) {
      plannerData[`${currentDate}`] = ["","","","","","","","","",""];
    }

    // build Planner
    buildPlanner(plannerData[`${currentDate}`]);
  }

  /*************************************************** Clear Button Function *****************************************************/
  $("#clear-button").on("click", event => {
    event.preventDefault();
    localStorage.clear();
    currentDate = moment().format("MMDD");
    
    refreshPlanner();
  });

});
