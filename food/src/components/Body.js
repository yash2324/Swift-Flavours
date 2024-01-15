import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

function filterData(SearchText, allRestaurants) {
  const filterData = allRestaurants.filter((restaurant) =>
    restaurant.info.name.toLowerCase().includes(SearchText.toLowerCase())
  );
  return filterData;
}

const Body = () => {
  const [SearchText, setSearchText] = useState();
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  useEffect(() => {
    getRestaurants();
  }, []);
  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    async function checkJsonData(jsonData) {
      for (let i = 0; i < jsonData?.data?.cards.length; i++) {
        // initialize checkData for Swiggy Restaurant data
        let checkData =
          json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants;

        // if checkData is not undefined then return it
        if (checkData !== undefined) {
          return checkData;
        }
      }
    }
    const resData = await checkJsonData(json);

    // update the state variable restaurants with Swiggy API data
    setAllRestaurants(resData);
    setFilteredRestaurants(resData);
  }
  if (!allRestaurants) return null;

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-bar">
        <input
          type="text"
          placeholder="ABC"
          className="search-input"
          value={SearchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(SearchText, allRestaurants);

            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            const topRestaurantData = filteredRestaurants.filter(
              (res) => res?.info?.avgRating > 4.5
            );
            setFilteredRestaurants(topRestaurantData);
          }}
        >
          Top Rated restaurant
        </button>
      </div>
      <div className="restaurant-list">
        {filteredRestaurants.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant?.info?.id} {...restaurant?.info} />
          );
        })}
      </div>
    </>
  );
};
export default Body;
