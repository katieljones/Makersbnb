"use strict";

class Space {
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

  create(name, description, price) {
    var space = new Space();
    space.set("name", name);
    space.set("description", description);
    space.set("price", price);
    console.log('Space listed: ' + space.get("name"));
  }

  addToDatabase(space) {
    var result = client.query("INSERT INTO spaces (name, description, price) VALUES('${name}', '${description}', '${price}') RETURNING id, name, description, price;");
  }

  book(space) {
    
  }

}
