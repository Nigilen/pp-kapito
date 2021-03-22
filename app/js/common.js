let burger = document.querySelector('.burger');
let menu = document.querySelector('.nav');

let openMenu = function() {
  menu.classList.toggle('nav--active');
}

burger.addEventListener('click', openMenu);


let menuList = document.querySelectorAll('.menu-list');
let toggleItems = document.querySelectorAll('.toggles-item');
let toggleDescItems = document.querySelectorAll('.toggle-item--desktop');





for (let i = 0; i < menuList.length; i++) {
  toggleItems[i].addEventListener('click', function (evt) {
    for (let j = 0; j < menuList.length; j++) {
      menuList[j].classList.remove('menu-list--active');
    }
    menuList[i].classList.add('menu-list--active');
  });
};

for (let i = 0; i < menuList.length; i++) {
  toggleDescItems[i].addEventListener('click', function (evt) {
    for (let j = 0; j < menuList.length; j++) {
      menuList[j].classList.remove('menu-list--active');
    }  
    menuList[i].classList.add('menu-list--active');
  });
};




