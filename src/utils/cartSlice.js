import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    // initial value of cart slice
    items: [],
  },
  reducers: {
    // addItem is an action, reducers will contains mapping of actions and reducer function.
    // params state is initialState and action is an data payload(dispatch action) which contains items to be added in cart.
    // ! never return from the reducer function. yes, we can have multiple actions and reducers.
    addItem: (state, action) => {
      // logic to modify/update the slice of store.
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

// This is how you will export it up(reducer)
export default cartSlice.reducer;
