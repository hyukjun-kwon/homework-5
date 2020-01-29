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
  let timeBlock = $("<div>").addClass("row");
  timeBlock.attr("id", "time-table");
  timeBlock.attr("data-hour-index", i);
  $("#time-block").append(timeBlock);

  let timeBlockHour = $("<div>").addClass("col-sm-1 border border-dark");
  timeBlockHour.text(moment().add(i, 'hours').format('h:[00] a'));
  
  let timeBlockContent = $("<div>").addClass("col-sm-10 border border-primary");
  timeBlockContent.text("bibidibabidibu");
  
  let timeBlockSave = $("<div>").addClass("col-sm-1 border border-danger");
  timeBlockSave.text("save");
  
  $("#time-table").append(timeBlockHour);
  $("#time-table").append(timeBlockContent);
  $("#time-table").append(timeBlockSave);
}



