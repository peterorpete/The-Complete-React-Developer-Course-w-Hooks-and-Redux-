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

let count = 0;
const addOne = () => {
 console.log("add 1");
};
const minusOne = () => {
 console.log("minus 1");
};
const reset = () => {
 console.log("reset");
};
const templateTwo = (
 <div>
  <h1>Count: {count}</h1>
  <button onCLick={addOne}>+1</button>
  <button onCLick={minusOne}>-1</button>
  <button onCLick={reset}>reset</button>
 </div>
);

let appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
