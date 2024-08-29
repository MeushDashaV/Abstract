document.addEventListener('DOMContentLoaded', () => {
  const list = document.querySelector('.reviews-section__list');
  const items = document.querySelectorAll('.reviews-section__item');
  const prevButton = document.querySelector('.carousel-button-left');
  const nextButton = document.querySelector('.carousel-button-right');
  let currentIndex = 0;

  function updateCarousel() {
    // Зміна позиції слайда
    list.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  prevButton.addEventListener('click', () => {
    currentIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
    updateCarousel();
  });

  nextButton.addEventListener('click', () => {
    currentIndex = currentIndex === items.length - 1 ? 0 : currentIndex + 1;
    updateCarousel();
  });

  // Ініціалізація каруселі
  updateCarousel();
});
