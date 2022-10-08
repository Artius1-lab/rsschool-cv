const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const menu = document.querySelector("#menu").cloneNode(1);
const body_burger = document.querySelector("#body_")


hamb.addEventListener("click", hambHandler);

function hambHandler(e){
    e.preventDefault();
    popup.classList.toggle("open");
    hamb.classList.toggle("active");
   
    renderPopup();
}

function renderPopup(){
    popup.appendChild(menu);
}

// добавляем обработчик кликов по всему документу (странице)
document.addEventListener("click", (e) =>
{
  // проверяем, что элемент на который кликнули (e.target) не находится в блоке .burger-wrap
  if (!hamb.contains(e.target))
  {
    popup.classList.remove('open');// 
  }
});


function burgerMenu(icon) {
    icon.classList.toggle("change");
  }