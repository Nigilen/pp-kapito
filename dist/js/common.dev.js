"use strict";

var burger = document.querySelector('.nav__burger');
var menu = document.querySelector('.nav');

var openMenu = function openMenu() {
  menu.classList.toggle('nav--active');
};

burger.addEventListener('click', openMenu);