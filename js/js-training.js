$(document).ready(function () {

  $('.project__title').click(
    function() {
      $(this).css("color", "rgb(" + randomColor() + ", " + randomColor() + ", " + randomColor() + ")");
  });

  function randomColor() {
    return Math.floor(Math.random() * 255);
  };


  $('.project__conclusions .project__frame-list').click(
    function() {
      $('.project__frame-item:first-child').toggleClass('project__frame-item--order2');
      $('.project__frame-item:last-child').toggleClass('project__frame-item--order1');
  })

  $('.project__wrap-item img').mouseenter(function() {
    $(this).animate({ deg: 360 }, {duration: 1200, step: function(now) {
          $(this).css({ transform: 'rotate(' + now + 'deg)' });
        }
      }
    );
    $(this).animate({left:'100vw'},1200);
  });

  $('.project__wrap-item img').mouseleave(
    function() {
      $(this).animate({ deg: 0 }, {duration: 10, step: function(now) {
            $(this).css({ transform: 'rotate(' + now + 'deg)' });
          }
        }
      );
      $(this).animate({left:'0'},10);
  });

  $('.js-feedback-form').submit(function() {
    $(this).attr('action', 'http://metrarobotics.ru/endpoints/mail2.php')
  });


  $('.image-galery').fancybox();








const slider = tns({
    container: document.querySelector(".glr-slider"),
    nav: false,
    autoplay: true,
    autoplayButton: false,
    items: 1,
    gutter: 20,
    controls: false,
    responsive: {
      "740": {
        fixedWidth: 468
      },
      "1300": {
        items: 2,
        fixedWidth: 468
      }
    }
});

document.querySelector(".next").onclick = (() => {
    slider.goTo("next");
})

document.querySelector(".prev").onclick = (() => {
    slider.goTo("prev");
});

// const slideCount = (() => {
//
//     const info = slider.getInfo();
//     const slideCount = `slideCount: ${info.slideCount}`;
//     const items = `items: ${info.items}`;
//
//     console.log(slideCount, items);
//
// });
//
// window.onresize = function(e) {
//     slideCount();
// };
//
// slideCount();


});
