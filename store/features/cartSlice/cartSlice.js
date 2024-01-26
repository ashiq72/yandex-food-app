import { createSlice, current } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = Cookies.get("cart_food")
  ? { ...JSON.parse(Cookies.get("cart_food")), loading: true }
  : {
      loading: true,
      cartItems: [],
      shippingAddress: {},
      paymentMethod: "",
    };

const addDecimals = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x.id === item.id);

      if (existItem) {
        state.cartItems = state.cartItems.map((x) =>
          x.id === item.id ? item : x
        );
      } else {
        state.cartItems = [...state.cartItems, item];
      }
      state.itemsPrice = addDecimals(
        state.cartItems.reduce((acc, item) => acc + item.price, 0)
      );
      Cookies.set("cart_food", JSON.stringify(state));
    },

    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((x) => x.id !== action.payload);
      Cookies.set("cart_food", JSON.stringify(state));
    },

    handleIncrement: (state, action) => {
      const item = action.payload; //_id

      const existItem = state.cartItems.find((x) => x.id === item);
      if (existItem && existItem.qty <= 9) {
        const unitPrice = parseFloat(existItem.orginalPrice);
        existItem.orginalPrice =
          (unitPrice / existItem.qty) * (existItem.qty += 1).toFixed(2);
        Cookies.set("cart_food", JSON.stringify(state));
      }
      state.itemsPrice = addDecimals(
        state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
      );
    },
    handleDecrement: (state, action) => {
      const item = action.payload; //_id

      const existItem = state.cartItems.find((x) => x.id === item);
      if (existItem && existItem.qty >= 2) {
        const unitPrice = parseFloat(existItem.orginalPrice);
        existItem.orginalPrice =
          (unitPrice / existItem.qty) * (existItem.qty -= 1).toFixed(2);
        Cookies.set("cart_food", JSON.stringify(state));
      }
    },
  },
});

export const { addToCart, removeFromCart, handleIncrement, handleDecrement } =
  cartSlice.actions;

export default cartSlice.reducer;
