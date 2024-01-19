import { useParams } from "react-router-dom";
import Shimmer_menu from "./Shimmer_menu";
import { IMG_CDN_URL } from "../../utils/constants";
import useRestaurantData from "../../utils/useRestaurantData";
import useMenuItems from "../../utils/useMenuItems";
const RestaurantMenu = () => {
  const { resid } = useParams();
  const restaurant = useRestaurantData(resid);
  const menuItems = useMenuItems(resid);
  if (restaurant === null) return <Shimmer_menu />;

  return (
    <>
      <h2>This is the menu</h2>
      <h1>{restaurant?.name}</h1>
      <img
        className="restaurant-img"
        src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
        alt={restaurant?.name}
      />
      <h2>{restaurant?.costForTwoMessage}</h2>
      <h2>{restaurant?.avgRating}</h2>
      <p>{restaurant?.cuisines.join(" , ")}</p>
      <h2>Menu</h2>
      <div className="menu-items-list">
        {menuItems.map((item) => (
          <div className="menu-item" key={item?.id}>
            <div className="menu-item-details">
              <h3 className="item-title">{item?.name}</h3>
              <p className="item-cost">
                {item?.price > 0
                  ? new Intl.NumberFormat("en-IN", {
                      style: "currency",
                      currency: "INR",
                    }).format(item?.price / 100)
                  : " "}
              </p>
              <p className="item-desc">{item?.description}</p>
            </div>
            <div className="menu-img-wrapper">
              <button className="add-btn"> ADD +</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default RestaurantMenu;
