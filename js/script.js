$(document).ready(function() {
  
  // Toggle the menu icon and header class
  $('#menu').click(function() {
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
  });
  
  // Hide the top button when the page is scrolled to the top
  $(window).on('scroll load', function() {
    if ($(window).scrollTop() > 0) {
      $('.top').show();
    } else {
      $('.top').hide();
    }
    
    // Remove the menu icon and header class when the page is scrolled or loaded
    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');
  });
  
  // Smoothly scroll to the anchor link
  $('a[href*="#"]').on('click', function(e) {
    e.preventDefault();
    console.log(e)
    
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 500, 'linear');
  });
  
});
