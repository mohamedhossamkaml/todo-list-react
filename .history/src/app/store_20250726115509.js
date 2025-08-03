import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../redux/todos';

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});
