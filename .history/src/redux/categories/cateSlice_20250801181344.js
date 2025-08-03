import { createSlice } from '@reduxjs/toolkit';
import { } from './cateThunks';

const initialState = {
  categories: [],
  status: 'idle',
  error: null,
};

const todosSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    resetTodos: (state) => {
      state.categories = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.fulfilled, (state, action) => {
        const isSame =
          JSON.stringify(state.todos) === JSON.stringify(action.payload);

        if (!isSame) {
          state.todos = action.payload;
        }
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.todos.push(action.payload);
      })
      .addCase(addTodo.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(addTodo.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(toggleTodo.fulfilled, (state, action) => {
        const index = state.todos.findIndex((t) => t.id === action.payload.id);
        if (index !== -1) state.todos[index] = action.payload;
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      })
      .addCase(editTodo.fulfilled, (state, action) => {
        const index = state.todos.findIndex((t) => t.id === action.payload.id);
        if (index !== -1) state.todos[index] = action.payload;
      });
  },
});

export const { resetTodos } = todosSlice.actions;
export default todosSlice.reducer;
