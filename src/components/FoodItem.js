import { IMG_CDN_URL } from "../constants";

const FoodItem = ({ name, description, cloudinaryImageId, price }) => {
  return (
    // How to precisely provide a css value is with square brackets like below:
    // In network tab, you will find css file which parcel has taken help of postscssrc and written tailwindcss for us.
    // Tailwind only includes the css classes we have written in our project and thus makes css bundle size very small.
    <div className="w-56 p-2 m-2 shadow-lg bg-pink-50">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt="food-pic" />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>{description}</h3>
      <h4>Rupees: {price / 100}</h4>
    </div>
  );
};

export default FoodItem;
