"use strict";
const DatabaseConnection = require('./databaseconnection.js')

module.exports = class Space {
  static create(name, description, price) {

    var result = DatabaseConnection.send(`INSERT INTO spaces (name, description, price) VALUES('${name}', '${description}', '${price}') RETURNING id, name, description, price;`);
  }

  constructor(name, description, price) {
    this.name = name;
    this.description = description;
    this.price = price;
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
