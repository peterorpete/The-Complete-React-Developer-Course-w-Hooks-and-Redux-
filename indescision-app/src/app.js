console.log("App.js is running!");
let app = {
  title: 'Indecision App',
  subtitle =  'This is my subtitle',
}
let template = (
 <div>
  <h1>{app.title}</h1>
  <p>{app.subtitle}</p>
  <ol>
   <li>list item 1</li>
   <li>list item 2</li>
  </ol>
 </div>
);
let user = {
  name: 'Peter',
  age = 38,
  location = 'Cornwall'
}
let tempateTwo = (
 <div>
  <h1>{user.name.toUpperCase}</h1>
  <p>{user.age}</p>
  <p>Location: {user.location}</p>
 </div>
);
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
