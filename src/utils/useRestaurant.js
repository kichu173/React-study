// To fetch the details of restaurant menu.

import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../constants";

const useRestaurant = (id) => {
  // create and maintain a state just for this hook. It has it's own reconsiliation going on.
  // Whenever state variable is updated, it will update the component which is loading the hook.
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(FETCH_MENU_URL + id);
    const json = await data.json();
    console.log(json.data);
    setRestaurant(json.data);
  }

  return restaurant;
};

export default useRestaurant;
