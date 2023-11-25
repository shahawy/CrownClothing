import { createSlice } from "@reduxjs/toolkit";

import { toast, Toaster } from "react-hot-toast";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: [],
    cartTotalPrice: 0,
    isCartOpen: false,
  },
  reducers: {
    addPresentItemsToCart: (state, action) => {
      const productData = action.payload;
      state.value = state.value.map((product) => {
        return product.id === productData.id
          ? { ...product, quantity: product.quantity + 1 }
          : product;
      });
    },

    addNewItemsToCart: (state, action) => {
      const productData = action.payload;
      state.value = [...state.value, { ...productData, quantity: 1 }];
    },

    clearItemsFromCart: (state, action) => {
      toast.success(action.payload.name + " removed from cart")
      const productData = action.payload;
      state.value = state.value.filter((cartItem) => {
        return cartItem.id !== productData.id;
      });
    },

    removeItemsFromCart: (state, action) => {
      const productData = action.payload;
      state.value = state.value.map((cartItem) => {
        return cartItem.id === productData.id
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem;
      });
    },

    clearTheWholeCart: (state) => {      
      state.value = []
    },

    toggleCartDropdown: (state) => {
      state.isCartOpen = !state.isCartOpen
    },

    setCartTotalPrice: (state, action) => {
      state.cartTotalPrice = action.payload
    }
  },
});

export const {
  addPresentItemsToCart,
  addNewItemsToCart,
  clearItemsFromCart,
  removeItemsFromCart,
  clearTheWholeCart,
  toggleCartDropdown,
  setCartTotalPrice
} = cartSlice.actions;

export default cartSlice.reducer;
