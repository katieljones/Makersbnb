"use strict";
const DatabaseConnection = require('./databaseconnection.js')

module.exports = class Space {
  static create(name, description, price, date_from, date_to) {

    var result = DatabaseConnection.send(`INSERT INTO spaces (name, description, price, date_from, date_to) VALUES('${name}', '${description}', '${price}', '${date_from}', '${date_to}') RETURNING id, name, description, price, date_from, date_to;`);
  }

  static  async retrieve() {
    var result = await DatabaseConnection.send2(`SELECT * FROM spaces;`);
    //var result =  DatabaseConnection.send(`SELECT * FROM spaces;`);
    //console.log("in retrieve");
    //console.log(result);
    return result;
    //console.log("name:" + result.rows[1].name);
    //console.log("desc:" + result.rows[1].description);
  }



  constructor(name, description, price) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.date_from = date_from;
    this.date_to = date_to;
  }

  getName() {
    return this.name;
  }

  getDescription() {
    return this.description;
  }

  getPrice() {
    return this.price;
  }


  book(space) {

  }

}
