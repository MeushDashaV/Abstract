document.addEventListener('DOMContentLoaded', () => {
  const prevButton = document.querySelector('.carousel-button-left');
  const nextButton = document.querySelector('.carousel-button-right');
  const list = document.querySelector('.reviews-section__list');
  const items = document.querySelectorAll('.reviews-section__item');
  const itemsCount = items.length;
  let index = 0; // Початковий індекс

  // Функція для оновлення позиції списку
  const updateListPosition = () => {
    const offset = -index * 352; // Ширина картки
    list.style.transform = `translateX(${offset}px)`;
  };

  // Перемикання карток вліво
  prevButton.addEventListener('click', () => {
    index = index === 0 ? itemsCount - 1 : index - 1; // Повертається до останньої картки
    updateListPosition();
  });

  // Перемикання карток вправо
  nextButton.addEventListener('click', () => {
    index = index === itemsCount - 1 ? 0 : index + 1; // Повертається до першої картки
    updateListPosition();
  });
});
