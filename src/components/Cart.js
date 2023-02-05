import { useSelector, useDispatch } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  // !Most asked Interview que: useSelector hook takes a function and This is the place we tell what we(our component) are subscribing to. may cause performance issue if we give useSelector((store) => store)
  // subscribe to specific portion of your app.
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <h1 className="font-bold text-3xl">Cart Items - {cartItems.length}</h1>
      <button className="bg-green-100 p-2 m-5" onClick={handleClearCart}>
        Clear Cart
      </button>
      <div className="flex">
        {cartItems.map((item) => (
          <FoodItem {...item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
