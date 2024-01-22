import { IMG_CDN_URL } from "../../utils/constants";
const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  lastMileTravelString,
  avgRating,
  costForTwo,
  deliveryTime,
}) => {
  return (
    <div className="m-2 border-2 p-1 flex flex-col h-full rounded-md shadow-md hover:shadow-2xl text-slate-800  ">
      <img
        className="rounded-md h-60 duration-300"
        src={IMG_CDN_URL + cloudinaryImageId}
        alt="image"
      />
      <h3 className="font-bold text-black">{name}</h3>
      <h4>{cuisines.join(" , ")}</h4>
      <h4>{lastMileTravelString}</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime}</h4>
      <h4>{avgRating} Stars</h4>
    </div>
  );
};
export default RestaurantCard;
