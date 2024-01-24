import { useParams } from "react-router-dom";
import Shimmer_menu from "./Shimmer_menu";
import { IMG_CDN_URL, ITEM_IMG_CDN_URL } from "../../utils/constants";
import useRestaurantData from "../../utils/useRestaurantData";
import useMenuItems from "../../utils/useMenuItems";
import { useDispatch } from "react-redux";
import { addItem } from "../../utils/cartSlice";
const RestaurantMenu = () => {
  const { resid } = useParams();
  const restaurant = useRestaurantData(resid);
  const menuItems = useMenuItems(resid);
  if (menuItems.length === 0) return <Shimmer_menu />;
  const dispatch = useDispatch();
  const handleAddItem = () => {
    dispatch(addItem("random"));
  };
  return (
    <>
      <div className="flex justify-evenly bg-slate-500">
        <img
          className="w-64 h-64 m-10 rounded-md"
          src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
          alt={restaurant?.name}
        />
        <div className="flex-col justify-between ">
          <h1 className="mt-32 font-extrabold text-5xl">{restaurant?.name}</h1>

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
      <div className="text-slate-800 m-5">
        {menuItems.map((item) => (
          <div className="flex mb-5 items-center justify-between">
            <div className="flex items-center">
              {item?.imageId ? (
                <img
                  className="menu-item-img w-24 h-24 object-cover rounded mr-4"
                  src={ITEM_IMG_CDN_URL + item?.imageId}
                  alt={item?.name}
                />
              ) : (
                <div className="menu-item-img w-24 h-24 bg-gray-200 rounded mr-4">
                  <p className="text-center mt-8">No image</p>
                </div>
              )}
              <div className="m-3 border-b-2">
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
                      : " "}
                  </p>
                </div>
              </div>
            </div>
            <button
              className="add-btn bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:shadow-outline"
              onClick={handleAddItem}
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
