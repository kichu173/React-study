import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
// import About from "./components/About"; // imported below in lazy way.
import Error from "./components/Error";
// config for router - createBrowserRouter
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"; // react-router-dom is developed by remix not meta developers.(reactrouter.com/en/main)
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";
// * import Instamart from "./components/Instamart"; // imported below in lazy way.
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";

// Config Driven UI - all this UI(swiggy) is driven by config which is sent by backend.(1:38:00)
// - Backend/API controls what type of website/offers(coupons) to look in chennai/pune/mumbai,...

// Lazy loading(which comes as named import from react library)/ dynamic import(Instead of writing import statement in above you do lazy import like below)
// In browser console -> network tab -> switch fetch/XHR to js -> filter (http://localhost:1234/) -> refresh page, click on instamart link -> you will find a new js file(bundle which has instamart code) =>This is called as on demand loading.
// Suspense -> when you are loading your component on demand, react tries to suspend it. React tries to render component which upon on demand may takes some time to load that extra script file(bundle), react will suspend the loading.<Suspense fallback={}></Suspense> in router configuration.
const Instamart = lazy(() => import("./components/Instamart"));
const About = lazy(() => import("./components/About"));

// * Structure our layout (first thing to do)
const AppLayout = () => {
  // AppLayout is a functional component

  const [user, setUser] = useState({
    name: "Kichu",
    email: "kichu@gmail.com",
  });

  // you can modify your userContext using a Provider.

  return (
    // ! Any piece of JSX expression/component that you write can have only one parent element. React.Fragment - is a component which is exported by 'React' which we imported from node_modules.
    // passing store into our react application. props name(key) store is very important(key name should be same).
    <Provider store={store}>
      <UserContext.Provider
        value={{
          user: user,
          setUser: setUser,
        }}
      >
        <HeaderComponent />
        {
          // added these curly braces only to add below comments, you can remove later with curly braces.
          // outlet(named export - component) - to fill in different pages (filled by children route configuration. Nested routes)
          // [Header / Footer] to be always there for all pages. Content in outlet should change.
          // All the childrens will go into outlet according to the route config.
        }
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </Provider>
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
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ), // localhost:1234/about
        children: [
          // These childrens are rendered inside the outlet. You should create outlet inside parent(which is About component for in this case.).
          {
            path: "profile", // relative path -> localhost:1234/about/profile, if you provide as /profile in pah it will consider as localhost:1234/profile.
            element: <Profile />,
          },
        ],
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
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
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
