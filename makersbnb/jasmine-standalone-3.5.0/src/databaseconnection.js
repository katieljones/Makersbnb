"use strict";
module.exports = class DatabaseConnection {

  static connect() {
  var pg = require('pg');
  var conString = "postgres://ssjoemyd:OzZoezt3dw0J7gmncJWYjtidTCMkPdMD@kandula.db.elephantsql.com:5432/ssjoemyd"
  var client = new pg.Client(conString);

  client.connect(function(err) {
    if(err) {
      return console.error('could not connect to postgres', err);
    }
  })
    return client;

}

static send2(sql) {

  var client = DatabaseConnection.connect();
  return client.query(sql);

}


  static send(sql) {
    var client = DatabaseConnection.connect();

    client.query(sql), async function (err, result) {

    if (err) {
      return console.error('error running query', err);
    }

    client.end();
    
    return result;

    }
    

  }
}