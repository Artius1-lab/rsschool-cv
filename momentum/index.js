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

if (hourNow>=6 && hourNow < 12) {//с 6:00 до 11:59 - Good morning / Доброе утро / Добрай раніцы
    timeOfDay = 0;
  } else if (hourNow>=12 && hourNow < 18) {//с 12:00 до 17:59 - Good afternoon / Добрый день / Добры дзень
    timeOfDay = 2;
    }  else if(hourNow>=18 && hourNow<24){//с 18:00 до 23:59 - Good evening / Добрый вечер / Добры вечар
        timeOfDay = 1;
    }else {
        timeOfDay = 3;//с 00:00 до 5:59 - Good night / Доброй/Спокойной ночи / Дабранач
  }




//if(hourNow >= 18) {
  //  timeOfDay = 1;
//} else if (hourNow >= 12) {
   // timeOfDay = 2;
//} else if (hourNow > 0) {
   // timeOfDay = 3;
//} else {
 //   timeOfDay = 0;
//}

// Randomize 3 images            
var rnd = Math.floor(Math.random() * (21 - 1) + 1); // Returns a random number between 1 (inclusive) and 21 (exclusive)

switch (timeOfDay) {
    case 1: // Evening
        switch (rnd) {
            case 1: block.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/01.jpg')"; break;
            case 2: block.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/02.jpg')"; break;
            case 3: block.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/03.jpg')"; break;
            case 4: block.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/04.jpg')"; break;
            case 5: block.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/05.jpg')"; break;
            case 6: block.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/06.jpg')"; break;
            case 7: block.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/07.jpg')"; break;
            case 8: block.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/08.jpg')"; break;
            case 9: block.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/09.jpg')"; break;
            case 10: block.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/10.jpg')"; break;
            case 11: block.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/11.jpg')"; break;
            case 12: block.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/12.jpg')"; break;
            case 13: block.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/13.jpg')"; break;
            case 14: block.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/14.jpg')"; break;
            case 15: block.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/15.jpg')"; break;
            case 16: block.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/16.jpg')"; break;
            case 17: block.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/17.jpg')"; break;
            case 18: block.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/18.jpg')"; break;
            case 19: block.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/19.jpg')"; break;
            case 20: block.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/20.jpg')"; break;
        } 
        break;
    case 2: // Afternoon
      
        switch (rnd) {
            case 1: block.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/afternoon/01.jpg')"; break;
            case 2: block.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/afternoon/02.jpg')"; break;
            case 3: block.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/afternoon/03.jpg')"; break;
            case 4: block.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/afternoon/04.jpg')"; break;
            case 5: block.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/afternoon/05.jpg')"; break;
            case 6: block.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/afternoon/06.jpg')"; break;
            case 7: block.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/afternoon/07.jpg')"; break;
            case 8: block.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/afternoon/08.jpg')"; break;
            case 9: block.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/afternoon/09.jpg')"; break;
            case 10: block.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/afternoon/10.jpg')"; break;
            case 11: block.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/afternoon/11.jpg')"; break;
            case 12: block.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/afternoon/12.jpg')"; break;
            case 13: block.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/afternoon/13.jpg')"; break;
            case 14: block.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/afternoon/14.jpg')"; break;
            case 15: block.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/afternoon/15.jpg')"; break;
            case 16: block.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/afternoon/16.jpg')"; break;
            case 17: block.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/afternoon/17.jpg')"; break;
            case 18: block.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/afternoon/18.jpg')"; break;
            case 19: block.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/afternoon/19.jpg')"; break;
            case 20: block.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/afternoon/20.jpg')"; break;
        } 
        break;
    case 0: // Morning
    
        switch (rnd) {
            case 1: block.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/morning/01.jpg')"; break;
            case 2: block.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/morning/02.jpg')"; break;
            case 3: block.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/morning/03.jpg')"; break;
            case 4: block.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/morning/04.jpg')"; break;
            case 5: block.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/morning/05.jpg')"; break;
            case 6: block.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/morning/06.jpg')"; break;
            case 7: block.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/morning/07.jpg')"; break;
            case 8: block.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/morning/08.jpg')"; break;
            case 9: block.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/morning/09.jpg')"; break;
            case 10: block.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/morning/10.jpg')"; break;
            case 11: block.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/morning/11.jpg')"; break;
            case 12: block.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/morning/12.jpg')"; break;
            case 13: block.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/morning/13.jpg')"; break;
            case 14: block.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/morning/14.jpg')"; break;
            case 15: block.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/morning/15.jpg')"; break;
            case 16: block.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/morning/16.jpg')"; break;
            case 17: block.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/morning/17.jpg')"; break;
            case 18: block.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/morning/18.jpg')"; break;
            case 19: block.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/morning/19.jpg')"; break;
            case 20: block.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/morning/20.jpg')"; break;
        } 
        break;
        case 3: // Night
    
        switch (rnd) {
          case 1: block.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/night/01.jpg')"; break;
          case 2: block.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/night/02.jpg')"; break;
          case 3: block.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/night/03.jpg')"; break;
          case 4: block.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/night/04.jpg')"; break;
          case 5: block.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/night/05.jpg')"; break;
          case 6: block.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/night/06.jpg')"; break;
          case 7: block.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/night/07.jpg')"; break;
          case 8: block.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/night/08.jpg')"; break;
          case 9: block.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/night/09.jpg')"; break;
          case 10: block.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/night/10.jpg')"; break;
          case 11: block.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/night/11.jpg')"; break;
          case 12: block.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/night/12.jpg')"; break;
          case 13: block.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/night/13.jpg')"; break;
          case 14: block.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/night/14.jpg')"; break;
          case 15: block.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/night/15.jpg')"; break;
          case 16: block.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/night/16.jpg')"; break;
          case 17: block.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/night/17.jpg')"; break;
          case 18: block.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/night/18.jpg')"; break;
          case 19: block.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/night/19.jpg')"; break;
          case 20: block.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/night/20.jpg')"; break;

        }
        break;

    default: // Generic
        switch (rnd) {
            case 1: block.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/18.jpg')"; break;
            case 2: block.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/19.jpg')"; break;
            case 3: block.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/20.jpg')"; break;
        }
        break;
} 

