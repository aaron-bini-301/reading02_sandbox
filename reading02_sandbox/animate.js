//.ready() shortcut
$(function() {
  //click event listener added to all list items, anonymous function runs when event occurs
  $('li').on('click', function() {
    //this refers here to the particular element being clicked, and animate method is called when that occurs
    //animate works on any css property that can be represented as a number
    $(this).animate({
      //opacity is set to 0, and paddingLeft is increased by 80, therefore list item appears to slide right
      opacity: 0.0,
      paddingLeft: '+=80'
      //this animation occurs in 500ms
      //when animation finishes, anonymous function is called that removes the list item
    }, 500, function() {
      $(this).remove();
    });
  });
});
