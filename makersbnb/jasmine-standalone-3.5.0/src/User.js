"use strict";
const DatabaseConnection = require('./databaseconnection.js')

module.exports = class User {
  static create(name, email, password) {

    var result = DatabaseConnection.send(`INSERT INTO users (name, email, password) VALUES('${name}', '${email}', '${password}') RETURNING id, name, email, password;`);
  }

};
