$(function(){
  $('div').on('mouseenter', function(){
    $(this).animate({
      height: "90px",
      width: "175px",
      left: '+=20'
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
