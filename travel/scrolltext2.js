var hiddenElement4 = document.getElementById('story3_text_id');
var btn4= document.querySelector('.header__item4');

function handleButtonClick() {
   hiddenElement4.scrollIntoView({block: "center", behavior: "smooth"});
}
btn4.addEventListener('click', handleButtonClick);