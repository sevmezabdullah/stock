import { configureStore } from '@reduxjs/toolkit';
import stock from '../redux/stock';

export const store = configureStore({
  reducer: {
    stock: stock,
  },
});
