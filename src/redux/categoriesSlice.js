// categories slice using thunk middleware

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCategoriesAndDocuments } from "../utilities/firebase/firebase";

export const fetchCategoriesData = createAsyncThunk('categories/fetchData', async () => {  // The first argument is the type (anything doesn't matter), the second argument is the callback function used to handle the asynchronus operation
    const response = await getCategoriesAndDocuments('categories');
    return response;
  });

  const categoriesSlice = createSlice({
    name: 'categories',
    initialState: { 
      items: {},
      status: 'idle',
      error: null,
    },
    reducers: {},
    extraReducers: builder => {
      builder
        .addCase(fetchCategoriesData.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(fetchCategoriesData.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.items = action.payload;
        })
        .addCase(fetchCategoriesData.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        });
    }
  });

  export default categoriesSlice.reducer;