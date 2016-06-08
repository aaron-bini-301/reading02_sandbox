//upon event mouseenter, divs are resized
//upon mouseout, divs are sized back to original size

$(function(){
  $('div').on('mouseenter', function(){
    $(this).animate({
      height: "90px",
      width: "175px",
    }
    );
  });
  $('div').on('mouseout', function(){
    $(this).animate({
      height: "50px",
      width: "100px",
    }
    );
  });
});
