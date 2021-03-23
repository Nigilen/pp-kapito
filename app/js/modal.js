let buttonBooking = document.querySelector('.booking-button');
let bookingForm = document.querySelector('.booking-form');
let buttonClose = bookingForm.querySelector('.form-button-close');
let form = document.querySelector('.form');

window.addEventListener('click', function(evt) {
  if (evt.target === buttonBooking) {
    bookingForm.classList.add('booking-form--active');
  } else if (evt.target === bookingForm && evt.target !== form) {
    bookingForm.classList.remove('booking-form--active');
  }
});

buttonClose.addEventListener('click', function() {
  bookingForm.classList.remove('booking-form--active');
});

window.addEventListener('keydown', function(evt) {
  let closeKey = evt.key;
  if (closeKey === "Escape") {
    bookingForm.classList.remove('booking-form--active');
  }
});