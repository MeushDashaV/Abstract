document.addEventListener('DOMContentLoaded', () => {
  const feedbackData = [
    {
      imgSrc: './img/photo.png',
      name: 'Julian Francis',
      profession: 'Quality Control Chemist',
      desc: 'As part of the classes I teach, I task my students with preparing a lot of presentations...',
    },
    {
      imgSrc: './img/photo2.png',
      name: 'Roberto Rowe',
      profession: 'Licensed Embalmer',
      desc: 'As part of the classes I teach, I task my students with preparing a lot of presentations. To save time & reduce boredom, I occasionally have only a pick who presents the good work!',
    },
    {
      imgSrc: './img/photo3.png',
      name: 'Julian Francis',
      profession: 'Quality Control Chemist',
      desc: 'As part of the classes I teach, I task my students with preparing a lot of presentations...',
    },
    {
      imgSrc: './img/photo.png',
      name: 'Julian Francis',
      profession: 'Quality Control Chemist',
      desc: 'As part of the classes I teach, I task my students with preparing a lot of presentations...',
    },
    {
      imgSrc: './img/photo2.png',
      name: 'Roberto Rowe',
      profession: 'Licensed Embalmer',
      desc: 'As part of the classes I teach, I task my students with preparing a lot of presentations. To save time & reduce boredom, I occasionally have only a pick who presents the good work!',
    },
    {
      imgSrc: './img/photo3.png',
      name: 'Julian Francis',
      profession: 'Quality Control Chemist',
      desc: 'As part of the classes I teach, I task my students with preparing a lot of presentations...',
    },
  ];

  const container = document.querySelector('.reviews-section__list');
  const prevBtn = document.querySelector('.carousel-button-left');
  const nextBtn = document.querySelector('.carousel-button-right');
  let currentIndex = 0;
  let cardsToShow = 3; // Кількість карток, що показуються, змінюється в залежності від ширини екрану

  function createFeedback(index) {
    const feedbackContainer = document.createElement('li');
    feedbackContainer.classList.add('reviews-section__item');

    const article = document.createElement('article');
    feedbackContainer.appendChild(article);

    const img = document.createElement('img');
    img.src = feedbackData[index].imgSrc;
    img.alt = '';
    article.appendChild(img);

    const feedbackBlockFix = document.createElement('div');
    feedbackBlockFix.classList.add('reviews-section__block');
    article.appendChild(feedbackBlockFix);

    const infoDiv = document.createElement('div');
    feedbackBlockFix.appendChild(infoDiv);

    const name = document.createElement('h3');
    name.classList.add('reviews-section__name');
    name.textContent = feedbackData[index].name;
    infoDiv.appendChild(name);

    const profession = document.createElement('p');
    profession.classList.add('reviews-section__desk');
    profession.textContent = feedbackData[index].profession;
    infoDiv.appendChild(profession);

    const starsDiv = document.createElement('div');
    starsDiv.classList.add('reviews-section__stars');
    feedbackBlockFix.appendChild(starsDiv);

    const starsImg = document.createElement('img');
    starsImg.src = './img/stars.svg'; // Перевірте шлях до зображення
    starsImg.alt = 'Rating stars';
    starsDiv.appendChild(starsImg);

    const desc = document.createElement('p');
    desc.textContent = feedbackData[index].desc;
    article.appendChild(desc);

    return feedbackContainer;
  }

  function updateCarousel() {
    container.innerHTML = '';

    for (let i = 0; i < cardsToShow; i++) {
      const index = (currentIndex + i) % feedbackData.length;
      const feedbackItem = createFeedback(index);

      // Додаємо клас для центральної картки
      if (i === Math.floor(cardsToShow / 2)) {
        feedbackItem.classList.add('reviews-section__item--center');
      }

      container.appendChild(feedbackItem);
    }
  }

  function showNextFeedback() {
    currentIndex = (currentIndex + 1) % feedbackData.length;
    updateCarousel();
  }

  function showPrevFeedback() {
    currentIndex =
      (currentIndex - 1 + feedbackData.length) % feedbackData.length;
    updateCarousel();
  }

  function handleResize() {
    if (window.innerWidth <= 400) {
      cardsToShow = 1;
    } else {
      cardsToShow = 3;
    }
    updateCarousel();
  }

  prevBtn.addEventListener('click', showPrevFeedback);
  nextBtn.addEventListener('click', showNextFeedback);
  window.addEventListener('resize', handleResize);

  // Ініціалізація каруселі
  handleResize();
});
