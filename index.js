'use strict';

window.jQuery = window.$ = require('path/to/jquery-x.x.x.js');
require('path/to/velocity.js');
// Optional: If you're using the UI pack, require it after Velocity. (You don't need to assign it to a variable.)
require('path/to/velocity.ui.js');
/* Your app code here. */
$('body').velocity({ opacity: 0.5 });

// function smoothScroll() {
//   let element = document.getElemenyById('about-me');
//   element.scrollIntoView({
//     behavior: 'smooth'
//   });
// }

$(document).ready(function(){
  $('a[href^="#"]').on('click', function(e){
    e.preventDefault();
    let target = $(this).attr('href');
    
    $(target).velocity('scroll', {
      duration: 800,
      offset: -40,
      easing: 'ease-in-out'
    }).focus();
  });
});