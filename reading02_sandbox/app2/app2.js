//this app has same functionality as app1, but the animations occur
//over the course of one second now, so it is slowed down
$(function(){
  $('div').on('mouseenter', function(){
    $(this).animate({
      height: "90px",
      width: "175px",
      // height: "toggle",
      // width: "toggle"
    }, 1000
    );
  });
  $('div').on('mouseout', function(){
    $(this).animate({
      height: "50px",
      width: "100px",
      // height: "toggle",
      // width: "toggle"
    }, 1000
    );
  });
});
