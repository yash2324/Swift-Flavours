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
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt="image" />
      <h3>{name}</h3>
      <h4>{cuisines.join(" , ")}</h4>
      <h4>{lastMileTravelString}</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime}</h4>
      <h4>{avgRating} Stars</h4>
    </div>
  );
};
export default RestaurantCard;