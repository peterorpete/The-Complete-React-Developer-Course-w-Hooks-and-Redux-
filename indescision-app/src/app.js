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
 count++;
 renderCounterApp();
};
const minusOne = () => {
 count--;
 renderCounterApp();
};
const reset = () => {
 count = 0;
 renderCounterApp();
};

let appRoot = document.getElementById("app");

let renderCounterApp = () => {
 const templateTwo = (
  <div>
   <h1>Count: {count}</h1>
   <button onClick={addOne}>+1</button>
   <button onClick={minusOne}>-1</button>
   <button onClick={reset}>reset</button>
  </div>
 );
 ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
