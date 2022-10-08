var hiddenElement3 = document.getElementById('find_more_mobile_id');
var btn3 = document.querySelector('.header__item3');

function handleButtonClick() {
   hiddenElement3.scrollIntoView({block: "center", behavior: "smooth"});
}
btn3.addEventListener('click', handleButtonClick);