import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
const API_URL = 'http://localhost:4000/todos';


export const todoSlice = createSlice({
  name: 'todoSlice',
  initialState: [],
  reducers: {
    increment: (state) => {
      const fetchTodos
    },

  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default todoSlice.reducer