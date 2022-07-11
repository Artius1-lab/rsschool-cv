
var hiddenElement6 = document.getElementById('footer__logo__instagram_id');
var btn4= document.querySelector('.header__item6');

function handleButtonClick() {
   hiddenElement6.scrollIntoView({block: "center", behavior: "smooth"});
}
btn4.addEventListener('click', handleButtonClick);