import { useEffect, useState } from "react";
import {
  API_MENU,
  API_URL,
  MENU_ITEM_TYPE_KEY,
  RESTAURANT_TYPE_KEY,
  swiggy_menu_api_URL,
} from "../constants";
import { useParams } from "react-router-dom";
import Shimmer_menu from "./Shimmer_menu";
import { IMG_CDN_URL } from "../constants";
const RestaurantMenu = () => {
  const [restaurant, setRestaurant] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  const { resid } = useParams();
  // console.log(resid);
  useEffect(() => {
    getMenu();
  }, []);

  async function getMenu() {
    try {
      const response = await fetch(swiggy_menu_api_URL + resid);
      const json = await response.json();

      // Set restaurant data
      const restaurantData =
        json?.data?.cards
          ?.map((x) => x.card)
          ?.find((x) => x && x.card["@type"] === RESTAURANT_TYPE_KEY)?.card
          ?.info || null;
      setRestaurant(restaurantData);

      // Set menu item data
      const menuItemsData =
        json?.data?.cards
          .find((x) => x.groupedCard)
          ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map((x) => x.card?.card)
          ?.filter((x) => x["@type"] == MENU_ITEM_TYPE_KEY)
          ?.map((x) => x.itemCards)
          .flat()
          .map((x) => x.card?.info) || [];

      const uniqueMenuItems = [];
      menuItemsData.forEach((item) => {
        if (!uniqueMenuItems.find((x) => x.id === item.id)) {
          uniqueMenuItems.push(item);
        }
      });
      setMenuItems(uniqueMenuItems);
    } catch (error) {
      setMenuItems([]);
      setRestaurant(null);
      console.log(error);
    }
  }
  if (restaurant === null) return <Shimmer_menu />;

  // const { name, costForTwoMessage, avgRating, cuisines } =
  //   resInfo?.cards[0]?.card?.card?.info;
  // const { itemCards } =
  //   resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card.card;

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
