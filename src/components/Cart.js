import { useSelector } from "react-redux";
import { ITEM_IMG_CDN_URL } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { clearCart, removeItem } from "../../utils/cartSlice";
import { Link } from "react-router-dom";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const handleRemoveItem = (item) => {
    dispatch(removeItem(item.id));
  };
  return (
    <>
      <div className="flex justify-between">
        <h2 className="m-3 p-5 font-bold text-center text-2xl underline">
          Your Cart :
        </h2>
        <button
          onClick={() => handleClearCart()}
          className="text-xl h-12 mx-4 mt-auto mb-auto font-semibold text-red-600 bg-gray-300 p-2 rounded-md "
        >
          Clear Cart
        </button>
      </div>
      {cartItems.length > 0 ? (
        <div className="flex flex-wrap justify-around items-start">
          {cartItems.map((item) => (
            <div
              className="flex flex-col items-center mx-2 mb-5 border p-4 w-1/3"
              key={item.id}
            >
              {item?.imageId ? (
                <img
                  className="menu-item-img w-24 h-24 object-cover rounded mb-2"
                  src={ITEM_IMG_CDN_URL + item?.imageId}
                  alt={item?.name}
                />
              ) : (
                <div className="menu-item-img w-24 h-24 bg-gray-200 rounded mb-2">
                  <p className="text-center mt-8">No image</p>
                </div>
              )}
              <div className="text-center">
                <h3 className="item-title text-xl font-semibold mb-1">
                  {item?.name}
                </h3>
                <p className="item-cost text-green-600 font-bold">
                  {item?.price > 0
                    ? new Intl.NumberFormat("en-IN", {
                        style: "currency",
                        currency: "INR",
                      }).format(item?.price / 100)
                    : "₹200.00"}
                </p>
                <button
                  onClick={() => handleRemoveItem(item)}
                  className="text-white bg-red-500 px-4 py-2 rounded mt-2 hover:bg-red-600 focus:outline-none focus:shadow-outline"
                >
                  Remove Item
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center mt-5">
          <p className="text-3xl font-bold mb-2">
            Uh-Oh!!! Seems like your cart is empty :\
          </p>
          <p className="text-lg">
            Explore restaurants and add some delicious items to your cart!
          </p>
          <Link
            to={"/"}
            className="text-green-800 hover:underline font-semibold mt-6 text-2xl"
          >
            Go to Home
          </Link>
        </div>
      )}
    </>
  );
};
export default Cart;
