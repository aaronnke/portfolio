$(document).on('turbolinks:load', function() {

  height = window.innerHeight*0.9;
  prevScroll = 0;

  $('.nav-intro').click(function () {
    $("html, body").animate({ scrollTop: 0 });
    prevScroll = $(window).scrollTop();
  })

  $('.profile-link-div').click(function () {
    $("html, body").animate({ scrollTop: height });
    prevScroll = $(window).scrollTop();
  })

  $('.nav-projects').click(function () {
    $("html, body").animate({ scrollTop: height });
    prevScroll = $(window).scrollTop();
  })

  $('.nav-contact').click(function () {
    $("html, body").animate({ scrollTop: height*5 });
    prevScroll = $(window).scrollTop();
  })

  $('.duit-scroll').click(function () {
    $("html, body").animate({ scrollTop: height*2 });
    prevScroll = $(window).scrollTop();
  })

  $('.airbnb-scroll').click(function () {
    $("html, body").animate({ scrollTop: height*3 });
    prevScroll = $(window).scrollTop();
  })

  $('.snake-scroll').click(function () {
    $("html, body").animate({ scrollTop: height*4 });
    prevScroll = $(window).scrollTop();
  })

  $('.contact-scroll').click(function () {
    $("html, body").animate({ scrollTop: height*5 });
    prevScroll = $(window).scrollTop();
  })


  var scrollTimer = null;

  $(window).scroll(function () {
    if (scrollTimer) {
        clearTimeout(scrollTimer);   // clear any previous pending timer
    }
    scrollTimer = setTimeout(handleScroll, 100);   // set new timer
  });

  function handleScroll() {
    scrollTimer = null;
    var currentScroll = $(window).scrollTop();

    if (currentScroll > 5 && currentScroll < height - 5) {
      if (currentScroll > prevScroll) {
        $("html, body").animate({ scrollTop: height });
      }
      else {
        $("html, body").animate({ scrollTop: 0 });
      }
    }
    else if (currentScroll > height + 5 && currentScroll < height*2 - 5) {
      if (currentScroll > prevScroll) {
        $("html, body").animate({ scrollTop: height*2 });
      }
      else {
        $("html, body").animate({ scrollTop: height*1 });
      }
    }
    else if (currentScroll > height*2 + 5 && currentScroll < height*3 - 5) {
      if (currentScroll > prevScroll) {
        $("html, body").animate({ scrollTop: height*3 });
      }
      else {
        $("html, body").animate({ scrollTop: height*2 });
      }
    }
    else if (currentScroll > height*3 + 5 && currentScroll < height*4 - 5) {
      if (currentScroll > prevScroll) {
        $("html, body").animate({ scrollTop: height*4 });
      }
      else {
        $("html, body").animate({ scrollTop: height*3 });
      }
    }
    else if (currentScroll > height*4 + 5 && currentScroll < height*5 - 5) {
      if (currentScroll > prevScroll) {
        $("html, body").animate({ scrollTop: height*5 });
      }
      else {
        $("html, body").animate({ scrollTop: height*4 });
      }
    }

    prevScroll = $(window).scrollTop();

    if (prevScroll >= height*5 - 5) {
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
    else if (prevScroll == 0) {
      $('.navbar').css({
        'border-bottom': '0'
      });

      $('.nav-projects').css({
        'border-bottom': '0'
      });
      $('.nav-contact').css({
        'border-bottom': '0'
      });
      $('.nav-intro').css({
        'border-bottom': '3px solid rgb(50,200,50)'
      });
    }
    else {
      $('.navbar').css({
        'border-bottom': '1px solid rgb(45,45,60)'
      });

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
  }

});
