// top section with the title and time stamp
var TitleText = $(".jumbotron");
var timeStamp = $("<h5>");
var time = moment().format('MMMM Do YYYY, h:mm:ss a');
$(timeStamp).text(time);
TitleText.append(timeStamp);
// end of top section with the title and time sta

// working on the save button function


















// below will get the local time at just the hour
var localTime = moment().format("h")
console.log(localTime)
//////////////////////////////////


//  below is trying to figure out how to target the value of an id for an if statement for the hour
var integer = parseInt((document.getElementById('bob').value), 10);
console.log(integer)


console.log($('#bob').val());
console.log(document.getElementById('bob').value);
console.log(localTime);
// /////////////////////////////////////////////////


// below is an example of a before vs. after to see if one point in time is before or
// after another point in time
var bool1 = moment('2010-10-20')
    .isBefore('2010-10-21'); //false
console.log(bool1);

var bool2 = moment('2010-10-20')
    .isAfter('2010-10-21'); //false
console.log(bool2);
// ////////////////////////////////////


// general if statement idea to compare time to turn the colors of the 
// todo sections different colors
// if(time<newtimestamp){
//     time-block = .past
// }else if (time === newtimestamp){
//     time-block = .present
// }else{time-block = .future}
////////////////////////////////////////////////


