import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCampers } from '../lib/api.js';

export const fetchCatalog = createAsyncThunk('catalog/fetchCatalog', async (_, { rejectWithValue }) => {
  try {
    return await getCampers();
  } catch (error) {
    console.error('Error fetching catalog:', error);
    return rejectWithValue('Something went wrong');
  }
});
