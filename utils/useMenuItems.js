import { useEffect, useState } from "react";
import { MENU_ITEM_TYPE_KEY, swiggy_menu_api_URL } from "./constants";

const useMenuItems = (resid) => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetchMenuItems();
  }, [resid]);
  async function fetchMenuItems() {
    try {
      const response = await fetch(swiggy_menu_api_URL + resid);
      const json = await response.json();

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
      console.log(error);
    }
  }

  return menuItems;
};
export default useMenuItems;
