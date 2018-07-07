'use strict';

$(document).ready(function(){
  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    // let target = $(this).attr('href');
    // document.body.querySelector(target).scrollIntoView({behavior: 'smooth', block: 'start'});
    
    $('body, html').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000 );
    // $(target).velocity('scroll', {
    //   duration: 800,
    //   offset: -40,
    //   easing: 'ease-in-out'
    // }).focus();
  });
});