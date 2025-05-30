import { configureStore } from '@reduxjs/toolkit';
import catalogReducer from './catalog';
import filterReducer from './filter';

export const store = configureStore({
  reducer: {
    catalog: catalogReducer,
    filter: filterReducer,
  },
});
