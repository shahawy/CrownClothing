import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: [],
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
    }
  },
});

export const {
  addPresentItemsToCart,
  addNewItemsToCart,
  clearItemsFromCart,
  removeItemsFromCart,
  clearTheWholeCart
} = cartSlice.actions;

export default cartSlice.reducer;
