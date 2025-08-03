import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../redux/todos';
import cateReducer from '../redux/categories';

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    categories: cateReducer,
  },
});
