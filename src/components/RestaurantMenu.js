import { useParams } from "react-router-dom";
import Shimmer_menu from "./Shimmer_menu";
import { IMG_CDN_URL, ITEM_IMG_CDN_URL } from "../../utils/constants";
import useRestaurantData from "../../utils/useRestaurantData";
import useMenuItems from "../../utils/useMenuItems";
import { useDispatch } from "react-redux";
import { addItem } from "../../utils/cartSlice";
import { useState } from "react";
const RestaurantMenu = () => {
  const { resid } = useParams();
  const restaurant = useRestaurantData(resid);
  const menuItems = useMenuItems(resid);
  const dispatch = useDispatch();
  const [addedItemId, setAddedItemId] = useState(null);

  const handleAddItem = (item) => {
    dispatch(addItem(item));
    setAddedItemId(item.id);
    setTimeout(() => {
      setAddedItemId(null);
    }, 1000);
  };

  if (menuItems.length === 0) return <Shimmer_menu />;
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-evenly bg-slate-500">
        <img
          className="mx-auto lg:mx-0 w-64 h-60 md:h-80 lg:w-64 lg:h-64 m-10 rounded-md"
          src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
          alt={restaurant?.name}
        />
        <div className="flex-col text-center lg:text-left justify-between ">
          <h1 className="mt-auto lg:mx-0 lg:mt-32 font-extrabold text-5xl">
            {restaurant?.name}
          </h1>

          <h2 className="text-white text-xl">
            {"💳 " + restaurant?.costForTwoMessage}
          </h2>
          <h2 className="text-white text-xl">
            {"⭐️ " + restaurant?.avgRating}
          </h2>
          <p className="text-white text-xl">
            {"🍴 " + restaurant?.cuisines.join(" , ")}
          </p>
        </div>
      </div>

      <h2 className="text-center text-3xl font-bold underline">Menu</h2>
      <div className="text-slate-800 m-5 ">
        {menuItems.map((item) => (
          <div
            className={`flex mb-5 items-center justify-between transition-all duration-500 ease-in-out ${
              addedItemId === item.id ? "bg-green-100" : ""
            }`}
            key={item.id}
          >
            <div className="flex items-center rounded-lg">
              {item?.imageId ? (
                <img
                  className="menu-item-img w-28 h-28 object-cover rounded-lg p-2 mr-4"
                  src={ITEM_IMG_CDN_URL + item?.imageId}
                  alt={item?.name}
                />
              ) : (
                <div className="menu-item-img w-28 h-28 object-cover bg-gray-200 rounded-lg p-2 mr-4">
                  <p className="text-center mt-8">No image</p>
                </div>
              )}
              <div className=" m-3 ">
                <div className="menu-item-details">
                  <h3 className="item-title text-xl font-semibold mb-1">
                    {item?.name}
                  </h3>
                  <p className="item-cost text-green-600 font-bold">
                    {item?.price > 0
                      ? new Intl.NumberFormat("en-IN", {
                          style: "currency",
                          currency: "INR",
                        }).format(item?.price / 100)
                      : "₹200.00 "}
                  </p>
                </div>
              </div>
            </div>
            <button
              className="add-btn mr-2 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:shadow-outline"
              onClick={() => handleAddItem(item)}
            >
              ADD +
            </button>
          </div>
        ))}
      </div>
    </>
  );
};
export default RestaurantMenu;
