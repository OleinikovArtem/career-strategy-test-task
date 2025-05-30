import { createSlice } from '@reduxjs/toolkit';
import { FILTER_KEYS } from '../consts';

import { getFiltersFromUrl } from '../lib/product';

const initialFilters = getFiltersFromUrl([FILTER_KEYS.equipment, FILTER_KEYS.type, FILTER_KEYS.location]);

const initialState = {
  filters: initialFilters,
  activeFilter: initialFilters,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter(state, action) {
      const { key, value } = action.payload;
      state.filters[key] = value;
    },
    applyFilters(state) {
      state.activeFilter = state.filters;
    },
  },
});

export const { setFilter, applyFilters } = filterSlice.actions;
export default filterSlice.reducer;

