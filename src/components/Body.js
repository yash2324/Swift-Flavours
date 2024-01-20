import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurantList from "../../utils/useRestaurantList";
import useOnlineStatus from "../../utils/useOnlineStatus";
function filterData(SearchText, allRestaurants) {
  const filterData = allRestaurants.filter((restaurant) =>
    restaurant.info.name.toLowerCase().includes(SearchText.toLowerCase())
  );
  return filterData;
}

const Body = () => {
  const [SearchText, setSearchText] = useState();
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const allRestaurants = useRestaurantList();
  useEffect(() => {
    setFilteredRestaurants(allRestaurants);
  }, [allRestaurants]);
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <>
        <h1>OOPS!!! Seems you are offline ....</h1>
      </>
    );

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
