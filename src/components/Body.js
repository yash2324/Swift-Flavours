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
        <div className=" relative w-[30rem] ml-auto mr-auto text-center flex items-center">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search..."
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500  "
            value={SearchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          <button
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => {
              const data = filterData(SearchText, allRestaurants);
              setFilteredRestaurants(data);
            }}
          >
            Search
          </button>
        </div>

        <div className="ml-auto mr-2 top-rated-btn my-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800 transition duration-300">
          <button
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
      </div>
      <div className="flex flex-wrap ml-10 mb-10 text-center text-pretty justify-center">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              className="w-72 hover:w-[19rem]   p-2 duration-300"
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
