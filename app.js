import React from "react"; // getting it from my node_modules
import ReactDOM from "react-dom/client";

// PURE REACT
const heading = React.createElement(
  "h1",
  {
    id: "title", // <h1 id="title">Namaste Everyone from React!</h1>
  },
  "Namaste Everyone from React!"
); // 'React' is a global variable which comes from the injected cdn js files. 'createElement' take three arguments - 1.element/tag we need to create, 2.empty object - takes props/html attributes(it can take anything here and will show up in dom, ex: hello:"world"), 3.text content/children to be displayed/inserted.
console.log(heading); // react element is a plain JS object

const heading1 = React.createElement(
  "h1",
  {
    id: "title1",
  },
  "Heading 1 for parcel"
);
const heading2 = React.createElement(
  "h2",
  {
    id: "title2",
  },
  "Heading 2"
);

const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading1, heading2]
); // multiple children
console.log("container", container);

const root = ReactDOM.createRoot(document.getElementById("root")); // This is the place(id="root") where we have to run our react. Specify which is the root element inside our app to react. In app we do not have multiple roots, one root where we inject react inside and one render method.
// passing a react element inside the root
root.render(container); // put our variable heading/container inside the root variable (dom manipulation - render, react will override whatever there existing inside root id).
