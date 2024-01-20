import Title from "./title";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
const HeaderComponent = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Online Status : {onlineStatus ? "✅" : "❌"}</li>
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
