document.addEventListener('DOMContentLoaded', function () {
  const swiper1 = new Swiper('.swiper1', {
    slidesPerView: 3,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination1",
    },
    navigation: {
      nextEl: '.swiper-button-next1',
      prevEl: '.swiper-button-prev1',
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        spaceBetween: 0,
        loop: true,
        slidesPerView: 1
      },
      767: {
        spaceBetween: 10,
        slidesPerView: 2
      },
      992: {
        spaceBetween: 20,
        slidesPerView: 2
      },
      1200: {
        spaceBetween: 20,
        slidesPerView: 3
      }
    }
  });

});

document.addEventListener("DOMContentLoaded", () => {
  let menuBtn = document.querySelector('.menu-btn');
  let menu = document.querySelector('.menu');
  let get = document.querySelector('.body-wrap');
  menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('active');
    get.classList.toggle('active');
    menu.classList.toggle('active');
  });
});
$(document).ready(function () {
  // Скрываем все ul и все картинки сначала
  $('.main__left div ul').hide();
  $('.main__img').hide();

  // Активируем первую секцию по умолчанию
  $('.main__left div:first-child ul').show();
  $('.main__left div:first-child span').addClass('active');
  $('.main__img1').show();

  // Обработчик клика
  $('.main__left div span').click(function () {
    var $this = $(this);
    var $clickedIndex = $('.main__left div span').index(this);

    // Скрываем все ul кроме текущего
    $('.main__left div ul').not($this.next('ul')).slideUp();

    // Переключаем текущий ul
    $this.next('ul').slideToggle();

    // Скрываем все изображения
    $('.main__img').hide();

    // Показываем соответствующее изображение
    $('.main__img' + ($clickedIndex + 1)).show();

    // Обновляем классы активности
    $('.main__left div span').removeClass('active');
    $this.addClass('active');
  });
});

document.addEventListener("DOMContentLoaded", () => {
  $('.menu li a.go_to').click(function (event) {
    $('.menu-btn').toggleClass('active');
    $('.body-wrap').toggleClass('active');
    $('.menu').toggleClass('active');
    return false;
  });
});
document.addEventListener("DOMContentLoaded", () => {
  $('.menu .btn').click(function (event) {
    $('.body-wrap').toggleClass('active');
    $('.menu-btn').toggleClass('active');
    $('.menu').toggleClass('active');
    return false;
  });
});
document.addEventListener("DOMContentLoaded", () => {
  // Scroll
  $('.go_to').click(function () { // ловим клик по ссылке с классом go_to
    var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
    if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
      $('html, body').animate({ scrollTop: $(scroll_el).offset().top - 100 }, 800); // анимируем скроолинг к элементу scroll_el
    }
    return false; // выключаем стандартное действие
  });
});
document.addEventListener("DOMContentLoaded", () => {
  // svg
  $(function () {
    jQuery('img.svg').each(function () {
      var $img = jQuery(this);
      var imgID = $img.attr('id');
      var imgClass = $img.attr('class');
      var imgURL = $img.attr('src');

      jQuery.get(imgURL, function (data) {
        // Get the SVG tag, ignore the rest
        var $svg = jQuery(data).find('svg');

        // Add replaced image's ID to the new SVG
        if (typeof imgID !== 'undefined') {
          $svg = $svg.attr('id', imgID);
        }
        // Add replaced image's classes to the new SVG
        if (typeof imgClass !== 'undefined') {
          $svg = $svg.attr('class', imgClass + ' replaced-svg');
        }

        // Remove any invalid XML tags as per http://validator.w3.org
        $svg = $svg.removeAttr('xmlns:a');

        // Check if the viewport is set, else we gonna set it if we can.
        if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
          $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
        }

        // Replace image with new SVG
        $img.replaceWith($svg);

      }, 'xml');

    });
  });
});
