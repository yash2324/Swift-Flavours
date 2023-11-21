import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const Title = () => {
  return (
    <h1 id="title" key="h1">
      Food Villa
    </h1>
  );
};
const HeaderComponent = () => {
  return (
    <div>
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);
