window.addEventListener('mouseup', function (e) {
    const menu = document.querySelector('.header__nav')
    const menuItem = menu
    if (e.target != menu && e.target != menuItem) {
       document.body.classList.remove('-show')
    }
 })