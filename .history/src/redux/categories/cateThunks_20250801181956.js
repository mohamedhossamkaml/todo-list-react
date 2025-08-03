import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:4000/categories';

export const fetchCategories = createAsyncThunk('categories/fetchCategories', async () => {
  const res = await axios.get('http://localhost:4000/categories');
  return res.data;
});

export const addCategories = createAsyncThunk('categories/addCategories', async ({ text, category }) => {
  const newCategories = { text, completed: false, category };
  const res = await axios.post(API_URL, newCategories);
  return res.data;
});

export const toggleCategories = createAsyncThunk('todos/toggleTodo', async (todo) => {
  const updated = { ...todo, completed: !todo.completed };
  const res = await axios.put(`${API_URL}/${todo.id}`, updated);
  return res.data;
});

export const deleteTodo = createAsyncThunk('todos/deleteTodo', async (id) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
});

export const editTodo = createAsyncThunk('todos/editTodo', async ({ id, text }) => {
  const res = await axios.put(`${API_URL}/${id}`, { text });
  return res.data;
});