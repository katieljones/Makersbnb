"use strict";

class Space {
  constructor(name, description, price) {
    this.name = name;
    this.description = description;
    this.price = price;
    // this.spaces = [];
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

  // addSpace(space){
  //   this.spaces.push(space);
  // }

  create(name, description, price) {
    var space = new Space();
    space.set("name", name);
    space.set("description", description);
    space.set("price", price);
    // addSpace(space)
    console.log('Space listed: ' + space.get("name"));
  }

  addToDatabase(space) {
    var result = client.query("INSERT INTO spaces (name, description, price) VALUES('${name}', '${description}', '${price}') RETURNING id, name, description, price;");
  }

  view(spaces) {
    var result = client.query("SELECT * FROM spaces")
    result.forEach(myFunction)
    function myFunction(value) {
    txt = txt + value + "<br>";{

    }

  }

}
