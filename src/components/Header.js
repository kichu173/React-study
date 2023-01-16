import { useState } from "react";
import Logo from "../assets/img/foodvilla.png";// import image from assets folder locally.

const loggedInUser = () => {
  // API call to check authentiaction
  return true;
}

const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="logo"
      src={Logo}
    />
  </a>
);

const HeaderComponent = function () {
  const title = 'Food Villa';
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return ( // <Title></Title> is another way to put our functional component inside a component. But most used way and preferred is <Title/> (self-closing tag)
    <div className="header">
      <Title/>
      <h1>{title}</h1>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
      {
        isLoggedIn ? <button onClick={()=> setIsLoggedIn(false)}>Logout</button> : <button onClick={()=> setIsLoggedIn(true)}>Login</button>
      }
    </div>
  );
}

export default HeaderComponent;
