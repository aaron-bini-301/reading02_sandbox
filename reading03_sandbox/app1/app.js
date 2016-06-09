var data = {
  name: '<em>Aaron</em>',
  hobby: '<b>eating pizza</b>'
};

var templateText = $('#template').html();
var compilePlease = Handlebars.compile(templateText);
var modifiedText = compilePlease(data);
$('#output').html(modifiedText);
