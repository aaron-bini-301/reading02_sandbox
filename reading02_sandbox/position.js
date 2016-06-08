//shortcut for .ready()
$(function() {
  //var $window set to JQuery window object
  var $window = $(window);
  //$slideAd set to element with id of slideAd
  var $slideAd = $('#slideAd');
  //endZone set equal to the height of the #footer?
  var endZone = $('#footer').offset().top - $window.height() - 500;
  //when scroll event occurs in the window, perform this anonymous function
  $window.on('scroll', function() {
    //if user's position is further from the top than the start of endZone
    if (endZone < $window.scrollTop()) {
      //slideAd slides in from the righthand side of scree in 250 ms
      $slideAd.animate({ 'right': '0px' }, 250);
      //else if user's position is not further from the top than the start of endZone
    } else {
      //the stop prevents the animation or stops it if it is occuring and moves the element back to the right off of the screen
      $slideAd.stop(true).animate({ 'right': '-360px' }, 250);
    }

  });

});
