import { createSlice } from '@reduxjs/toolkit';
import { addCategories, deleteCategories, editCategories, fetchCategories } from './cateThunks';

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
      .addCase(fetchCategories.fulfilled, (state, action) => {
        const isSame =
          JSON.stringify(state.categories) === JSON.stringify(action.payload);

        if (!isSame) {
          state.categories = action.payload;
        }
      })
      .addCase(addCategories.fulfilled, (state, action) => {
        state.categories.push(action.payload);
      })
      .addCase(addCategories.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(addCategories.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(toggleCategories.fulfilled, (state, action) => {
        const index = state.categories.findIndex((t) => t.id === action.payload.id);
        if (index !== -1) state.categories[index] = action.payload;
      })
      .addCase(deleteCategories.fulfilled, (state, action) => {
        state.categories = state.categories.filter((categories) => categories.id !== action.payload);
      })
      .addCase(editCategories.fulfilled, (state, action) => {
        const index = state.categories.findIndex((t) => t.id === action.payload.id);
        if (index !== -1) state.categories[index] = action.payload;
      });
  },
});

export const { resetCategories } = categoriesSlice.actions;
export default categoriesSlice.reducer;
