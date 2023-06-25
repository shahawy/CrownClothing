// The reducer that combines the whole reducers

import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import cartReducer from './cartSlice';
import categoriesReducer from './categoriesSlice';

export const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  categories: categoriesReducer
});

export default rootReducer;
