import { useEffect, useState } from "react";
import { RESTAURANT_TYPE_KEY, swiggy_menu_api_URL } from "./constants";

// Custom hook for fetching restaurant data
const useRestaurantData = (resid) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    fetchRestaurantData();
  }, [resid]);
  async function fetchRestaurantData() {
    try {
      const response = await fetch(swiggy_menu_api_URL + resid);
      const json = await response.json();

      const restaurantData =
        json?.data?.cards
          ?.map((x) => x.card)
          ?.find((x) => x && x.card["@type"] === RESTAURANT_TYPE_KEY)?.card
          ?.info || null;
      setRestaurant(restaurantData);
    } catch (error) {
      setRestaurant(null);
      console.log(error);
    }
  }

  return restaurant;
};
export default useRestaurantData;
