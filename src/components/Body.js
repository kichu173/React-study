import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard"
import { useState } from "react";

function filterData(searchText, restaurantsList) {
    return restaurantsList.filter(function(restaurant) {
        return restaurant.data.name.toLowerCase().includes(searchText.toLowerCase());
    })
}

// props - properties (passing some data/properties into my component(functional/ class based)) | ex: <RestaurantCard restaurant={restaurantList[0]} /> here props is restaurant={restaurantList[0]}. This is the way of passing data into component(like function arguments and parameters in JS - we will get data passed here).
// {RestaurantCard(restaurantList[0])} (or) <RestaurantCard restaurant={restaurantList[0]} />
// you can pass multiple props ex: <RestaurantCard restaurant={restaurantList[0]} hello="world" />
const Body = () => {
    // Every component in react maintains a state. You can put in all variables into your state.
    // Every time you have to create a local variable, you use state inside a react.
    // Hook is just a normal JS function. Every hook has specific function for it.
  let searchTxt = 'KFC';
  // useState hook | new way of creating local variables in react. React will keep track of state local variables and re-renders whole component whenever it changes or gets updated(It happens very qickly).
  // searchText is a local state variable.
  const [searchText, setSearchText] = useState("");// to create state variables in react. useState function returns an array and first element in array is variable name, second variable is the set function to update a variable.
  const [restaurants, setRestaurants] = useState(restaurantList);
  
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        
        <button className="search-btn" onClick={() => {
            // need to filter the data when search button is clicked.            
            const data = filterData(searchText, restaurants);
            // update the state - restaurants variable
            setRestaurants(data);
        }}>Search</button>
      </div>
      <div className="restaurant-list">
        {
          // you can run any piece of JS code inside {} - curly braces.
          // * no key (not acceptable)<<<<<<<<<<< index key(last option) <<<<< unique key (best practice).
          // you can use map or forEach to loop, but map is preferred way and good in performance.
          restaurants.map((restaurant) => {
            return (
              <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
            );
          })
        }
      </div>
    </>
  );
};

export default Body;
