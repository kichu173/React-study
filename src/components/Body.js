import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard"
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

function filterData(searchText, restaurantsList) {
    return restaurantsList.filter(function(restaurant) {
        return restaurant?.data?.name?.toLowerCase().includes(searchText.toLowerCase());
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
  // useState hook | new way of creating local variables in react. React will keep track of state local variables and re-renders whole component whenever local state variable changes or gets updated(It happens very quickly).
  // searchText is a local state variable.
  const [searchText, setSearchText] = useState("");// to create state variables in react. useState("takes initial value to put into variable") function returns an array and first element in array is variable name, second variable is the set function to update a variable.
  const [filteredrestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);

  // useEffect hook takes a callback function. Whenever component re renders(local state variable/Props changes and initial render or first load), then useEffect hook is called after each render with whatever we pass into callback function.
  // second argument to useEffect is dependency array, provide empty dependency array if you dont want to call after every re render of component. This hook will be called after only once on page initial load/render.
  // Suppose I want to call useEffect hook only when searchText local state variable changes, I will provide searchText into dependency array(ex: [searchText]). once after initial render + everytime after render (my searchText changes).
  // Best place to make an api call.
  useEffect(function() {
    // API call
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING');
    const json = await data.json();
    console.log('swiggy api:>',json);
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  // ? Conditional Rendering
  // If restaurant is empty => Shimmer UI
  // If restaurant has data => actual data UI

  // not render component - early return.
  if(!allRestaurants) return null;

  if(filteredrestaurants?.length === 0) return <h1>No Restaurant match your Filter!</h1>;

  return (allRestaurants?.length === 0) ? <Shimmer /> : (
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
            const data = filterData(searchText, allRestaurants);
            // update the state - restaurants variable
            setFilteredRestaurants(data);
        }}>Search</button>
      </div>
      <div className="restaurant-list">
        {
          // you can run any piece of JS code inside {} - curly braces.
          // * no key (not acceptable)<<<<<<<<<<< index key(last option) <<<<< unique key (best practice).
          // you can use map or forEach to loop, but map is preferred way and good in performance.
          filteredrestaurants.map((restaurant) => {
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
