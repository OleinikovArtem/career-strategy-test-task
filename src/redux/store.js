import { configureStore } from '@reduxjs/toolkit';
import catalogReducer from './catalog';

export const store = configureStore({
  reducer: {
    catalog: catalogReducer,
  },
});
