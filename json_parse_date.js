// Parsing JSON data and show Date 

let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

let meetup = JSON.parse(str, function(key, value) {
  if (key == 'date') return new Date(value); // because JSON Parse returns a string, not Date object
  return value;
});

alert( meetup.date.getDate() ); 