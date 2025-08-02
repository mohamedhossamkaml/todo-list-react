import { createSlice } from '@reduxjs/toolkit';
import { fetchCategories, addCategory, editCategory, deleteCategory } from './cateThunks';

const initialState = {
  categories: [],
  status: 'idle',
  error: null,
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    resetCategories: (state) => {
      state.categories = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = 'loading';
      })
      // addCase(fetchCategories.fulfilled, (state, action) => {
      //   state.list = action.payload;
      //   state.status = "succeeded";
      // })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.list = action.payload;
        state.status = 'idle';
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addCategory.fulfilled, (state, action) => {
        state.categories.push(action.payload);
      })
      .addCase(editCategory.fulfilled, (state, action) => {
        const index = state.categories.findIndex((c) => c.id === action.payload.id);
        if (index !== -1) state.categories[index] = action.payload;
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.categories = state.categories.filter((c) => c.id !== action.payload);
      });
  },
});

export const { resetCategories } = categoriesSlice.actions;
export default categoriesSlice.reducer;
