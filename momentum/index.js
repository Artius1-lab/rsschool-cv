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
document.addEventListener("DOMContentLoaded", function() { // событие загрузки страницы

    // выбираем на странице все элементы типа textarea и input
    document.querySelectorAll('textarea, input').forEach(function(e) {
        // если данные значения уже записаны в sessionStorage, то вставляем их в поля формы
        // путём этого мы как раз берём данные из памяти браузера, если страница была случайно перезагружена
        if(e.value === '') e.value = window.sessionStorage.getItem(e.name, e.value);
        // на событие ввода данных (включая вставку с помощью мыши) вешаем обработчик
        e.addEventListener('input', function() {
            // и записываем в sessionStorage данные, в качестве имени используя атрибут name поля элемента ввода
            window.sessionStorage.setItem(e.name, e.value);
        })
    })

}); 

//----------------Input end----------------//
