let header = document.querySelector('.header');

window.addEventListener('scroll', function() {
  if (window.pageYOffset > 400) {
    header.classList.add('header--fixed');
  } else {
    header.classList.remove('header--fixed');
  }
})