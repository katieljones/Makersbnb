"use strict";
const DatabaseConnection = require('./databaseconnection.js')

module.exports = class Space {
  static create(name, description, price, date_from, date_to) {

    var result = DatabaseConnection.send(`INSERT INTO spaces (name, description, price, date_from, date_to) VALUES('${name}', '${description}', '${price}', '${date_from}', '${date_to}') RETURNING id, name, description, price, date_from, date_to;`);
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
