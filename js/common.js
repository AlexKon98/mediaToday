jQuery(document).ready(function($) {  

  const swiper_container = document.querySelector(".swiper-container.slider-script-size-height");
  const creatives_nav = document.querySelector(".formats-slider");
  let wrapper_slider;
  if (swiper_container)
  {
    wrapper_slider = swiper_container.querySelector(".swiper-wrapper-slider");
  }

  const change_height_slide = () =>
  {
    let slides = document.querySelectorAll(".slider-script-size-height .swiper-slide");
    let access = false;
    if (creatives_nav)
    {
      access = true;
    }
    if (window.innerWidth < 1200 || access === true)
    {
      let container;
      let items;
      const active_block = document.querySelector(".slider-script-size-height .swiper-slide-active");
      if (active_block && swiper_container)
      {
        const title = active_block.querySelector(".title");
        container = active_block.querySelector(".container-slider");
        items = swiper_container.querySelector(".items_container_slider");
        let margin_size = 80;
        if (window.innerWidth < 768)
        {
          margin_size = 50;
        }
        if (wrapper_slider)
        {
          wrapper_slider.style.height = `${title.offsetHeight + container.offsetHeight + margin_size}px`;
        }
        if (title && container && items)
        {
          swiper_container.style.height = `${title.offsetHeight + container.offsetHeight + items.offsetHeight + margin_size + 50}px`;
        }
        else if (title)
        {
          slides = document.querySelectorAll(".slider-script-size-height .swiper-slide");
          container = active_block.querySelector(".format-images");
          const arrows = swiper_container.querySelector(".swiper-nav");
          items = swiper_container.querySelector(".container");
          for (let i = 0; i < slides.length; i++)
          {
            slides[i].style.height = `${title.offsetHeight + container.offsetHeight + margin_size}px`;
          }
          swiper_container.style.minHeight = `${title.offsetHeight + container.offsetHeight + arrows.offsetHeight + items.offsetHeight + margin_size}px`;
        }
      }
    }
    else
    {
      swiper_container.style.height = 'auto';
      if (wrapper_slider)
      {
        wrapper_slider.style.height = 'auto';
      }
      if (slides[0] !== null && slides[0] && slides[0].style.height)
      {
        for (let i = 0; i < slides.length; i++)
          {
            slides[i].style.height = '';
          }
      }
    }
  }

  const change_top_nav = (creatives_nav) =>
  {
    if (window.innerWidth < 768)
    {
      const swiper_nav = creatives_nav.querySelector(".container-swiper-nav");
      if (swiper_nav)
      {
        const active_block = document.querySelector(".slider-script-size-height .swiper-slide-active");
        const title = active_block.querySelector(".format-slide .title");
        const title_height = title.offsetHeight + 50;
        const swiper_height = swiper_nav.offsetHeight;
        const block =  active_block.querySelector(".creatives-devices-container");
        const block_height = block.offsetHeight + 110/2 - swiper_height/2;
        swiper_nav.style.top = `${title_height + block_height}px`;
      }
    }
  }

  window.addEventListener('DOMContentLoaded', () =>
  {
    if (swiper_container)
    {
      swiper_container.style.height = 'auto';
      if (wrapper_slider)
      {
        wrapper_slider.style.height = 'auto';
      }
      setTimeout(change_height_slide, 0);
    }
  });

  window.addEventListener('load', () =>
  {
    if (creatives_nav)
    {
      setTimeout(change_top_nav, 0, creatives_nav);
    }
  });

  window.addEventListener('resize', () =>
  {
    if (swiper_container)
    {
      swiper_container.style.height = 'auto';
      if (wrapper_slider)
      {
        wrapper_slider.style.height = 'auto';
      }
      setTimeout(change_height_slide, 0);
    }
    if (creatives_nav)
    {
      setTimeout(change_top_nav, 0, creatives_nav);
    }
  });

  var scrollWidth = window.innerWidth - document.documentElement.clientWidth;

  $('img, a').on('dragstart', function(event) {
    event.preventDefault();
  });

  $('[type="tel"]').mask('+7 (999) 999-99-99');

  $('.awards-item').matchHeight();

  // Preloader

  // $('.preloader-main').addClass('_right');

  // function preloaderWidth() {
  //   var w = $(window).width() / 2 + $('.preloader-main__logo').outerWidth() / 2;

  //   $('.preloader-main, .preloader-main__above-2').width(w);
  // }
  // preloaderWidth();

  // $(window).on('resize', function() {
  //   preloaderWidth();
  // });

  var preloaderInt;
  var preloaderPos = 0;
  var logoPos = Math.round((($(window).width() / 2 + $('.preloader-main__logo').outerWidth() / 2) * 100) / $(window).width());
  var preloaderEnd = false;

  function preloaderIntFunc(speed) {
    preloaderInt = setInterval(function() {

      preloaderPos++;

      $('.js-preloader').text(preloaderPos + ' %');

      $('.preloader-main__above').css('width', 100 - preloaderPos + 'vw');
      $('.preloader-main__logo').css('right', logoPos - preloaderPos < 0 ? '0%' : logoPos - preloaderPos + '%');

      if (!preloaderEnd) {
        if (preloaderPos == 40) {
          clearInterval(preloaderInt);
          preloaderIntFunc(500);
        }
        if (preloaderPos == 97) {
          clearInterval(preloaderInt);
        }
      }

      if (preloaderEnd && preloaderPos == 100) {
        clearInterval(preloaderInt);
        setTimeout(function() {

          $('.preloader').fadeOut(400);

        }, 300)
      }

    }, speed);
  }
  preloaderIntFunc(200);

  $(window).on('load', function() {
    preloaderEnd = true;
    clearInterval(preloaderInt);
    preloaderIntFunc(5);
  });

  // Preloader END

	// Map

	var mainMap;

	if ($("#main-map").length > 0) ymaps.ready(mainMapInit);

	function mainMapInit() {

		mainMap = new ymaps.Map("main-map", {
			center: coords,
			zoom: 16,
			controls: ["fullscreenControl"],
		});

		mainMap.controls.add('zoomControl', {
			float: 'none',
			position: {
				top: '8px',
				left: '8px'
			}
		});

		myGeoObject = new ymaps.GeoObject({});
		mainMap.geoObjects
			.add(myGeoObject)
			.add(new ymaps.Placemark([55.7726890689606,37.6876589999999], {
				hintContent: ""
			}, {
				preset: 'islands#icon',
				iconColor: '#572A6B'
			}));

		// mainMap.behaviors.disable('scrollZoom');

	};

	// Map END

  // Menu

  function mainMenuShow() {
    $('.main-menu').fadeIn();

    $('html').css({
      'overflow': 'hidden',
      'margin-right': scrollWidth
    });
  }

  function mainMenuClose() {
    $('.main-menu').fadeOut();

    setTimeout(function() {
      $('html').css({
        'overflow': '',
        'margin-right': ''
      });
    }, 500);
  }

  $('.main-menu-show').click(function() {
    mainMenuShow();
  });

  $('.main-menu__close').click(function() {
    mainMenuClose();
  });

  // Menu END

  // Popups

  $('.popup').addClass('mfp-hide');

  const magnificPopupArgs = {
    type: 'inline',
    removalDelay: 500,
    mainClass: 'mfp-zoom-in',
    tClose: 'Закрыть',
    tLoading: 'Загрузка...',
    closeMarkup: '<button title="%title%" class="close-btn ic ic-close" data-popup-close></button>',
    image: {
      tError: '<a href="%url%">Изображение</a> не может быть загружено.'
    },
    callbacks: {
      beforeOpen: function() {
        this.container.context.className = this.container.context.className.replace('mfp-container', 'mfp-container mfp-with-anim');
      }
    },
  };

  function popup_open(src, type) {
    let args = $.extend(true, {}, magnificPopupArgs);
    if (type == 'iframe' || type == 'image' || type == 'ajax') args['type'] = type;
    args['items'] = {
      src: src
    };
    $.magnificPopup.open(args);
  }

  function popup_gallery_args() {
    var args = $.extend(true, {}, magnificPopupArgs);

    args['type'] = 'image';
    args['gallery'] = {
      tPrev: 'Назад (или нажмите влево)',
      tNext: 'Далее (или нажмите вправо)',
      tCounter: '%curr% из %total%',
      enabled: true
    };

    return args;
  }

  $('body').on('click', '[data-popup]', function() {
    var type = $(this).attr('data-popup');
    popup_open($(this).attr('href'), type);
    return false;
  });

  $('body').on('click', '[data-popup-close]', function() {
    $.magnificPopup.close();
    return false;
  });

  $('.js-gallery').each(function() {
    $(this).find('a').not('[data-popup]').magnificPopup(popup_gallery_args());
  });

  // Popups END

  // Sliders

  var sliderIndex = -1;

  $('.awards-slider').each(function() {
    sliderIndex++;

    var slider = '#js-slider-' + sliderIndex;

    $(this).attr('id', slider.replace(/#/g, ''));

    new Swiper(slider + ' .swiper-container', {
			speed: 600,
      slidesPerView: 2,
      slidesPerColumn: 2,
      slidesPerColumnFill: 'row',
      navigation: {
        nextEl: slider + ' .swiper-button-next',
        prevEl: slider + ' .swiper-button-prev',
      },
      breakpoints: {
        1199: {
          slidesPerView: 1,
        }
      }
    });
  });

  $('.cases-slider').each(function() {
    sliderIndex++;

    var slider = '#js-slider-' + sliderIndex;

    $(this).attr('id', slider.replace(/#/g, ''));

    new Swiper(slider, {
      speed: 600,
      navigation: {
        nextEl: slider + ' .swiper-button-next',
        prevEl: slider + ' .swiper-button-prev',
      },
			scrollbar: {
        el: '.swiper-scrollbar',
      },
    });
  });

	$('.formats-slider').each(function() {
    sliderIndex++;

    var slider = '#js-slider-' + sliderIndex;

    $(this).attr('id', slider.replace(/#/g, ''));

    var swiperSlider = new Swiper(slider, {
			speed: 600,
			init: false,
      navigation: {
        nextEl: slider + ' .swiper-button-next',
        prevEl: slider + ' .swiper-button-prev',
      },
      breakpoints: {
        // when window width is <= 499px
        /*576: {
          allowTouchMove: false
        }*/
      }
    });

    var swiperSliderFormat = swiperSlider;

    swiperSliderFormat.on('activeIndexChange', function() 
    {
      if (swiper_container) 
      { 
        setTimeout(change_height_slide, 0); 
      }
      if (creatives_nav)
      {
        setTimeout(change_top_nav, 0, creatives_nav);
      }
    });

		swiperSlider.on('slideChange init', function() {
			$(slider).find('.tabs__item').removeClass('active').eq(swiperSlider.realIndex).addClass('active');
		});

		$(slider).find('.tabs__item').click(function() {
			swiperSlider.slideTo($(this).index());
			return false;
		});

    swiperSlider.init();
  });

	$('.creat-slider').each(function() {
    sliderIndex++;

    var slider = '#js-slider-' + sliderIndex;

    $(this).attr('id', slider.replace(/#/g, ''));

    var swiperSlider = new Swiper(slider, {
			speed: 600,
			init: false,
			//allowTouchMove: false,
      navigation: {
        nextEl: slider + ' .swiper-button-next',
        prevEl: slider + ' .swiper-button-prev',
      },
      breakpoints: {
        576: {
          allowTouchMove: false
        }
      }
    });

    // изменение высоты блоков слайдеров

    swiperSlider.on('activeIndexChange', function() {
      if (swiper_container)
      {
        setTimeout(change_height_slide, 0);
      }
    });

		swiperSlider.on('slideChange init', function() {
			$(slider).find('.tabs__item').removeClass('active').eq(swiperSlider.realIndex).addClass('active');
		});

		$(slider).find('.tabs__item').click(function() {
			swiperSlider.slideTo($(this).index());
			return false;
		});

    swiperSlider.init();
  });

  // Sliders END

  // Grids

  var masonryGrids = [];

  function masonryGridsUpdate() {
    for (var i = 0; i < masonryGrids.length; i++) {
      masonryGrids[i].masonry('layout');
    }
  }
  $(window).on('load', function() {
    masonryGridsUpdate();
  });

  var casesGrid = $('.cases__grid').masonry({
    columnWidth: '.cases__sizer',
    itemSelector: '.cases__col',
    percentPosition: true,
    transitionDuration: 0
  });
  masonryGrids.push(casesGrid);

  // Grids END

  $('#tagCanvas').tagcanvas({
    initial: [0.160, -0.160],
    maxSpeed: 0.02,
    textColour: '#ffffff',
    outlineMethod: 'colour',
    outlineColour: '#FFF33D',
    depth: 0.75,
    shape: 'sphere',
    textHeight: 15,
    txtScale: 2,
    textAlign: 'left',
    dragControl: true,
    wheelZoom: false,
    frontSelect: true,
    minBrightness: 0,
    dragControl: true,
    imageMode: 'text'
  })

  window.addEventListener('scroll', function(e) {
    if (document.body.classList.contains('page-bg')) {
      if (window.scrollY > 0) {
        document.body.classList.remove('show-bg');
      } else {
        document.body.classList.add('show-bg');
      }
    }
  });

});


// код для стрелок и скроллбара слайдера

"use strict";

(function()
{
  const slider_colation = (slider) =>
  {  
    const title = slider.querySelector(".title");
    const content = slider.querySelector(".case-slide__grid");
    const scrollbar = slider.querySelector(".swiper-scrollbar");
    const top = title.offsetHeight - 5;
    const margin_left = (slider.offsetWidth - content.offsetWidth) / 2;
    scrollbar.style.marginRight = `${margin_left}px`;
    scrollbar.style.top = `${top}px`;
  }

  window.addEventListener('DOMContentLoaded', () =>
  {
    const slider = document.querySelector(".cases-slider");
    if (slider)
    {
      slider_colation(slider);
  
      window.addEventListener('resize', ()=>
      {
        slider_colation(slider);
      });
    }
  });
})();

(function () {
  window.addEventListener('load', () => {
    const container = document.querySelector(".cases-slider.swiper-container");
    const section = document.querySelector(".cases-slider.swiper-container .swiper-wrapper");
    const title_margin_mobile = 50;
    const title_margin_tablet = 80;

    if (section) {
      section.style.transition = 'height, .3s linear';
      const slide_containers = document.querySelectorAll(".cases-slider.swiper-container .case-slide");
      const slide_containers_title = document.querySelectorAll(".cases-slider.swiper-container .case-slide .title");
      const slide_containers_containers = document.querySelectorAll(".cases-slider.swiper-container .case-slide .container");
      const right_containers = document.querySelectorAll(".cases-slider.swiper-container .case-slide .case-slide__right .case-slide__main");
      const block_absolute = document.querySelectorAll(".case-slide__right__absolute");
      let height_screen = document.documentElement.clientHeight / 2;
      const arrows = document.querySelectorAll(".cases-slider.swiper-container .swiper-nav .ic");
      let max_height = 0;
      const max_arr = [];
      const mql_desktop = window.matchMedia('all and (min-width: 1200px)');
      const mql_mobile = window.matchMedia('all and (max-width: 767px)');
      let interval;
      let interval_mobile;

      const arrow_top = () => {
        for (let i = 0; i < arrows.length; i++) {
          arrows[i].style.top = height_screen - 18 - slide_containers_title[0].offsetHeight - 35 + 'px';
        }
      };

      const arrow_top_none = () => {
        for (let i = 0; i < arrows.length; i++) {
          arrows[i].style.top = 0 + 'px';
        }
      };

      const max_h = arr_h => {
        for (let a = 0; a < arr_h.length; a++) {
          if (arr_h[a] > max_height) {
            max_height = arr_h[a];
          }
        }
      };

      const start_script = () => {
        for (let i = 0; i < slide_containers_title.length; i++) {
          max_arr[i] = slide_containers_title[i].offsetHeight + 35 + slide_containers_containers[i].offsetHeight;
        }
      };

      const add_height = () => {
        for (let i = 0; i < slide_containers.length; i++) {
          if (slide_containers[i].classList.contains('swiper-slide-active')) {
            section.style.height = max_arr[i] + 'px';
          }
        }
      };

      const cancel_height_containers = () => {
        for (let i = 0; i < slide_containers.length; i++) {
          right_containers[i].style.height = 'auto';
          block_absolute[i].style.height = 'auto';
        }
        container.style.height = 'auto';
      };

      const start_script_mobile = () => {
        for (let i = 0; i < right_containers.length; i++) {
          right_containers[i].style.transition = 'height, .6s linear';
          block_absolute[i].style.transition = 'height, .6s linear';
          max_arr[i] = right_containers[i].offsetHeight;
        }

        max_h(max_arr);
      };

      const add_all_height = all_height => {
        for (let i = 0; i < slide_containers.length; i++) {
          right_containers[i].style.height = all_height + 'px';
          block_absolute[i].style.height = all_height - 55 + 'px';
        }
      };

      const add_height_mobile = () => {
        let height_size = 0;
        if (mql_mobile.matches) {
          height_size = title_margin_mobile;
        } else {
          height_size = title_margin_tablet;
        }
        for (let i = 0; i < slide_containers.length; i++) {
          if (slide_containers[i].classList.contains('swiper-slide-active')) {
            block_absolute[i].style.height = max_arr[i] - 55 + 'px';
            add_all_height(max_arr[i]);
            //right_containers[i].style.height = max_arr[i] + 'px';
            container.style.height = slide_containers_title[i].offsetHeight + slide_containers_containers[i].offsetHeight + height_size + 'px';
          }
        }
      };

      if (mql_desktop.matches) {
        arrow_top();
        start_script();
        add_height();
        interval = setInterval(add_height, 300);
      } else {
        start_script_mobile();
        add_height_mobile();
        interval_mobile = setInterval(add_height_mobile, 300);
      }

      window.addEventListener('resize', () => {
        if (mql_desktop.matches) {
          height_screen = document.documentElement.clientHeight / 2;
          arrow_top();

          if (interval) {
            clearInterval(interval);
          }

          if (interval_mobile) {
            clearInterval(interval_mobile);
          }

          cancel_height_containers();
          interval = setInterval(add_height, 300);
          section.style.height = 'auto';
          cancel_height_containers();
          start_script();
          add_height();
        } else if (mql_mobile.matches) {
          arrow_top_none();

          if (interval) {
            clearInterval(interval);
          }

          if (interval_mobile) {
            clearInterval(interval_mobile);
          }

          // section.style.height = 'auto';
          cancel_height_containers();
          start_script_mobile();
          add_height_mobile();
          interval_mobile = setInterval(add_height_mobile, 300);
        } else {
          for (let i = 0; i < arrows.length; i++) {
            arrows[i].style.top = 200 + 'px';
          }

          if (interval) {
            clearInterval(interval);
          }

          if (interval_mobile) {
            clearInterval(interval_mobile);
          }

          cancel_height_containers();
          interval_mobile = setInterval(add_height_mobile, 300);
          section.style.height = 'auto';
          cancel_height_containers();
          start_script_mobile();
          add_height_mobile();
          // section.style.height = 'auto';
        }
      });
    }
  });
})();

// код для смещения изображений на странице "Креативы"

/*(function () {
  window.addEventListener('load', () => {
    const blocks_images = document.querySelectorAll(".creat-slider .creat-slide__devices");

    for (let i = 0; i < blocks_images.length; i++) {
      const images = blocks_images[i].querySelectorAll(".creat-slide__device");

      if (images.length === 1) {
        images[0].style.marginLeft = "15px";
      }
    }
  });
})();*/