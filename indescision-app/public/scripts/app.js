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

var count = 0;
var addOne = function addOne() {
  console.log("add 1");
};
var minusOne = function minusOne() {
  console.log("minus 1");
};
var reset = function reset() {
  console.log("reset");
};
var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Count: ",
    count
  ),
  React.createElement(
    "button",
    { onCLick: addOne },
    "+1"
  ),
  React.createElement(
    "button",
    { onCLick: minusOne },
    "-1"
  ),
  React.createElement(
    "button",
    { onCLick: reset },
    "reset"
  )
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
