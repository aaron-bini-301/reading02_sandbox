
$(function () {
  var peopleArray = {
    people: [
      {
        firstName: '<em>Joe</em>',
        lastName: '<b>Josephson</b>',
        hobby: 'sailing',
        profession: {
          title: 'Manager',
          company: 'Acme',
          yearsWith: 12,
        },
        kids: 4,
        family: {
          children: {
            first:'Josephine',
            second: 'Joe Jr.',
            third: 'Joanne',
            fourth:'Joan'
          },
        },
        age: 50
      },
      {
        firstName: '<em>First</em>',
        lastName: '<b>Last</b>',
        hobby: 'coding',
        profession: {
          title: 'worker',
          company: 'generic',
          yearsWith: 23,
        },
        kids: 2,
        family: {
          children: ['Abe', 'Abigail'],
        },
        age: 35
      },
      {
        firstName: '<em>Betty</em>',
        lastName: '<b>Draper</b>',
        hobby: 'stamp collecting',
        profession: {
          title: 'CEO',
          company: 'Microsoft',
          yearsWith: 3,
        },
        kids: 2,
        family: {
          children: ['Melinda', 'Tom'],
        },
        age: 40
      }
    ]
  };

  var templateText = $('#template').html();
  var compilePlease = Handlebars.compile(templateText);
  var modifiedText = compilePlease(peopleArray);
  $('#output').html(modifiedText);
  //debugger;
});
