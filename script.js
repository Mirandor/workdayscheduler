$(document).ready(function () {

  // Current Date Displayed
  var today = moment().format('LLLL');
  $("#currentDay").text(today);

  // Work Hours Array
  var workHours = [
    8,
    9,
    10,
    11,
    12,
    1,
    2,
    3,
    4,
    5
  ];

  // Create Time Blocks
  for (var i = 0; i < workHours.length; i++) {
    var timeBlock = moment().hours(workHours[i]).format('h A');
    $("#hour-block")
      .append(
        `<div class="row hour">
        <div class="col col-sm-1 time-block">` + timeBlock + `</div>
        <div class="col col-lg-9"></div>
        <div class="col col-sm-2"><button type="button" class="btn btn-block far fa-calendar-check saveBtn btn-lg">  SAVE  </button></div>
      </div>`);
  }




  // Console Logs
  console.log(today);
  console.log(timeBlock);
  console.log(startTime);
  console.log(endTime);
});