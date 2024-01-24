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
    <div className="flex justify-between bg-white text-slate-600 font-bold shadow-lg">
      <a className="inline-block p-1 w-40 mt-4" href="/">
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
          <li className="mx-5 my-10">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-5 my-10">
            <Link to="/aboutus">About Us</Link>
          </li>
          <li className="mx-5 my-10">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="mx-5 my-10">Cart 🛒 ({cartItems.length})</li>
          <li>
            <button
              className="mr-5 ml-7 py-10"
              onClick={() => {
                btnName === "Login 🟢"
                  ? setBtnName("Logout " + (onlineStatus ? "🟢" : "🛑"))
                  : setBtnName("Login " + (onlineStatus ? "🟢" : "🛑"));
              }}
            >
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
