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
      <div className="my-4 flex flex-col items-center justify-between">
        <div className="ml-auto mr-auto text-center">
          <input
            type="text"
            placeholder="ABC"
            className="px-4 py-2 w-80 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition duration-300"
            value={SearchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          <button
            className=" bg-blue-500 text-white px-4 py-2 ml-2 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800 transition duration-300"
            onClick={() => {
              const data = filterData(SearchText, allRestaurants);

              setFilteredRestaurants(data);
            }}
          >
            Search
          </button>
        </div>
        <div className="top-rated-btn my-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-green-700 focus:outline-none focus:shadow-outline-green active:bg-blue-700 transition duration-300">
          <button
            onCick={() => {
              const topRestaurantData = filteredRestaurants.filter(
                (res) => res?.info?.avgRating > 4
              );
              setFilteredRestaurants(topRestaurantData);
            }}
          >
            Top Rated restaurant
          </button>
        </div>
      </div>
      <div className="flex flex-wrap ml-10 justify-center">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              className="w-72 hover:w-80  p-2 duration-300"
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
