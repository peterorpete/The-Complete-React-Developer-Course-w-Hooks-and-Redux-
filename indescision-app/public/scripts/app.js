"use strict";

console.log("App.js is running!");
var app = {
  title: "Indecision App",
  subtitle: "This is my subtitle",
  options: ["One", "Two"]
};
var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    app.title
  ),
  app.subtitle && React.createElement(
    "p",
    null,
    app.subtitle
  ),
  React.createElement(
    "p",
    null,
    app.options.length > 0 ? "Here are my options" : "No options"
  ),
  React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      "list item 1"
    ),
    React.createElement(
      "li",
      null,
      "list item 2"
    )
  )
);

///////////////////////////

var user = {
  name: "Peter",
  age: 38,
  location: "Cornwall"
};
var getLocation = function getLocation(location) {
  if (location) {
    return React.createElement(
      "p",
      null,
      "Location: ",
      location
    );
  }
};
var tempateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    user.name ? user.name : "unknown"
  ),
  user.age >= 18 && user.age && React.createElement(
    "p",
    null,
    "Age: ",
    user.age
  ),
  React.createElement(
    "p",
    null,
    getLocation(user.location)
  )
);
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
