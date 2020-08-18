/*
__________████████_____██████
_________█░░░░░░░░██_██░░░░░░█
________█░░░░░░░░░░░█░░░░░░░░░█
_______█░░░░░░░███░░░█░░░░░░░░░█
_______█░░░░███░░░███░█░░░████░█
______█░░░██░░░░░░░░███░██░░░░██
_____█░░░░░░░░░░░░░░░░░█░░░░░░░░███
____█░░░░░░░░░░░░░██████░░░░░████░░█
____█░░░░░░░░░█████░░░████░░██░░██░░█
___██░░░░░░░███░░░░░░░░░░█░░░░░░░░███
__█░░░░░░░░░░░░░░█████████░░█████████
_█░░░░░░░░░░█████_████___████_█████___█
_█░░░░░░░░░░█______█_███__█_____███_█___█
█░░░░░░░░░░░░█___████_████____██_██████
░░░░░░░░░░░░░█████████░░░████████░░░█
░░░░░░░░░░░░░░░░█░░░░░█░░░░░░░░░░░░█
░░░░░░░░░░░░░░░░░░░░██░░░░█░░░░░░██
░░░░░░░░░░░░░░░░░░██░░░░░░░███████
░░░░░░░░░░░░░░░░██░░░░░░░░░░█░░░░░█
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░█
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░█
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░█
░░░░░░░░░░░█████████░░░░░░░░░░░░░░██
░░░░░░░░░░█▒▒▒▒▒▒▒▒███████████████▒▒█
░░░░░░░░░█▒▒███████▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█
░░░░░░░░░█▒▒▒▒▒▒▒▒▒█████████████████
░░░░░░░░░░████████▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█
░░░░░░░░░░░░░░░░░░██████████████████
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░█
██░░░░░░░░░░░░░░░░░░░░░░░░░░░██
▓██░░░░░░░░░░░░░░░░░░░░░░░░██
▓▓▓███░░░░░░░░░░░░░░░░░░░░█
▓▓▓▓▓▓███░░░░░░░░░░░░░░░██
▓▓▓▓▓▓▓▓▓███████████████▓▓█
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓██
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█
This Holy shit was planted on me and they said, "now live with it." I had nothing to do with writing that code.
*/

