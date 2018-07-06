'use strict';

$(document).ready(function(){
  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    let target = $(this).attr('href');
    document.querySelector(target).scrollIntoView({behavior: 'smooth', block: 'start'});
    
    // $(target).velocity('scroll', {
    //   duration: 800,
    //   offset: -40,
    //   easing: 'ease-in-out'
    // }).focus();
  });
});