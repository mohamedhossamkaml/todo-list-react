import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:4000/todos';

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const res = await axios.get(API_URL);
  return res.data;
});

export const addTodo = createAsyncThunk('todos/addTodo', async ({ text, category }) => {
  const newTodo = { text, completed: false, category };
  const res = await axios.post(API_URL, newTodo);
  return res.data;
});

export const toggleTodo = createAsyncThunk('todos/toggleTodo', async (todo) => {
  const updated = { ...todo, completed: !todo.completed };
  const res = await axios.put(`${API_URL}/${todo.id}`, updated);
  return res.data;
});

export const deleteTodo = createAsyncThunk('todos/deleteTodo', async (id) => {
  await axios.delete(`${API_URL}/${id}`);
  return response.data;
});
