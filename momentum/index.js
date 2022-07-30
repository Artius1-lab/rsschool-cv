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
const date = new Date();
const options = {month: 'long', day: 'numeric'};
const currentDate = date.toLocaleDateString('de-De', options);
document.getElementById("date").innerHTML = date;
console.log(currentDate);

//----------------Date end-------------//