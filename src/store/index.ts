import { configureStore } from '@reduxjs/toolkit';
import toasterSlice from './slices/toasterSlice';

const store = configureStore({
  reducer: {
    toaster: toasterSlice
  }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
