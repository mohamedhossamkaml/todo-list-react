import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:4000/todos';

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

export const addTodo = createAsyncThunk('todos/addTodo', async (text) => {
  const newTodo = { text, completed: false };
  const response = await axios.post(API_URL, newTodo);
  return response.data;
});

export const deleteTodo = createAsyncThunk('todos/deleteTodo', async (id) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
});

export const toggleTodo = createAsyncThunk('todos/toggleTodo', async (todo) => {
  const updatedTodo = { ...todo, completed: !todo.completed };
  const response = await axios.put(`${API_URL}/${todo.id}`, updatedTodo);
  return response.data;
});

const todoSlice = createSlice({
  name: 'todos',
  initialState: { todos: [], status: 'idle' },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.todos = action.payload;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.todos.push(action.payload);
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      })
      .addCase(toggleTodo.fulfilled, (state, action) => {
        const index = state.todos.findIndex((t) => t.id === action.payload.id);
        if (index !== -1) state.todos[index] = action.payload;
      });
  },
});

export default todoSlice.reducer;
