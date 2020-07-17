"use strict";

const DatabaseConnection = require('./databaseconnection.js')

module.exports = class User {
  static create(name, email, password) {
    var result = DatabaseConnection.send(`INSERT INTO users (name, email, password) VALUES('${name}', '${email}', '${password}') RETURNING id, name, email, password;`);
  }
  static  async verify(email, password) {
    console.log("In user.verify")
    var result = await DatabaseConnection.send(`SELECT * FROM users WHERE email ='${email}';`);
    console.log(result)
    if (result.rowCount == 0) {return false; }  
    if (password == result.rows[0].password) {
      return result.rows[0]
    } else {
      return false
    };
  };
};
