import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
// config for router - createBrowserRouter
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"; // react-router-dom is developed by remix not meta developers.(reactrouter.com/en/main)
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";

// Config Driven UI - all this UI(swiggy) is driven by config which is sent by backend.(1:38:00)
// - Backend/API controls what type of website/offers(coupons) to look in chennai/pune/mumbai,...

// * Structure our layout (first thing to do)
const AppLayout = () => {
  // AppLayout is a functional component
  return (
    // ! Any piece of JSX expression/component that you write can have only one parent element. React.Fragment - is a component which is exported by 'React' which we imported from node_modules.
    <>
      <HeaderComponent />
      {
        // added these curly braces only to add below comments, you can remove later with curly braces.
        // outlet(named export - component) - to fill in different pages (filled by children route configuration. Nested routes)
        // [Header / Footer] to be always there for all pages. Content in outlet should change.
        // All the childrens will go into outlet according to the route config.
      }
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  // always create below applayout component. We need app layout component defined before we use it here.
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />, // localhost:1234/xyz
    children: [
      // sequence does not matter here.
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />, // localhost:1234/about
      },
      {
        path: "/contact",
        element: <Contact />, // localhost:1234/contact
      },
      {
        // Dynamic routing.
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

/**
 * JSX - can have one parent.
 * <React.Fragment> is the parent element, and it is like an empty tag. If you use `div` as a parent element in place of `React.Fragment` then in dom you will find the that ugly div serving no purpose.To avoid extra piece of div. we use React.Fragment and it will not show up in dom.
 * <React.Fragment></React.Fragment> or <></> (both syntax are one in the same thing).
 * You cannot pass any attributes in <></>, to pass style or any attribute you should use `div`.
 * TODO: Can I use React.Fragment inside React.Fragment -> ?
 */

// JS object for style and pass it to react jsx for inline styling.
// const styleObj = {
//   backgroundColor: "red",
// }

// Inline styling in react.
// ? <div style={styleObj}></div> (or) style={{backgroundColor: "red"}} (or) <div className="any-class"></div> -> write in external css for this like .any-class{..}.

// const jsx = (
//   <React.Fragment>
//     <h1>JSX</h1>
//     <h1>Second JSX</h1>
//   </React.Fragment>
// )

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />); // root will now render according to the router configuration.
