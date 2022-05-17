var today = moment().format("LLLL");
$("#currentDay").text(today);

//save button on the right side in the last column. saves to local storage.

// change the past hours to their specific colors
// current hour should be its specific color
// future hours will be their color.
// need to make the comparison of moment to determine.

$(".btn").on("click", function () {
  var buttonid = $(this).attr("id");
  var timeBlock = buttonid.split("-")[0];
  var userinput = $("#" + timeBlock + "-userinput").val();
  console.log(buttonid, timeBlock, userinput);
  localStorage.setItem(timeBlock, userinput);
});

for (let index = 9; index < 18; index++) {
  const element = localStorage.getItem(index);
  console.log(element);
  $("#" + index + "-userinput").val(element);
}
