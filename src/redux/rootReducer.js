// The reducer that combines the whole reducers

import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import cartReducer from './cartSlice';

export const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer
});

export default rootReducer;
