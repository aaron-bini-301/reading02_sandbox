//button appends new div to existing div with updated click count
//text within new div displays previous number + 1 every time
//added clear button that removes all divs except for the first and resets
//the click count to 0
var count = 0;
$(function(){

  $('#do').on('click',function() {
    count+=1;
    $('div').prepend('<div>' + "Ancestor. Generation " + count + '</div');
    console.log(count);
  });

  $('#clear').on('click', function(){
    count=0;
    $('div').not(':first').remove();
  });
});
