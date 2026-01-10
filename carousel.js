const slides = document.querySelectorAll('#hero-carousel .slide');
let index = 0;

// FASTER rotation — slide changes every 8 seconds instead of 14
const INTERVAL = 8000;

function showNext() {
  slides[index].classList.remove('active');
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
}

setInterval(showNext, INTERVAL);