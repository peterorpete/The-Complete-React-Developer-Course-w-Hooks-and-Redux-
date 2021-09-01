console.log("App.js is running!");
let app = {
 title: "Indecision App",
 subtitle: "This is my subtitle",
 options: ["One", "Two"],
};
let template = (
 <div>
  <h1>{app.title}</h1>
  {app.subtitle && <p>{app.subtitle}</p>}
  <p>{app.options.length > 0 ? "Here are my options" : "No options"}</p>
  <ol>
   <li>list item 1</li>
   <li>list item 2</li>
  </ol>
 </div>
);

///////////////////////////

let user = {
 name: "Peter",
 age: 38,
 location: "Cornwall",
};
let getLocation = function (location) {
 if (location) {
  return <p>Location: {location}</p>;
 }
};
let tempateTwo = (
 <div>
  <h1>{user.name ? user.name : "unknown"}</h1>
  {user.age >= 18 && user.age && <p>Age: {user.age}</p>}
  <p>{getLocation(user.location)}</p>
 </div>
);
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
