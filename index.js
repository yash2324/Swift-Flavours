import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./logo.png";
import user from "./user icon.png";
import "./assignment.css";
// const heading1 = React.createElement(
//   "h1",
//   {
//     id: "title",
//     key: "h1",
//   },
//   "Namaste Everyone"
// );
// const heading2 = React.createElement(
//   "h2",
//   {
//     id: "title2",
//     key: "h2",
//   },
//   "Namaste bros"
// );
// const container = React.createElement(
//   "div",
//   {
//     id: "container",
//     hello: "world",
//   },
//   [heading1, heading2]
// );
const Heading3 = (
  <div className="title">
    <h1 id="h1" key="key1">
      An element using jsx
    </h1>
    <h2 id="h2" key="key2">
      Text
    </h2>
    <h3 id="h3" key="key3">
      Heading 3
    </h3>
  </div>
);

const Heading4 = () => {
  return (
    <div className="title">
      <h1 id="h1" key="key1">
        An element using jsx
      </h1>
      <h2 id="h2" key="key2">
        Text
      </h2>
      <h3 id="h3" key="key3">
        Heading 3
      </h3>
    </div>
  );
};

const Header = () => {
  return (
    <>
      <header className="Header">
        <div className="Logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="Address">
          <input
            className="input"
            type="text"
            placeholder="Enter text here :"
          />
          <button type="submit">Submit</button>
        </div>
        <div className="User">
          <img src={user} alt="user icon" />
        </div>
      </header>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
