import Title from "./Title";
import { useState } from "react";

const HeaderComponent = () => {
  const [isLoggedin, setIsLoggedin] = useState(true);

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
      {isLoggedin ? (
        <button onClick={() => setIsLoggedin(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedin(true)}>Login</button>
      )}
    </div>
  );
};

export default HeaderComponent;
