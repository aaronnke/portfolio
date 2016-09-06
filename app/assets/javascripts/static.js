$(document).on('turbolinks:load', function() {

  height = window.innerHeight*0.9;

  $('.profile-link-div').click(function () {
    window.scrollTo(0, height);
  })

  $('.nav-projects').click(function () {
    window.scrollTo(0, height);
  })

  $('.nav-intro').click(function () {
    window.scrollTo(0, 0);
  })

  $('.nav-contact').click(function () {
    window.scrollTo(0, height*5);
  })

  $('.duit-scroll').click(function () {
    window.scrollTo(0, height*2);
  })

  $('.airbnb-scroll').click(function () {
    window.scrollTo(0, height*3);
  })

  $('.snake-scroll').click(function () {
    window.scrollTo(0, height*4);
  })

  $('.contact-scroll').click(function () {
    window.scrollTo(0, height*5);
  })

  $(window).scroll(function() {
    if ($(window).scrollTop() >= height*5) {
      $('.nav-contact').css({
        'border-bottom': '3px solid rgb(50,200,50)'
      });
      $('.nav-projects').css({
        'border-bottom': '0'
      });
      $('.nav-intro').css({
        'border-bottom': '0'
      });
    }
    else if ($(window).scrollTop() >= height) {
      $('.nav-projects').css({
        'border-bottom': '3px solid rgb(50,200,50)'
      });
      $('.nav-contact').css({
        'border-bottom': '0'
      });
      $('.nav-intro').css({
        'border-bottom': '0'
      });
    }
    else {
      $('.nav-intro').css({
        'border-bottom': '3px solid rgb(50,200,50)'
      });
      $('.nav-projects').css({
        'border-bottom': '0'
      });
      $('.nav-contact').css({
        'border-bottom': '0'
      });
    }
  })

});
