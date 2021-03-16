let burger = document.querySelector('.nav__burger');
let menu = document.querySelector('.nav');

let openMenu = function() {
  menu.classList.toggle('nav--active');
}

burger.addEventListener('click', openMenu);