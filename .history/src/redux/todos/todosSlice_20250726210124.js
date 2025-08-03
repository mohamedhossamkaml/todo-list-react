import { createSlice } from '@reduxjs/toolkit';
import { fetchTodos, addTodo, toggleTodo, deleteTodo } from './todosThunks';

const initialState = {
  todos: [],
  status: 'idle',
  error: null,
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    resetTodos: (state) => {
      state.todos = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.todos = action.payload;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.todos.push(action.payload);
      })
      .addCase(addTodo.pending, (state, action) => {
        state.status = '';
      })
      .addCase(toggleTodo.fulfilled, (state, action) => {
        const index = state.todos.findIndex((t) => t.id === action.payload.id);
        if (index !== -1) state.todos[index] = action.payload;
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      });
  },
});

export const { resetTodos } = todosSlice.actions;
export default todosSlice.reducer;
