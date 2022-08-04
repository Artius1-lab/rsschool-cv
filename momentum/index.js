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

if (curHr>=6 && curHr < 12) {//с 6:00 до 11:59 - Good morning / Доброе утро / Добрай раніцы
    var time = "Good Morning,";
  } else if (curHr>=12 && curHr < 18) {//с 12:00 до 17:59 - Good afternoon / Добрый день / Добры дзень
    var time = "Good Afternoon,";
    }  else if(curHr>=18 && curHr<24){//с 18:00 до 23:59 - Good evening / Добрый вечер / Добры вечар
        var time = "Good Evening,";
    }else {
    var time = "Good Night,";//с 00:00 до 5:59 - Good night / Доброй/Спокойной ночи / Дабранач
  }

document.getElementById("greeting").innerHTML = time;

//----------------Day time end-------------//
//----------------Input--------------------//
var field = document.getElementById("name_");

// Проверяем наличие значения 'autosave'
// (это может произойти только если страница будет случайно обновлена)
if (sessionStorage.getItem("autosave")) {
  // Восстанавливаем содержимое текстового поля
  field.value = sessionStorage.getItem("autosave");
}

// Отслеживаем все изменения в текстовом поле
field.addEventListener("change", function() {
  // И сохраняем их в объект session storage
  sessionStorage.setItem("autosave", field.value);
});

//----------------Input end----------------//

//----------------Background images---------//

var today = new Date();
var hourNow = today.getHours();

var style;
var block = document.getElementById('body_');

var timeOfDay;            

if(hourNow >= 18) {
    timeOfDay = 1;
} else if (hourNow >= 12) {
    timeOfDay = 2;
} else if (hourNow > 0) {
    timeOfDay = 3;
} else {
    timeOfDay = 0;
}

// Randomize 3 images            
var rnd = Math.floor(Math.random() * (4 - 1) + 1); // Returns a random number between 1 (inclusive) and 4 (exclusive)

switch (timeOfDay) {
    case 1: // Evening
        switch (rnd) {
            case 1: block.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/18.jpg')"; break;
            case 2: block.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/19.jpg')"; break;
            case 3: block.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/20.jpg')"; break;
        } 
        break;
    case 2: // Afternoon
      
        switch (rnd) {
            case 1: block.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/18.jpg')"; break;
            case 2: block.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/19.jpg')"; break;
            case 3: block.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/20.jpg')"; break;

            
        } 
        break;
    case 0: // Morning

        switch (rnd) {
            case 1: document.write('<img src="MorningImage1.jpg" />'); break;
            case 2: document.write('<img src="MorningImage2.jpg" />'); break;
            case 3: document.write('<img src="MorningImage1.jpg" />'); break;
        } 
        break;
    default: // Generic
        
        switch (rnd) {
            case 1: document.write('<img src="GenericImage1.jpg" />'); break;
            case 2: document.write('<img src="GenericImage2.jpg" />'); break;
            case 3: document.write('<img src="GenericImage1.jpg" />'); break;
        }
        break;
} 


//---------------------------- Background images end------------------------//