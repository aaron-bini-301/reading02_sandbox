//filter method filters all list items with odd number index, and removes them
//on page these are list items with text of "Even", because filter uses 0-indexing
$(function(){
  $('#do').on('click', function(){
    $('li').filter(":odd").remove();
  });
});
