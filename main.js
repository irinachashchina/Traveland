const btnMenu = document.querySelector('.header__btn-menu');
const nav = document.querySelector('.header__nav');

btnMenu.addEventListener('click', function() {
    btnMenu.classList.toggle('header__btn-menu--open');
    nav.classList.toggle('header__nav--open');
});

const swiper = new Swiper('.swiper', {
    slidesPerView: "auto",
    spaceBetween: 73,
    centeredSlides: true,
    loop: true,
    slidesPerGroup: 2,
    pagination: {
      el: '.special-offers__pagination',
      clickable: true,
    },
    navigation: {
        nextEl: '.special-offers__next',
        prevEl: '.special-offers__prev',
    },
  });