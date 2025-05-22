import { createSlice } from '@reduxjs/toolkit';
import { FILTER_KEYS } from '../consts';

import { getCampers } from '../lib/api';
import { getFavorites, getFiltersFromUrl } from '../lib/product';

const initialFilters = getFiltersFromUrl([FILTER_KEYS.equipment, FILTER_KEYS.type, FILTER_KEYS.location]);

const initialState = {
  isLoading: false,
  error: null,
  list: [],
  favorites: getFavorites(),
  filters: initialFilters,
  activeFilter: initialFilters,
};

const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    setFilter(state, action) {
      const { key, value } = action.payload;
      state.filters[key] = value;
    },
    applyFilters(state) {
      state.activeFilter = state.filters;
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    setList: (state, action) => {
      state.list = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setFilter, applyFilters, setIsLoading, setError, setList } = catalogSlice.actions;
export default catalogSlice.reducer;

export const fetchCatalog = () => async (dispatch) => {
  try {
    dispatch(setIsLoading(true));
    const data = await getCampers();
    dispatch(setList(data.items));
  } catch (error) {
    console.error('Error fetching catalog:', error);
    dispatch(setError('Semething went wrong'));
  } finally {
    dispatch(setIsLoading(false));
  }
};
