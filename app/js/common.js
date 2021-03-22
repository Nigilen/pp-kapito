let burger = document.querySelector('.burger');
let menu = document.querySelector('.nav');

let openMenu = function() {
  menu.classList.toggle('nav--active');
}

burger.addEventListener('click', openMenu);


let menuList = document.querySelectorAll('.menu-list');
let toggleItems = document.querySelectorAll('.toggles-item');
let toggleDescItems = document.querySelectorAll('.toggle-item--desctop');

let toggleMenu = function (evt) {
  
}


for (let i = 0; i < toggleItems.length; i++) {
  toggleItems[i].addEventListener('click', function(evt) {
    let target = evt.target;

    menuList[i].classList.add('menu-list--active'); 

    if (target.classList.contains('menu-list--active') === false) {
      for (let j = 0; j < menuList.length; j++) {
        menuList[j].classList.remove('menu-list--active'); 
      }
    }
    
  });
};

