import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:4000/categories';


export const fetchCategories = createAsyncThunk('categories/fetchCategories', async () => {
  const res = await axios.get(API_URL);
  return res.data;
});


export const addCategory = createAsyncThunk('categories/addCategory', async ({ id, label, color }) => {
  const newCategory = { id, label, color };
  const res = await axios.post(API_URL, newCategory);
  return res.data;
});


export const editCategory = createAsyncThunk('categories/editCategory', async ({ id, label, color }) => {
  const updated = { label, color };
  const res = await axios.put(`${API_URL}/${id}`, updated);
  return res.data;
});


export const deleteCategory = createAsyncThunk('categories/deleteCategory', async (id) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
});
