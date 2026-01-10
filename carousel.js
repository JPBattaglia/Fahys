const slides = document.querySelectorAll('#hero-carousel .slide');
let index = 0;

function showNext() {
  slides[index].classList.remove('active');
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
}

setInterval(showNext, 14000);