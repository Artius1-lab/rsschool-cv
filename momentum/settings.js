let div_date = document.getElementById('date');

let div_time = document.getElementById('timer');
let div_greeting = document.getElementById('greeting-container-id');
let div_weather = document.getElementById('weather-id')
let div_audio = document.getElementById('player-id');
let div_quotes = document.getElementById('quotes-id');

  function doalert_date(checkboxElem) {
    if (checkboxElem.checked) {
        div_date.style.visibility = 'visible';
    } else {
        div_date.style.visibility = 'hidden';
    }
  }
 

  function doalert_time(checkboxElem) {
    if (checkboxElem.checked) {
        div_time.style.visibility = 'visible';
    } else {
        div_time.style.visibility = 'hidden';
    }
  }

  function doalert_greeting(checkboxElem) {
    if (checkboxElem.checked) {
        div_greeting.style.visibility = 'visible';
    } else {
        div_greeting.style.visibility = 'hidden';
    }
  }

  function doalert_weather(checkboxElem) {
    if (checkboxElem.checked) {
        div_weather.style.visibility = 'visible';
    } else {
        div_weather.style.visibility = 'hidden';
    }
  }

  function doalert_audio(checkboxElem) {
    if (checkboxElem.checked) {
        div_audio.style.visibility = 'visible';
    } else {
        div_audio.style.visibility = 'hidden';
    }
  }

  function doalert_quotes(checkboxElem) {
    if (checkboxElem.checked) {
        div_quotes.style.visibility = 'visible';
    } else {
        div_quotes.style.visibility = 'hidden';
    }
  }