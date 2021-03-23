let menuList = document.querySelectorAll('.menu-list');
let toggleItems = document.querySelectorAll('.toggles-item');
let toggleDescItems = document.querySelectorAll('.toggle-item--desktop');

for (let i = 0; i < menuList.length; i++) {
  toggleItems[i].addEventListener('click', function() {
    for (let j = 0; j < menuList.length; j++) {
      menuList[j].classList.remove('menu-list--active');
    }
    menuList[i].classList.add('menu-list--active');
  });
};

for (let i = 0; i < menuList.length; i++) {
  toggleDescItems[i].addEventListener('click', function() {
    for (let j = 0; j < menuList.length; j++) {
      menuList[j].classList.remove('menu-list--active');
      toggleDescItems[j].classList.remove('active');
    }  
    menuList[i].classList.add('menu-list--active');
    toggleDescItems[i].classList.add('active');
  });
};
