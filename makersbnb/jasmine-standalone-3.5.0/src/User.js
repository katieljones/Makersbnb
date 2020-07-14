"use strict";

class User {
  create(name, email, password) {
    var user = new User();
    user.set("name", name);
    user.set("email", email);
    user.set("password", password);
    console.log('User created successfully: ' + user.get("name") + ' email: ' + user.get("email"));
  }

  addToDatabase(user) {
    var result = client.query("INSERT INTO users (name, email, password) VALUES('${name}', '${email}', '${password}') RETURNING id, name, email, password;");
  }
};