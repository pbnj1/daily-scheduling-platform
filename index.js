// top section with the title and time stamp
var TitleText = $(".jumbotron");
var timeStamp = $("<h5>");
var time = moment().format("MMMM Do YYYY");
$(timeStamp).text(time);
TitleText.append(timeStamp);
// end of top section with the title and time sta

// Save button function that will save to local storage
$(".saveBtn").on("click", function () {
  // the code below works when called by the onclick above - but only for one
  var textInput1 = $("#text1").val();
  localStorage.setItem("textInput1", textInput1);
  var textInput2 = $("#text2").val();
  localStorage.setItem("textInput2", textInput2);
  var textInput3 = $("#text3").val();
  localStorage.setItem("textInput3", textInput3);
  var textInput4 = $("#text4").val();
  localStorage.setItem("textInput4", textInput4);
  var textInput5 = $("#text5").val();
  localStorage.setItem("textInput5", textInput5);
  var textInput6 = $("#text6").val();
  localStorage.setItem("textInput6", textInput6);
  var textInput7 = $("#text7").val();
  localStorage.setItem("textInput7", textInput7);
  var textInput8 = $("#text8").val();
  localStorage.setItem("textInput8", textInput8);
  var textInput9 = $("#text9").val();
  localStorage.setItem("textInput9", textInput9);
  var textInput10 = $("#text10").val();
  localStorage.setItem("textInput10", textInput10);
  var textInput11 = $("#text11").val();
  localStorage.setItem("textInput11", textInput11);
  var textInput12 = $("#text12").val();
  localStorage.setItem("textInput12", textInput12);
});

//retrieving the saved data and getting it on the screen
onload = function () {
  var textRetrieve1 = localStorage.getItem("textInput1");
  document.getElementById("text1").value = textRetrieve1;
  var textRetrieve2 = localStorage.getItem("textInput2");
  document.getElementById("text2").value = textRetrieve2;
  var textRetrieve3 = localStorage.getItem("textInput3");
  document.getElementById("text3").value = textRetrieve3;
  var textRetrieve4 = localStorage.getItem("textInput4");
  document.getElementById("text4").value = textRetrieve4;
  var textRetrieve5 = localStorage.getItem("textInput5");
  document.getElementById("text5").value = textRetrieve5;
  var textRetrieve6 = localStorage.getItem("textInput6");
  document.getElementById("text6").value = textRetrieve6;
  var textRetrieve7 = localStorage.getItem("textInput7");
  document.getElementById("text7").value = textRetrieve7;
  var textRetrieve8 = localStorage.getItem("textInput8");
  document.getElementById("text8").value = textRetrieve8;
  var textRetrieve9 = localStorage.getItem("textInput9");
  document.getElementById("text9").value = textRetrieve9;
  var textRetrieve10 = localStorage.getItem("textInput10");
  document.getElementById("text10").value = textRetrieve10;
  var textRetrieve11 = localStorage.getItem("textInput11");
  document.getElementById("text11").value = textRetrieve11;
  var textRetrieve12 = localStorage.getItem("textInput12");
  document.getElementById("text12").value = textRetrieve12;
};

// below will get the local time at just the hour
var localTime = moment().format("H");
// console.log(localTime);
//////////////////////////////////

// Functionallity of the textbox changing color to the time

var dataArr = document.querySelectorAll(".text-area");
// console.log(dataArr)

for (let i = 0; i < dataArr.length; i++) {
  // var newDA = dataArr[i].attr("data-value")
  var value = dataArr[i].dataset.value;
  var currentTime = moment().format("H");

  console.log(dataArr[i].dataset.value);
  // console.log($(".text-area"))

  console.log(currentTime)
  // console.log(value)


  if (value < currentTime) {
    console.log("this is past");
    dataArr[i].classList.add("past");
  }  else if (value == currentTime) {
    console.log("this is present");
    dataArr[i].classList.remove("past")
    dataArr[i].classList.add("present");
  } else{value > currentTime
    console.log("this is future");
    dataArr[i].classList.remove("past")
    dataArr[i].classList.remove("present")
    dataArr[i].classList.add("future");
  }




}
