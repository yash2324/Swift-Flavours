import { useEffect, useState } from "react";
import { API_MENU, API_URL } from "../constants";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resid } = useParams();
  console.log(resid);
  useEffect(() => {
    getMenu();
  }, []);

  async function getMenu() {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.4089123&lng=77.3177894&restaurantId=" +
          resid
      );
      const json = await data.json();
      setResInfo(json.data);
      console.log(json);
    } catch (error) {
      console.log(error);
    }
  }
  if (resInfo === null) return <Shimmer />;

  const { name, costForTwoMessage, avgRating, cuisines } =
    resInfo?.cards[0]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card.card;

  return (
    <>
      <h2>This is the menu</h2>
      <h1>{name}</h1>
      <h2>{costForTwoMessage}</h2>
      <h2>{avgRating}</h2>
      <p>{cuisines.join(" , ")}</p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name}-{item?.card?.info?.price / 100}{" "}
          </li>
        ))}
      </ul>
    </>
  );
};
export default RestaurantMenu;
