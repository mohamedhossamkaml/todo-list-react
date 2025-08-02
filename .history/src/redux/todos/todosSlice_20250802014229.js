import { createSlice } from '@reduxjs/toolkit';
import { fetchTodos, addTodo, toggleTodo, deleteTodo, editTodo } from './todosThunks';

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
    toggleUrgent: (state, action) => {
      const todo = state.todos.find(t => t.id === action.payload);
      if (todo) {
        todo.urgent = !todo.urgent;
      }
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

export const { resetTodos, toggleUrgent } = todosSlice.actions;
export default todosSlice.reducer;