$(document).ready(function () {


  /*$(".header__menu a , .logo , .footer__logo, .banner__more, .banner__start").on("click", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 800);
  });*/


  //fixed menu
  var menu = $('.header');
  var menuPosition;

  $(window).on('scroll', function () {
    var menuCoords = menu.offset();
    var windowScroll = $(this).scrollTop();

    if (!menuPosition) {
      menuPosition = menuCoords.top;
    }

    /*if (windowScroll > 0) {
      $('.header').addClass('scrolled');
    } else {
      menuPosition = false;
      $('.header').removeClass('scrolled');
    }*/
  });



  if ($('div').is('.banner__slider')) {
    var bannerSlider = tns({
      container: '.banner__slider',
      items: 1,
      loop: true,
      controls: false,
      nav: true,
      mouseDrag: false,
      speed: 900,
      autoplay: true,
      autoplayTimeout: 7000
    });
  }

  if ($('div').is('.gallery__slider')) {
    var gallerySlider = tns({
      container: '.gallery__slider',
      items: 1,
      loop: false,
      controls: true,
      controlsText: ["", ""],
      nav: false,
      mouseDrag: false,
      speed: 500,
      fixedWidth: false,
      responsive: {
        "740": {
          fixedWidth: 650
        },
        "1300": {
          items: 2,
          fixedWidth: 780
        }
      }
    });
  }

  if ($('div').is('.projects__slider')) {
    var projectsSlider = tns({
      container: '.projects__slider',
      items: 1,
      loop: false,
      controls: true,
      controlsText: ["", ""],
      nav: false,
      mouseDrag: false,
      speed: 500
    });
  }

  if ($('div').is('.partners__slider')) {
    var partnersSlider = tns({
      container: '.partners__slider',
      items: 1,
      loop: true,
      controls: true,
      controlsText: ["", ""],
      nav: false,
      mouseDrag: true,
      speed: 500,
      autoplay: true,
      autoplayTimeout: 5000,
      responsive: {
        "600": {
          items: 2
        },
        "1300": {
          items: 3
        }
      }
    });
  }


  //modal
  $('.app__button').click(function () {
    $.fancybox.open({
      type: "inline",
      src: "#popup-feedback"
    })
  })
  $('.footer__button').click(function () {
    $.fancybox.open({
      type: "inline",
      src: "#popup-callback"
    });
  });

  $('.industry__button').click(function () {
    var industryNum = $(this).attr('data-industry')
    $.fancybox.open({
      type: "inline",
      src: "#popup-industry-" + industryNum
    })
  })

  $(".js-button-feedback").on("click", () => {
    $.fancybox.open({
      type: "inline",
      src: "#popup-feedback"
    })
  });
  $('.js-button-video').click(function () {
    var industryVideo = $(this).attr('data-video')
    $.fancybox.open({
      type: "inline",
      src: ".modal__container[data-video='" + industryVideo + "']"
    });
  })

  $(".js-button-solutions").on("click", () => {
    $.fancybox.open({
      type: "inline",
      src: "#popup-feedback"
    });
  });
  $(".js-get-catalog-form").on("submit", () => {
    Metrika.fire('GetCatalogSubmit');
  });
  $('.gallery__item').click(function () {
    var industryVideo = $(this).attr('data-video');
    $.fancybox.open({
      type: "inline",
      src: ".modal__container[data-video='" + industryVideo + "']"
    });
  })
  $(".services__link").on("click", () => {
    Metrika.fire("ServiceClick");
  });

  //mobile menu
  $('.btn-menu').click(function () {
    $('.header__menu').toggleClass('active')
    $('.btn-menu').toggleClass('active')
    $('body').toggleClass('no-scroll')
  })



  //ajax forms
  /*

  */
  //modal validation
  $(".phone-input").mask('+' + "7 (999) 999-99-99");


  if ($(window).width() <= 600) {
    $('.banner__button').text('Каталог продукции')
  }
  $(".banner__button").on("click", () => {
    $.fancybox.open({
      type: "inline",
      src: "#popup-get-catalog"
    });
  })


  //news navigation
  $('.news__page a').not('.news__nav-arrow a').click(function () {
    $('.news__page a').removeClass('active')
    $(this).addClass('active')
  })



  //google map
  if ($('div').is('.map')) {
    function initMap() {
      var iZoom = 17
      var uluru = {
        lat: 55.098709,
        lng: 36.617134
      };
      if ($(window).width() <= 600) {
        uluru = {
          lat: 55.098790,
          lng: 36.618880
        };
      }
      var mapOptions = {
        zoom: iZoom,
        center: uluru,
        disableDefaultUI: true,
        styles: [{
            "elementType": "geometry",
            "stylers": [{
              "color": "#5c7dff"
            }]
          },
          {
            "elementType": "labels.text.fill",
            "stylers": [{
              "color": "#ffffff"
            }]
          },
          {
            "elementType": "labels.text.stroke",
            "stylers": [{
              "color": "#4568e6"
            }]
          },
          {
            "featureType": "administrative.country",
            "elementType": "geometry.stroke",
            "stylers": [{
              "color": "#ffffff"
            }]
          },
          {
            "featureType": "administrative.land_parcel",
            "elementType": "labels.text.fill",
            "stylers": [{
              "color": "#ffffff"
            }]
          },
          {
            "featureType": "administrative.province",
            "elementType": "geometry.stroke",
            "stylers": [{
              "color": "#ffffff"
            }]
          },
          {
            "featureType": "landscape.man_made",
            "elementType": "geometry.stroke",
            "stylers": [{
              "color": "#4c4ce4"
            }]
          },
          {
            "featureType": "landscape.natural",
            "elementType": "geometry",
            "stylers": [{
              "color": "#4568e6"
            }]
          },
          {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{
              "color": "#4c4ce4"
            }]
          },
          {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [{
              "color": "#ffffff"
            }]
          },
          {
            "featureType": "poi",
            "elementType": "labels.text.stroke",
            "stylers": [{
              "color": "#5c7dff"
            }]
          },
          {
            "featureType": "poi.park",
            "elementType": "geometry.fill",
            "stylers": [{
              "color": "#4568e6"
            }]
          },
          {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [{
              "color": "#ffffff"
            }]
          },
          {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [{
              "color": "#4c4ce4"
            }]
          },
          {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [{
              "color": "#ffffff"
            }]
          },
          {
            "featureType": "road",
            "elementType": "labels.text.stroke",
            "stylers": [{
              "color": "#5c7dff"
            }]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [{
              "color": "#2c6675"
            }]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{
              "color": "#ffffff"
            }]
          },
          {
            "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [{
              "color": "#ffffff"
            }]
          },
          {
            "featureType": "road.highway",
            "elementType": "labels.text.stroke",
            "stylers": [{
              "color": "#4568e6"
            }]
          },
          {
            "featureType": "transit",
            "elementType": "labels.text.fill",
            "stylers": [{
              "color": "#ffffff"
            }]
          },
          {
            "featureType": "transit",
            "elementType": "labels.text.stroke",
            "stylers": [{
              "color": "#5c7dff"
            }]
          },
          {
            "featureType": "transit.line",
            "elementType": "geometry.fill",
            "stylers": [{
              "color": "#4c4ce4"
            }]
          },
          {
            "featureType": "transit.station",
            "elementType": "geometry",
            "stylers": [{
              "color": "#3a4762"
            }]
          },
          {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
              "color": "#4568e6"
            }]
          },
          {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [{
              "color": "#4568e6"
            }]
          }
        ]
      }
      var map = new google.maps.Map(document.getElementById('map'), mapOptions)
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng({
          "lat": 55.099016,
          "lng": 36.619513
        }),
        map: map
      });
    }
    initMap();
  }




  function download_file(fileURL, fileName) {
    // for non-IE
    if (!window.ActiveXObject) {
      var save = document.createElement('a');
      save.href = fileURL;
      save.target = '_blank';
      var filename = fileURL.substring(fileURL.lastIndexOf('/')+1);
      save.download = fileName || filename;
      if ( navigator.userAgent.toLowerCase().match(/(ipad|iphone|safari)/) && navigator.userAgent.search("Chrome") < 0) {
        document.location = save.href;
// window event not working here
      }else{
        var evt = new MouseEvent('click', {
          'view': window,
          'bubbles': true,
          'cancelable': false
        });
        save.dispatchEvent(evt);
        (window.URL || window.webkitURL).revokeObjectURL(save.href);
      }
    }

    // for IE < 11
    else if ( !! window.ActiveXObject && document.execCommand)     {
      var _window = window.open(fileURL, '_blank');
      _window.document.close();
      _window.document.execCommand('SaveAs', true, fileName || fileURL)
      _window.close();
    }
  }

  (function ($) {
    $(".modal-catalog-form").submit(function (event) {
      download_file('http://metrarobotics.ru/wp-content/themes/robotics/pdf/rtkForPP.pdf', 'rtkForPP.pdf');
    });
  }(jQuery));



})