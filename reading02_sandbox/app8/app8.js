//find method performs the methods specified on all descendant elements that match the selection
//in this case it finds all list items within the first ul and removes them
$(function(){
  $('#do').on('click', function(){
    $('ul.set1').find("li").remove();
  });
});
