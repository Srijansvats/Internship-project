const slider = document.querySelector('.slider');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

let slideIndex = 0;

function showSlide(index) {
  if (index < 0) {
    slideIndex = slider.children.length - 1;
  } else if (index >= slider.children.length) {
    slideIndex = 0;
  }
  slider.style.transform = `translateX(-${slideIndex * 100}%)`;
}

prevButton.addEventListener('click', () => {
  showSlide(slideIndex - 1);
});

nextButton.addEventListener('click', () => {
  showSlide(slideIndex + 1);
});

// Initial setup
showSlide(slideIndex);
