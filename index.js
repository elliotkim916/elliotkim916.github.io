'use strict';

$(document).ready(function(){
  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    
    $('body, html').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000).focus();
  });
});