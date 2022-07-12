

document.addEventListener('click', function(event) {
    var e=document.getElementsByClassName('.header__nav_active');
    if (!e.contains(event.target)) e.style.display='none';
  });