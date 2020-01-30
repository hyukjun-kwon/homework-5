/************************************** Display Current Time at the Header Jumbotron **************************************/
const PAST_HOURS = 3; // Display Three previous hours
const FUTURE_HOURS = 6; // Display Six future hours



/************************************** Display Current Time at the Header Jumbotron **************************************/
// Initial display
let currentDay = $("#currentDay");
currentDay.text(moment().format('MMMM Do YYYY, h:mm:ss a'));
// Refresh every second
let headerTimer = setInterval(function() {
  currentDay.text(moment().format('MMMM Do YYYY, h:mm:ss a'));
}, 1000);

/**************************************************** Build Time block ****************************************************/
for(let i = -PAST_HOURS; i <= FUTURE_HOURS; i++) {
  let timeBlock = $("<div>").addClass("input-group");
  timeBlock.attr("id", `time-table-${i}`);
  $("#time-block").append(timeBlock);

  let timeBlockHour = $("<div>").addClass("input-group-prepend");
  let timeBlockHourButton = $("<button>").addClass("btn btn-outline-secondary disabled");
  timeBlockHourButton.text(moment().add(i, 'hours').format('hhA'));
  timeBlockHour.append(timeBlockHourButton);
  
  let timeBlockContent = $("<input>").addClass("form-control");
  timeBlockContent.text("bibidibabidibu");
  
  let timeBlockSave = $("<div>").addClass("input-group-append");
  let timeBlockSaveButton = $("<button>").addClass("btn btn-outline-primary");
  timeBlockSaveButton.attr("data-hour-index", i);
  timeBlockSaveButton.text("save");
  timeBlockSave.append(timeBlockSaveButton);
  
  $(`#time-table-${i}`).append(timeBlockHour);
  $(`#time-table-${i}`).append(timeBlockContent);
  $(`#time-table-${i}`).append(timeBlockSave);
}

/**************************************************** Build Time block ****************************************************/

