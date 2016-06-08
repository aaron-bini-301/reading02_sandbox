//button appends new div to existing div with updated click count
//text within new div displays previous number + 1 every time
var count = 0;
$(function(){

  $('#do').on('click',function() {
    count+=1;
    $('div').prepend('<div>' + "Ancestor. Generation " + count + '</div');
    console.log(count);
  });
});
