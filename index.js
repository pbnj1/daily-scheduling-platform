// top section with the title and time stamp
var TitleText = $(".jumbotron");
var timeStamp = $("<h5>");
var time = moment().format("MMMM Do YYYY");
$(timeStamp).text(time);
TitleText.append(timeStamp);
// end of top section with the title and time sta

// Save button function that will save to local storage
$(".saveBtn").on("click", function(){

    
    // the code below works when called by the onclick above - but only for one
    var textInput1 = $("#text1").val();
    localStorage.setItem("textInput1", textInput1);
    
    var textInput2 = $("#text2").val();
    localStorage.setItem("textInput2", textInput2);
    
    // function saveText() {
    //     // tried to save multiple values to an object...
    //     var todo = {
    //       eight: $(".text-area").val(),
    //       nine: $(".text-area").val(),
    //       ten: $(".text-area").val(),
    //     };
    //     // Use .setItem() to store object in storage and JSON.stringify to convert it as a string
    //     localStorage.setItem("saveText", JSON.stringify(saveText));
     
    // var textArr = querySelectorAll(".text-area")
    // for (let i = 0; i < textArr.length; i++ ){
    //     if("<textarea>" = "")
    // }
}

);

//retrieving the saved data and getting it on the screen
  onload = function () {
  var textRetrieve1 = localStorage.getItem("textInput1");
  var textRetrieve2 = localStorage.getItem("textInput2");
  document.getElementById("text1").value = textRetrieve1;
  document.getElementById("text2").value = textRetrieve2;
};

// below will get the local time at just the hour
var localTime = moment().format("H");
console.log(localTime);
//////////////////////////////////










// Functionallity of the textbox changing color to the time

var dataArr = [document.querySelectorAll(".text-area")]
for(let i = 0; i < dataArr.length; i++){

console.log(dataArr[i])


var value = $(".text-area").attr("data-value")
var currentTime = moment().format("h"); 

console.log(value)
console.log($(".text-area"))






 if(value < currentTime){
        $(".newD").addClass("past")
}else if( value == currentTime){
    $(".newD").addClass("present")
}else($(".newD").addClass("future"))

}












//below has appropriate sized text box
// if(value < currentTime){
//     $("#text1").addClass("past")
// }else if( value == currentTime){
// $("#text1").addClass("present")
// }else($("#text1").addClass("future"))




// setInterval(() => {
//     var time = moment().format("h:mm:ss a");
//   }, 1000);
//   console.log(time);
  