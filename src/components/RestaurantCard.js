import { IMG_CDN_URL } from "../constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

// restaurant card - functional component
// passing dynamic data(restaurantList data).
// parameter props here is receiving the data sent by Body Components - RestaurantCard props.
const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
}) => {
  const { user } = useContext(UserContext);
  return (
    // How to precisely provide a css value is with square brackets like below:
    // In network tab, you will find css file which parcel has taken help of postscssrc and written tailwindcss for us.
    // Tailwind only includes the css classes we have written in our project and thus makes css bundle size very small.
    <div className="w-[200px] p-2 m-2 shadow-lg bg-pink-50">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{lastMileTravelString}</h4>
      <h5 className="font-bold">
        {user.name} - {user.email}
      </h5>
    </div>
  );
};

export default RestaurantCard;
