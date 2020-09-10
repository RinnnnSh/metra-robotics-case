$(document).ready(function () {

  $('.project__title').click(
    function() {
      $('.project__title').css("color", "rgb(" + randomColor() + ", " + randomColor() + ", " + randomColor() + ")");
  });

  function randomColor() {
    return Math.floor(Math.random() * 255);
  };


  $('.project__conclusions .project__frame-list').click(
    function() {
      $('.project__frame-item:first-child').toggleClass('project__frame-item--order2');
      $('.project__frame-item:last-child').toggleClass('project__frame-item--order1');
  })











})
