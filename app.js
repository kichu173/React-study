import React from "react"; // getting it from my node_modules
import ReactDOM from "react-dom/client";

// PURE REACT
const heading1 = React.createElement(
  "h1", // h1 => we call this as a react element.
  {
    id: "title", // <h1 id="title" key="h1">Namaste Everyone from React!</h1>
    key: "h1"
  },
  "Namaste Everyone from React!"
); // 'React' is a global variable which comes from the injected cdn js files. 'createElement' take three arguments - 1.element/tag we need to create, 2.empty object - takes props/html attributes(it can take anything here and will show up in dom, ex: hello:"world"), 3.text content/children to be displayed/inserted.
console.log('heading using react.createElement',heading1); // react element is a plain JS object

// ! React.createElement => Object => HTML(DOM)
// Suppose we have to construct big HTML structure, we use JSX(Javascript XML) instead React.createElement(.....) -> which creates more mess writing big html structure.
// Motivation behind bringing JSX => write whole html inside javascript.

// using JSX for creating h1 tag
// * JSX is html like syntax, and not html inside javascript.
// Facebook developers built JSX.
// heading variable below is called as react element here. React element is nothing but an object at the end of day.
const heading = (
  <h1 id="title" key="h1" tabIndex="1">
    Namaste Everyone from React JSX!
  </h1>
);// use parenthesis for writing in multiple lines. JSX expression -> code wrapped in parenthesis is called as.
console.log('heading using JSX', heading);

// How JSX is executed? - Babel(reads code line by line) understands JSX and produces output code which browser understands and executes it.
// ! JSX uses React.createElement behind the scenes, JSX => React.createElement => Object => HTML(DOM). Babel converts the JSX to React.createElement like code.

// React component(Everything inside a react is a component)
// Two types of components in React
// - Functional component (new way of write code)
// - Class Based Component (old way of writing code)

// Functional Component - Functional component is nothing but a JS function that returns JSX/ React.createElement(piece of react element).
// Name of component starts with capital letter. (Not mandatory but a good practice)
const HeaderComponent = function () {
  // return <h1>Namaste React Functional Component</h1>; // if you have single line you can write like this without parenthesis.
  return ( // * to use react element inside a functional component we use {heading}, if we want to use functional component inside a functional component we use <Title /> -> component composition/composing component (or) {Title()}. Inside JSX '{..}' you can write any piece of JS code inside the object syntax.
    <div>
      {heading} 
      <h2>Namaste React Functional Component</h2>
      <h2>This is a H2 tag</h2>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root")); // This is the place(id="root") where we have to run our react. Specify which is the root element inside our app to react. In app we do not have multiple roots, one root where we inject react inside and one render method.
// passing a react element inside the root
// When you have to render react element you have to write like this, root.render(heading);
// When we have to render react functional component, you should do like below(angel brackets)
root.render(<HeaderComponent />); // put our variable heading/container inside the root variable (dom manipulation - render, react will override whatever there existing inside root id).
