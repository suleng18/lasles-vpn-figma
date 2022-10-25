$('.customer-list').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  prevArrow: `<button type='button' class='slick-prev pull-left'><img src="./images/arrow-left.svg"/></button>`,
  nextArrow: `<button type='button' class='slick-next pull-right'><img src="./images/arrow-right.svg"/></button>`,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ],
});

const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', function (e) {
  menu.classList.add('is-show');
});

document.addEventListener('click', function (e) {
  if (!menu.contains(e.target) && !e.target.matches('.menu-toggle')) {
    menu.classList.remove('is-show');
  }
});
