import { useState } from "react";
import Logo from "../assets/img/foodvilla.png"; // import image from assets folder locally which comes as default export.
import { Link } from "react-router-dom"; // Link is a React component, in browser elements 'to' will be modified as 'href'.

const loggedInUser = () => {
  // API call to check authentiaction
  return true;
};

const Title = () => (
  <a href="/">
    <img className="logo" alt="logo" src={Logo} />
  </a>
);

const HeaderComponent = function () {
  const title = "Food Villa";
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    // <Title></Title> is another way to put our functional component inside a component. But most used way and preferred is <Title/> (self-closing tag)
    <div className="header">
      <Title />
      <h1>{title}</h1>

      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>Cart</li>
        </ul>
      </div>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default HeaderComponent;
