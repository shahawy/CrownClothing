// categories slice using thunk middleware

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCategoriesAndDocuments } from "../utilities/folder/Firebase";

export const fetchCategoriesData = createAsyncThunk('categories/fetchData', async () => {
    const response = await getCategoriesAndDocuments('categories');
    return response;
  });

  const categoriesSlice = createSlice({
    name: 'categories',
    initialState: { 
      items: [],
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