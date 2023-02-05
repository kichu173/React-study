import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  // how to read a dynamic URL params
  const params = useParams();
  //   console.log("params:>", params); // localhost:1234/restaurant/123 we can extract id -> 1234 using useParams.
  const { id } = params;

  // CUSTOM HOOK
  const restaurant = useRestaurant(id);

  const dispatch = useDispatch();

  const handleAddItem = () => {
    // dispatch an action(addItem - coming from utils/cartSlice) and pass the payload.
    dispatch(addItem("Grapes"));
  };

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="flex">
      <div>
        <h1>Restaurant id: {id}</h1>
        <h2>Restaurant name: {restaurant?.name}</h2>
        <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
        <h3>{restaurant?.area}</h3>
        <h3>{restaurant?.city}</h3>
        <h3>{restaurant?.avgRating} stars</h3>
        <h3>{restaurant?.costForTwoMsg}</h3>
      </div>
      {/* <div>
        <button className="p-2 m-5 bg-green-200" onClick={handleAddItem}>
          Add Item
        </button>
      </div> */}
      <div className="p-5">
        <h1 className="font-bold">Menu</h1>
        <ul>
          {Object.values(restaurant?.menu?.items).map((item) => (
            <li key={item.id}>
              {item.name} -{" "}
              <button
                className="p-1 m-1 bg-green-100"
                onClick={() => addFoodItem(item)}
              >
                Add
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
