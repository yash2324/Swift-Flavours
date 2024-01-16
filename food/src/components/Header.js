import Title from "./title";
import { useState } from "react";
import { Link } from "react-router-dom";
const HeaderComponent = () => {
  const [btnName, setBtnName] = useState("Login");

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/aboutus">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
        </ul>
      </div>
      <button
        className="Login"
        onClick={() => {
          btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
        }}
      >
        {btnName}
      </button>
    </div>
  );
};

export default HeaderComponent;
