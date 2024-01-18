import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { API_URL, API_URL_2, API_URL_NEW } from "../../utils/constants";
import { Link } from "react-router-dom";
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
    // handle the error using try... catch
    try {
      const response = await fetch(API_URL_2);
      const json = await response.json();

      // initialize checkJsonData() function to check Swiggy Restaurant data
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

      // call the checkJsonData() function which return Swiggy Restaurant data
      const resData = await checkJsonData(json);

      // update the state variable restaurants with Swiggy API data
      setAllRestaurants(resData);
      setFilteredRestaurants(resData);
    } catch (error) {
      console.log(error);
    }
  }
  if (!allRestaurants) return null;

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="filter-data">
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
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const topRestaurantData = filteredRestaurants.filter(
              (res) => res?.info?.avgRating > 4
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
            <Link
              key={restaurant?.info?.id}
              to={"/restaurants/" + restaurant?.info?.id}
            >
              <RestaurantCard {...restaurant?.info} />
            </Link>
          );
        })}
      </div>
    </>
  );
};
export default Body;
