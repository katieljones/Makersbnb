var pg = require('pg');
var conString = "postgres://katiejones:demo1234@localhost:5432/makersbnb_test" //Can be found in the Details page
var client = new pg.Client(conString);
client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  client.query("SELECT * FROM users", function(err, result) {
    if(err) {
      return console.error('error running query', err);
    }
    console.log(result);
    // >> output: 2018-08-23T14:02:57.117Z
    client.end();
  });
});
