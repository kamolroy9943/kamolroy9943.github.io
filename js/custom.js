$(window).scroll(function(){
    var sticky = $('.nav'),
        scroll = $(window).scrollTop();
  
    if (scroll >= 50) sticky.addClass('d-block');
    else sticky.removeClass('d-block');
  });