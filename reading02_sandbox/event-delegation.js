//shortcut for .ready()
$(function() {
  //three variables set with no values
  var listItem, itemStatus, eventType;

  //.on adds event listener to the unordered list
  $('ul').on(
    //a click event and a mouseover event are listened for
    'click mouseover',
    //but not on the element with id four
    ':not(#four)',
    //status data as an object literal
    {status: 'important'},
    //anonymous function with e parameter, which is an event object that has properties and methods related to the event that occurs
    function(e) {
      //listItem variable that was created earlier is now set to a string with the text content of the target of the event
      listItem = 'Item: ' + e.target.textContent + '<br />';
      //itemStatus set to 'important' based on data status object literal created earlier
      itemStatus = 'Status: ' + e.data.status + '<br />';
      //eventType set to the type of the event that occurs
      eventType = 'Event: ' + e.type;
      //paragraph with the id of notes has html set to the string values of the three variables
      $('#notes').html(listItem + itemStatus + eventType);
    }
  );

});
