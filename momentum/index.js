//---------------Clock-------------//

window.onload  = function(){
    window.setInterval(function(){
        var date = new Date();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();

        if(hours < 10) hours = "0" + hours; 
        if(minutes < 10) minutes = "0" + minutes;
        if(seconds < 10) seconds = "0" + seconds;
        var clock = hours + ":"+minutes+":"+seconds;
        document.getElementById("clock").innerHTML = clock;
    },1000);
};
//---------------Clock end--------------//
//---------------Date-------------------//
var date = new Date();

var options = {
  month: 'long',
  day: 'numeric',
  weekday: 'long',
  };

document.getElementById("date").innerHTML = date.toLocaleString("en-US", options); // Wednesday, December 31
//----------------Date end-------------//
//----------------Day time-------------//
var today = new Date()
var curHr = today.getHours()
var time = null;

if (curHr < 12) {
  var time = "Good Morning,";
} else if (curHr < 18) {
  var time = "Good Afternoon,";

} else if (curHr < 24) {
    var time = "Good Evening,";
} else {
  var time = "Good Night,";
}

document.getElementById("greeting").innerHTML = time;

//----------------Day time end-------------//