import { createSlice } from '@reduxjs/toolkit';

import { getFavorites } from '../lib/product';
import { fetchCatalog } from './catalogOps.js';


const initialState = {
  isLoading: false,
  error: null,
  list: [],
  total: 0,
  favorites: getFavorites(),
};

const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCatalog.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCatalog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.list = action.payload.items;
        state.total = action.payload.total;
      })
      .addCase(fetchCatalog.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  }
});

export default catalogSlice.reducer;
