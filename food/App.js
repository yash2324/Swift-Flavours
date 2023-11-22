import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import logo from "./images/logo.png";
const Title = () => {
  return (
    <a href="/">
      <div>
        <img src={logo} alt="logo" />
      </div>
    </a>
  );
};
const HeaderComponent = () => {
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
    </div>
  );
};
const Body = () => {
  return (
    <div>
      <RestrauntCard />
    </div>
  );
};
const RestrauntCard = () => {
  return (
    <div className="card">
      <img
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf"
        alt="image"
      />
      <h3>Burger King</h3>
      <h4>Burgers,American</h4>
      <h4>4.2 stars</h4>
    </div>
  );
};

const Footer = () => {
  return (
    <footer>
      <h4>footer</h4>
    </footer>
  );
};

const AppLayout = () => {
  return (
    <>
      <HeaderComponent />,
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
