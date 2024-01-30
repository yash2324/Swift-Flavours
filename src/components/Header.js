import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import useOnlineStatus from "../../utils/useOnlineStatus";
const HeaderComponent = () => {
  const onlineStatus = useOnlineStatus();
  const [btnName, setBtnName] = useState(
    "Login " + (onlineStatus ? "🟢" : "🛑")
  );
  useEffect(() => {
    if (onlineStatus === false) {
      setBtnName("Login 🛑");
    }
  }, [onlineStatus]);
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="flex justify-between bg-white text-slate-600 font-bold shadow-lg lg:flex lg:flex-row lg:items-center lg:justify-between">
      <a className="inline-block p-1 w-25" href="/">
        <div>
          <img
            className="w-25 h-20 object-contain"
            src="https://i.ibb.co/VqdL26h/final-logo.png"
            alt="logo"
          />
        </div>
      </a>
      <div className="flex items-center">
        <ul className="flex">
          <li className="mx-3 md:mx-5 lg:mx-5 my-8">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-3 md:mx-5 lg:mx-5 my-8">
            <Link to="/cart">Cart 🛒 ({cartItems.length})</Link>
          </li>
          <li className="ml-4 mr-5 py-8">
            <button
              onClick={() => {
                btnName === "Login 🟢"
                  ? setBtnName("Logout " + (onlineStatus ? "🟢" : "🛑"))
                  : setBtnName("Login " + (onlineStatus ? "🟢" : "🛑"));
              }}
            >
              {btnName === "Login 🟢" ? (
                <Link to="/login">{btnName}</Link>
              ) : (
                btnName
              )}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
