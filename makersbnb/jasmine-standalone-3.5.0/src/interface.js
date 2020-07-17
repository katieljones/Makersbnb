"use strict";

$(document).ready(function() {
  var user = new User();

  $("#log-in").click(function() {
    user.create();
    $("#user-name").text(user.name)
  });
}