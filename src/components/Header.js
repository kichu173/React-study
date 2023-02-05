import { useState, useContext } from "react";
import Logo from "../assets/img/foodvilla.png"; // import image from assets folder locally which comes as default export.
import { Link } from "react-router-dom"; // Link is a React component, in browser elements 'to' will be modified as 'href'.
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const loggedInUser = () => {
  // API call to check authentiaction
  return true;
};

const Title = () => (
  <a href="/">
    <img className="h-28 p-2" alt="logo" src={Logo} />
  </a>
);

const HeaderComponent = function () {
  const title = "Food Villa";
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const isOnline = useOnline();

  // useContext is a hook, and hook is a normal JS function at the end of day.
  // You can have multiple useContext in app.
  const { user } = useContext(UserContext);

  // subscribe to the store, useSelector hook is basically a bridge between the redux and your component.
  const cartItems = useSelector((store) => store.cart.items);
  console.log("cartItems - Header component", cartItems);

  return (
    // <Title></Title> is another way to put our functional component inside a component. But most used way and preferred is <Title/> (self-closing tag)
    // if my website crosses the threshold/width of small devices make my header blue.
    <div className="flex justify-between bg-pink-50 shadow-lg sm:bg-blue-50">
      <Title />
      <h1 className="flex py-10 px-2 font-bold text-xl">{title}</h1>

      <div className="nav-items">
        <ul className="flex py-10">
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2">
            <Link to="/about">About</Link>
          </li>
          <li className="px-2">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-2">
            <Link to="/instamart">Instamart</Link>
          </li>
          <li className="px-2">
            <Link to="/cart">Cart - {cartItems.length} items</Link>
          </li>
        </ul>
      </div>
      <h1 className="flex py-10">{isOnline ? "✅" : "🔴"}</h1>
      <span className="flex py-10 font-bold text-red-900">{user.name}</span>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default HeaderComponent;
