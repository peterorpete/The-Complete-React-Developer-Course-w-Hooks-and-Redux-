"use strict";

console.log("App.js is running!");
var app = {
  title: "Indecision App",
  subtitle: "This is my subtitle"
};
var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    app.title
  ),
  React.createElement(
    "p",
    null,
    app.subtitle
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
var user = {
  name: "Peter",
  age: 38,
  location: "Cornwall"
};
var getLocation = function getLocation(location) {
  if (location) {
    return location;
  } else {
    return "unknown";
  }
};
var tempateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    user.name
  ),
  React.createElement(
    "p",
    null,
    user.age
  ),
  React.createElement(
    "p",
    null,
    "Location: ",
    getLocation(user.location)
  )
);
var appRoot = document.getElementById("app");

ReactDOM.render(tempateTwo, appRoot);
