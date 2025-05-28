$(document).ready(function() {
  // lazy-load
  const el = document.querySelectorAll('.lazy');
  window.observer = lozad(el);
  window.observer.observe();
  const $body = $('body');

  setTimeout(() => {
    $('.js-global-bg').addClass('hide')

    setTimeout(() => {
      $('.js-global-bg').remove()
    }, 200)
  }, 300)

  if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
    $body.addClass('touch-device');
    $('.js-magik-scroll').each(function() {
      $(this).on('scroll', function() {
        const scrollTop = $(this).scrollTop();
        const scrollHeight = this.scrollHeight;
        const clientHeight = $(this).innerHeight();

        if (scrollTop + clientHeight >= scrollHeight) {
          $(this).addClass('at-end');
        } else {
          $(this).removeClass('at-end');
        }
      });
    });

  } else {
    $('.js-magik-scroll').each(function() {
      new PerfectScrollbar(this, {
        wheelSpeed: 0.5,
        wheelPropagation: true,
        minScrollbarLength: 20
      });

      $(this).on('ps-scroll-y', function() {
        const isAtEnd = this.scrollTop + this.clientHeight >= this.scrollHeight;
        if (isAtEnd) {
          $(this).addClass('at-end');
        } else {
          $(this).removeClass('at-end');
        }
      });
    });
  }

  function toggleSlickMob() {
    $('.js-mob-slider').each(function() {
      let sliderProd = $(this);

      if ($(window).width() <= 560) {
        if (!sliderProd.hasClass('slick-initialized')) {
          sliderProd.slick({
            infinite: false,
            fade: true,
            speed: 500,
            dots: true,
            arrows: false,
            // adaptiveHeight: true
          });

          let prevBtn = sliderProd.closest('.js-slider-mob-parent').find('.js-slider-prev');
          let nextBtn = sliderProd.closest('.js-slider-mob-parent').find('.js-slider-next');

          sliderProd.on('init afterChange', function() {
            updateButtonState(sliderProd, prevBtn, nextBtn);
          });

          prevBtn.click(function() {
            sliderProd.slick('slickPrev');
          });

          nextBtn.click(function() {
            sliderProd.slick('slickNext');
          });

          sliderProd.slick('setPosition');
          updateButtonState(sliderProd, prevBtn, nextBtn);

        }
      } else {
        if (sliderProd.hasClass('slick-initialized')) {
          sliderProd.slick('unslick');
        }
      }
    });
  }

  toggleSlickMob();

  $(window).resize(function() {
    toggleSlickMob();
  });

  function updateButtonState(slider, prevBtn, nextBtn) {
    let currentSlide = slider.slick('slickCurrentSlide');
    let slickInstance = slider.slick('getSlick');
    let slideCount = slickInstance.slideCount - 1;
    let slidesToShow = slickInstance.options.slidesToShow;

    prevBtn.toggleClass('disabled', currentSlide === 0);
    nextBtn.toggleClass('disabled', currentSlide === slideCount);

    let shouldHideButtons = slideCount + 1 <= slidesToShow;
    prevBtn.toggleClass('hide', shouldHideButtons);
    nextBtn.toggleClass('hide', shouldHideButtons);
  }

  // Инициализация js-single-slider
  $('.js-single-slider').each(function() {
    let slider = $(this);
    let prevBtn = slider.closest('.js-slider-single-parent').find('.js-slider-prev');
    let nextBtn = slider.closest('.js-slider-single-parent').find('.js-slider-next');

    slider.slick({
      infinite: false,
      fade: true,
      speed: 500,
      dots: true,
      arrows: false
    });

    slider.on('init afterChange', function() {
      updateButtonState(slider, prevBtn, nextBtn);
    });

    prevBtn.click(function() {
      slider.slick('slickPrev');
    });

    nextBtn.click(function() {
      slider.slick('slickNext');
    });

    slider.slick('setPosition');
    updateButtonState(slider, prevBtn, nextBtn);
  });

  // Инициализация js-double-slider
  $('.js-double-slider').each(function() {
    let slider = $(this);
    let prevBtn = slider.closest('.js-slider-double-parent').find('.js-slider-prev');
    let nextBtn = slider.closest('.js-slider-double-parent').find('.js-slider-next');

    slider.slick({
      infinite: false,
      speed: 500,
      dots: true,
      arrows: false,
      slidesToShow: 2,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true
          }
        }
      ]
    });

    slider.on('init afterChange', function() {
      updateButtonState(slider, prevBtn, nextBtn);
    });

    prevBtn.click(function() {
      slider.slick('slickPrev');
    });

    nextBtn.click(function() {
      slider.slick('slickNext');
    });

    slider.slick('setPosition');
    updateButtonState(slider, prevBtn, nextBtn);
  });

  // Инициализация js-list-slider
  $('.js-list-slider').each(function() {
    let slider = $(this);
    let prevBtn = slider.closest('.js-slider-list-parent').find('.js-slider-prev');
    let nextBtn = slider.closest('.js-slider-list-parent').find('.js-slider-next');

    slider.slick({
      infinite: false,
      speed: 500,
      dots: true,
      arrows: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1279,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 940,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 639,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    });

    slider.on('init afterChange', function() {
      updateButtonState(slider, prevBtn, nextBtn);
    });

    prevBtn.click(function() {
      slider.slick('slickPrev');
    });

    nextBtn.click(function() {
      slider.slick('slickNext');
    });

    slider.slick('setPosition');
    updateButtonState(slider, prevBtn, nextBtn);
  });

  // Инициализация js-list-slider-sec
  $('.js-list-sec-slider').each(function() {
    let slider = $(this);
    let prevBtn = slider.closest('.js-slider-list-parent').find('.js-slider-prev');
    let nextBtn = slider.closest('.js-slider-list-parent').find('.js-slider-next');

    slider.slick({
      infinite: false,
      speed: 500,
      dots: true,
      arrows: false,
      slidesToShow: 5,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1279,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 940,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 639,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    });

    slider.on('init afterChange', function() {
      updateButtonState(slider, prevBtn, nextBtn);
    });

    prevBtn.click(function() {
      slider.slick('slickPrev');
    });

    nextBtn.click(function() {
      slider.slick('slickNext');
    });

    slider.slick('setPosition');
    updateButtonState(slider, prevBtn, nextBtn);
  });

  $('.inet-card__bottom').on('touchstart touchmove', '.js-prevent-scroll', function (e) {
    e.stopPropagation();
  });

  $(document).on('click', '.js-all-photo', function () {
    let $el = $(this);
    let $next = $el.next();
    $el.addClass('hide');
    $next.addClass('show');
  });


  // Инициализация слайдер в карточке
  $('.js-incart-slider').each(function() {
    let sliderInCart = $(this);

    if ($(window).width() >= 560) {
      sliderInCart.slick({
        infinite: false,
        speed: 500,
        dots: true,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1279,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 940,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 639,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
        ]
      });

      let prevBtn = sliderInCart.closest('.js-slider-incart-parent').find('.js-slider-prev');
      let nextBtn = sliderInCart.closest('.js-slider-incart-parent').find('.js-slider-next');

      sliderInCart.on('init afterChange', function() {
        updateButtonState(sliderInCart, prevBtn, nextBtn);
      });

      prevBtn.click(function() {
        sliderInCart.slick('slickPrev');
      });

      nextBtn.click(function() {
        sliderInCart.slick('slickNext');
      });

      sliderInCart.slick('setPosition');
      updateButtonState(sliderInCart, prevBtn, nextBtn);
    } else {
      if (sliderInCart.hasClass('slick-initialized')) {
        sliderInCart.slick('unslick');
      }
    }
  });

  // Показать текст

  $('.js-show-text').each(function() {
    let $this = $(this);
    let $textBlock = $this.find('[data-quant]');
    let $btn = $this.find('[data-text-btn]');
    let maxLength = parseInt($textBlock.data('quant'), 10);

    let fullText = $textBlock.text();

    if (fullText.length <= maxLength) {
      $btn.hide();
    } else {
      let truncatedText = fullText.slice(0, maxLength) + '...';
      $textBlock.text(truncatedText);

      $btn.on('click', function(e) {
        e.preventDefault();
        $textBlock.text(fullText);
        $this.addClass('show');
        $btn.hide();
      });
    }
  });


  $(document).on('click', '.js-tabs-button', function() {
    let tabId = $(this).data('id');

    $('.js-tabs-button').removeClass('active');
    $(this).addClass('active');

    $('.js-tabs-block').removeClass('active');
    $('.js-tabs-block[data-id="' + tabId + '"]').addClass('active');
  });

  $(document).on('click', '.js-open-menu', function() {
    $('.js-mobile-menu').addClass('open');
    $body.addClass('ohidden');
  });

  $(document).on('click', '.js-close-menu', function() {
    $('.js-mobile-menu').removeClass('open')
    $body.removeClass('ohidden');
  });

  $(document).on('input', '.js-phone-number', function() {
    $(this).val($(this).val().replace(/[^0-9]/g, ''));
  });

  $('.js-upload-file input[type="file"]').on('change', function(event) {
    const $uploadWrapper = $(this).closest('.js-upload-file');
    const $uploadBody = $uploadWrapper.find('.js-upload-body');
    const $errorBlock = $uploadWrapper.find('.js-file-error');
    const maxSizeMB = parseFloat($uploadWrapper.data('max-size')); // Значение в мегабайтах
    const maxSize = maxSizeMB * 1024 * 1024; // Перевод в байты
    const isMultiple = $(this).prop('multiple');
    const files = event.target.files;

    $errorBlock.text('').hide();

    $uploadBody.find('.js-upload-empty').hide();

    if (!isMultiple) {
      $uploadBody.find('.upload-rev__file').remove();
    }

    $.each(files, function(index, file) {
      if (file.size > maxSize) {
        $errorBlock
        .text(`Файл "${file.name}" превышает допустимый размер ${maxSizeMB} МБ.`)
        .show();
        return;
      }

      const fileName = file.name;

      const $fileItem = $(`
          <div class="upload-rev__file">
              <span class="upload-rev__name js-upload-file-name">${fileName}</span>
              <button type="button" class="upload-rev__del">X</button>
          </div>
      `);

      $uploadBody.append($fileItem);

      $fileItem.find('.upload-rev__del').on('click', function() {
        $fileItem.remove();
        if ($uploadBody.find('.upload-rev__file').length === 0) {
          $uploadBody.find('.js-upload-empty').show();
        }
      });
    });

    $(this).val('');
  });


  function showDropdown(dataId) {
    const $callDropdown = $(`.js-hover-dropdown[data-id="${dataId}"]`);
    const $callTriggers = $(`.js-trigger-drop[data-id="${dataId}"]`);
    const windowWidth = $(window).width();
    const $header = $('.js-header');

    if (!$callDropdown.hasClass('show')) {
      closeAllDropdowns();
    }

    $callDropdown.addClass('show');
    $callTriggers.addClass('opened');

    if ($callDropdown.is('[data-hide-header]')) {
      $header.addClass('hide');
    }

    if (windowWidth < 991) {
      $body.css('overflow', 'hidden');
    }

    const $callClose = $callDropdown.find('.js-drop-close');
    if ($callClose.length) {
      $callClose.off('click').on('click', function () {
        hideDropdown(dataId);
      });
    }
  }

  function hideDropdown(dataId) {
    const $callDropdown = $(`.js-hover-dropdown[data-id="${dataId}"]`);
    const $callTriggers = $(`.js-trigger-drop[data-id="${dataId}"]`);
    const $header = $('.js-header');

    $callDropdown.removeClass('show');
    $callTriggers.removeClass('opened');

    if ($callDropdown.is('[data-hide-header]')) {
      $header.removeClass('hide');
    }

    $body.css('overflow', 'initial');
  }

  function toggleDropdown(dataId) {
    const $callDropdown = $(`.js-hover-dropdown[data-id="${dataId}"]`);
    const isDropdownOpen = $callDropdown.hasClass('show');

    if (isDropdownOpen) {
      hideDropdown(dataId);
    } else {
      showDropdown(dataId);
    }
  }

  function closeAllDropdowns() {
    const $header = $('.js-header');

    $('.js-hover-dropdown').each(function () {
      const $dropdown = $(this);

      if ($dropdown.is('[data-hide-header]')) {
        $header.removeClass('hide');
      }
    });

    $('.js-hover-dropdown').removeClass('show');
    $('.js-trigger-drop').removeClass('opened');
    $body.css('overflow', 'initial');
  }

  $body.on('click', '.js-trigger-drop', function (e) {
    e.preventDefault();

    const $trigger = $(this);
    const dataId = $trigger.data('id');
    toggleDropdown(dataId);
  });

  $('.js-select').each((i, el) => {
    $(el).select2({
      allowClear: true,
      placeholder: $(this).data('placeholder'),
      minimumResultsForSearch: $(el).data('search-min-length') === undefined ? '10' : $(el).data('search-min-length'),
      dropdownPosition: 'below',
      dropdownParent: $(el).parent(),
      maximumSelectionLength: $(el).data('max-length'),
      language: {
        noResults: () => {
          return 'noResults';
        },
        maximumSelected: () => {
          return + $(el).data('max-length') + ' ' +
            'maximumSelected 5 ';
        },
        searching: function (params) {
          query = params;
          return 'Searching…';
        }
      },
      templateResult: function (item) {
        if (item.loading) {
          return item.text;
        }
        var term = query.term || '';
        var $result = markMatch(item.text, term);
        return $result;
      },
      // ajax: {
      //   url: '/select2.json',
      //   dataType: 'json'
      // }
    });

    function markMatch(text, term) {
      var match = text.toUpperCase().indexOf(term.toUpperCase());
      var $result = $('<span></span>');
      if (match < 0) {
        return $result.text(text);
      }
      $result.text(text.substring(0, match));
      var $match = $('<span class="select2-rendered__match"></span>');
      $match.text(text.substring(match, match + term.length));
      $result.append($match);
      $result.append(text.substring(match + term.length));
      return $result;
    }

    // clone and append choises

    $(el).on('select2:select', function (e) {

    })

    $(el).on('select2:unselect', function (e) {

    })

    $(el).on('select2:open', function (e) {

    })

    $(el).on('select2:closing', function () {

    })
  })

  $('.js-acc-wrap').each(function () {
    const $wrap = $(this);
    const isSingle = $wrap.data('single') !== undefined;

    $wrap.find('.js-acc-open').on('click', function () {
      const $item = $(this).closest('.js-acc-item');
      const $list = $item.find('.js-acc-list');

      if ($item.hasClass('active')) {
        $item.removeClass('active');
        $list.stop().slideUp(200);
      } else {
        if (isSingle) {
          $wrap.find('.js-acc-item.active').removeClass('active')
          .find('.js-acc-list').stop().slideUp(200);
        }
        $item.addClass('active');
        $list.stop().slideDown(200);
      }
    });

    $wrap.find('.js-acc-item.active .js-acc-list').each(function () {
      $(this).show();
    });
  });

  $('.js-count-prod').on('click', '.js-count-plus, .js-count-minus', function () {
    const container = $(this).closest('.js-count-prod');
    const input = container.find('input');
    const minus = container.find('.js-count-minus');
    let num = parseInt(input.val()) || 0;

    if (container.data('price') !== undefined) {
      const price = parseFloat(container.data('price'));
      const id = container.data('id');
      const target = $(`.js-table-price[data-id="${id}"]`);

      if ($(this).hasClass('js-count-plus')) {
        num++;
        input.val(num);
        if (num > 0) {
          minus.removeClass('disable');
        }
      } else if ($(this).hasClass('js-count-minus')) {
        if (num > 1) {
          num--;
          input.val(num);
        }
        if (num === 1) {
          minus.addClass('disable');
        }
      }

      const totalPrice = Math.round(price * num);
      let text = target.text();
      text = text.replace(/\s+/g, '');
      const updatedText = text.replace(/\d+/, totalPrice);
      target.text(updatedText);

    }
  });

  $(document).on('change', '.js-table-check[data-id="all"]', function () {
    const isChecked = $(this).is(':checked');
    const parent = $(this).closest('.js-checked-parent');
    const checkboxes = parent.find('.js-table-check').not('[data-id="all"]');
    checkboxes.prop('checked', isChecked);
  });


  $(document).on('click', '.js-list-style', function () {
    const type = $(this).data('type');
    const listView = $('.js-list-view');
    const tableView = $('.js-table-view');

    $('.js-list-style').removeClass('active');
    $(this).addClass('active');

    switch (type) {
    case 'tile-list':
      listView.removeClass('list-view hide');
      tableView.hide();
      break;

    case 'short-list':
      listView.addClass('list-view').removeClass('hide');
      tableView.hide();
      break;

    case 'long-list':
      listView.addClass('hide');
      tableView.show();
      break;
    }
  });

  $(document).on('click', '.js-button-tab', function () {
    let $this = $(this);
    let $tabWrap = $this.closest('.js-tab-wrap');
    let tabId = $this.data('id');

    $tabWrap.find('.js-button-tab').removeClass('active');
    $tabWrap.find('.js-block-tab').removeClass('active');

    $this.addClass('active');
    $tabWrap.find(`.js-block-tab[data-id="${tabId}"]`).addClass('active');
  });


  const $map = $('#map');

  if($map.length) {
    const coords = $map.data('coords').split(',').map(Number);
    ymaps.ready(function () {
      const map = new ymaps.Map($map[0], {
        center: coords,
        zoom: 12,
        controls: []
      });

      const adjustMapPosition = () => {
        const screenWidth = $(window).width();
        const mapContainer = $map[0];
        const mapWidth = mapContainer.offsetWidth;
        const globalPixelCenter = map.getGlobalPixelCenter();

        let offsetX = mapWidth / 4;
        let offsetY = 0;

        if (screenWidth < 992) {
          offsetY = -60;
        }

        if($map.hasClass('map-block__map--sec')) {
          map.setGlobalPixelCenter([globalPixelCenter[0] - offsetX, globalPixelCenter[1] - offsetY]);
        } else {
          map.setGlobalPixelCenter([globalPixelCenter[0] + offsetX, globalPixelCenter[1] - offsetY]);
        }

      };

      adjustMapPosition();

      $(window).resize(adjustMapPosition);

      $(document).one('click', '.js-button-tab', function () {
        let $this = $(this);

        if($this.hasClass('js-map-tab')) {
          setTimeout(() => {
            map.container.fitToViewport();
            adjustMapPosition();
          }, 300);
        }
      });

      const placemark = new ymaps.Placemark(coords, {
        hintContent: 'Краснодар',
        balloonContent: 'Добро пожаловать в Краснодар!'
      }, {
        iconLayout: 'default#image',
        iconImageHref: $map.hasClass('map-block__map--sec') ? 'content/images/icons/marker2.png' : 'content/images/icons/marker.png',
        iconImageSize: [29, 44],
        iconImageOffset: [-15, -44]
      });

      map.geoObjects.add(placemark);
    });
  }

  $(document).on('click', '.js-add-inp', function () {
    let button = $(this);
    let prevElement = button.prev();

    if (prevElement.length) {
      let clonedElement = prevElement.clone();

      clonedElement.find('input').each(function () {
        let input = $(this);
        let nameAttr = input.attr('name');
        let idAttr = input.attr('id');
        let numberPattern = /\d+$/;

        if (nameAttr) {
          input.attr('name', nameAttr.replace(numberPattern, match => parseInt(match, 10) + 1));
        }

        if (idAttr) {
          input.attr('id', idAttr.replace(numberPattern, match => parseInt(match, 10) + 1));
        }

        input.val('');
      });

      clonedElement.insertBefore(button);
    }
  });


  $('.js-single-file input[type="file"]').on('change', function(event) {
    const $fileWrapper = $(this).closest('.js-single-file');
    const $fieldName = $fileWrapper.find('.js-single-file-name');
    const $deleteButton = $fileWrapper.find('.js-single-file-del');
    const $errorBlock = $fileWrapper.find('.doc-item__error');
    const maxSizeMB = parseFloat($fileWrapper.data('max-size'));
    const maxSize = maxSizeMB * 1024 * 1024;
    const file = event.target.files[0];

    $errorBlock.text('').hide();

    if (!file) return;

    if (file.size > maxSize) {
      $errorBlock
      .text(`Файл "${file.name}" превышает допустимый размер ${maxSizeMB} МБ.`)
      .show();
      $(this).val('');
      return;
    }

    $fieldName.text(file.name).show();
    $deleteButton.addClass('show');

    $deleteButton.on('click', function() {
      $fieldName.text('');
      $(this).removeClass('show');
      $fileWrapper.find('input[type="file"]').val('');
    });
  });

  $('body').on('click', '.js-close-magnific', () => {
    $.magnificPopup.close()
  })

  $('body').on('click', '.js-open-modal', (event) => {
    let $this = event.currentTarget;
    let $modalId = $($this).data('modal');

    $.magnificPopup.open({
      mainClass: 'mfp-with-zoom',
      items: {
        src: $modalId,
        type: 'inline'
      },
      callbacks: {
        open() {
          $('body').addClass('ohidden')
        } ,
        close() {
          $('body').removeClass('ohidden')
        }
      }
    });
  })

  function startTimer($timerElement) {
    let totalSeconds = parseInt($timerElement.data('timer'), 10);

    function updateTimer() {
      if (totalSeconds <= 0) {
        $timerElement.text('Время вышло');
        clearInterval(timerInterval);
        return;
      }

      totalSeconds--;

      let minutes = Math.floor(totalSeconds / 60);
      let seconds = totalSeconds % 60;

      $timerElement.text(
        `${minutes.toString().padStart(2, '0')} мин ${seconds
        .toString()
        .padStart(2, '0')} сек`
      );
    }

    const timerInterval = setInterval(updateTimer, 1000);
    updateTimer();
  }

  $('.js-timer').each(function () {
    startTimer($(this));
  });
});


$(document).on('click', '.js-open-popup', function () {
  $('#popup-articul').show();
  $('#page-overlay').show();
});

$(document).on('click', '.js-close-popup, #page-overlay', function () {
  $('#popup-articul').hide();
  $('#page-overlay').hide();
});

$(document).on('keydown', function (e) {
  if (e.key === 'Escape') {
    $('#popup-articul').hide();
    $('#page-overlay').hide();
  }
});


$(document).on('click', '.js-close-popup', function () {
  var $popup = $(this).closest('.address-popup');
  if ($popup.length) {
    $popup.hide();
  }
});