var image =["url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/01.jpg')","url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/02.jpg')","url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/03.jpg')","url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/04.jpg')","url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/05.jpg')","url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/06.jpg')","url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/07.jpg')","url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/08.jpg')","url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/09.jpg')","url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/10.jpg')","url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/11.jpg')","url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/12.jpg')","url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/13.jpg')","url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/14.jpg')","url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/15.jpg')","url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/16.jpg')","url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/17.jpg')","url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/18.jpg')","url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/19.jpg')","url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/20.jpg')","url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/afternoon/01.jpg')","url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/afternoon/02.jpg')","url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/afternoon/03.jpg')",
"url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/afternoon/04.jpg')","url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/afternoon/05.jpg')","url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/afternoon/06.jpg')","url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/afternoon/07.jpg')","url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/afternoon/08.jpg')","url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/afternoon/09.jpg')","url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/afternoon/10.jpg')","url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/afternoon/11.jpg')","url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/afternoon/12.jpg')","url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/afternoon/13.jpg')","url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/afternoon/13.jpg')","url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/afternoon/14.jpg')","url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/afternoon/15.jpg')","url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/afternoon/16.jpg')","url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/afternoon/17.jpg')","url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/afternoon/18.jpg')","url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/afternoon/19.jpg')","url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/afternoon/20.jpg')",
"url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/morning/01.jpg')","url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/morning/02.jpg')","url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/morning/03.jpg')","url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/morning/04.jpg')","url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/morning/05.jpg')","url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/morning/06.jpg')","url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/morning/07.jpg')","url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/morning/08.jpg')","url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/morning/09.jpg')","url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/morning/10.jpg')","url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/morning/11.jpg')","url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/morning/12.jpg')","url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/morning/13.jpg')","url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/morning/14.jpg')","url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/morning/15.jpg')","url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/morning/16.jpg')","url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/morning/17.jpg')","url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/morning/18.jpg')","url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/morning/19.jpg')","url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/morning/20.jpg')",
"url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/night/01.jpg')","url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/night/02.jpg')","url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/night/03.jpg')","url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/night/04.jpg')","url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/night/05.jpg')","url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/night/06.jpg')","url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/night/07.jpg')","url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/night/08.jpg')","url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/night/09.jpg')","url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/night/10.jpg')","url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/night/11.jpg')","url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/night/12.jpg')","url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/night/13.jpg')","url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/night/14.jpg')","url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/night/15.jpg')","url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/night/16.jpg')","url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/night/17.jpg')","url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/night/18.jpg')","url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/night/19.jpg')","url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/night/20.jpg')"];
var i = 0;
document.getElementById("next").addEventListener("click", () => {
i = i<image.length ? ++i : 0;
document.querySelector("body").style.background = image[i];

});

document.getElementById("prev").addEventListener("click", () => {
i = i<image.length ? --i : 0;
document.querySelector("body").style.background = image[i];
}); 

//---------------------------- Background images end------------------------//

