document.addEventListener('DOMContentLoaded', () => {
  const prevButton = document.querySelector('.carousel-button-left');
  const nextButton = document.querySelector('.carousel-button-right');
  const list = document.querySelector('.rewiews-section__list');
  const items = Array.from(list.children);
  const itemWidth = 486; // Ширина картки
  const gap = 36; // Відстань між картками
  let currentIndex = 0; // Індекс центральної картки

  // Клонування перших і останніх карток для безперервного циклу
  const startClone = items.slice(0, 3).map(item => item.cloneNode(true));
  const endClone = items.slice(-3).map(item => item.cloneNode(true));
  startClone.forEach(clone => list.appendChild(clone));
  endClone.forEach(clone => list.insertBefore(clone, items[0]));

  // Оновлення ширини списку, щоб врахувати клоновані елементи
  list.style.width = `${(items.length + 6) * (itemWidth + gap)}px`;

  // Оновлення позиції списку на початкову позицію
  const updateListPosition = () => {
    // Визначення центральної картки
    const middleIndex = (currentIndex + 3) % items.length; // Зсув на 3 для обліку клонів

    // Оновлення позиції списку
    list.style.transform = `translateX(-${
      (currentIndex + 3) * (itemWidth + gap)
    }px)`;

    // Скидання класу 'active' з усіх карток
    items.forEach(item => item.classList.remove('active'));
    items[middleIndex].classList.add('active');
  };

  // Перехід до наступної картки
  const moveToNext = () => {
    currentIndex++;
    if (currentIndex >= items.length) {
      currentIndex = 0; // Починаємо з першої картки після клонів
      list.style.transition = 'none';
      list.style.transform = `translateX(-${3 * (itemWidth + gap)}px)`;
      setTimeout(() => {
        list.style.transition = 'transform 0.3s ease';
        currentIndex++;
        updateListPosition();
      }, 50);
      return;
    }
    updateListPosition();
  };

  // Перехід до попередньої картки
  const moveToPrev = () => {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = items.length - 1; // Починаємо з останньої картки перед клонами
      list.style.transition = 'none';
      list.style.transform = `translateX(-${
        (items.length + 3) * (itemWidth + gap)
      }px)`;
      setTimeout(() => {
        list.style.transition = 'transform 0.3s ease';
        currentIndex--;
        updateListPosition();
      }, 50);
      return;
    }
    updateListPosition();
  };

  nextButton.addEventListener('click', moveToNext);
  prevButton.addEventListener('click', moveToPrev);

  // Ініціалізація позиції списку на початку
  updateListPosition();
});
