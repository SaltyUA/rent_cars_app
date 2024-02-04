import { createSlice } from '@reduxjs/toolkit';
import initialState from './initialState';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState,
  reducers: {
    filterSet(state, { payload }) {
      state.filter = payload;
    },
    filterDelete(state) {
      state.filter = null;
    },
    filterCarsSet(state, { payload }) {
      state.filterCars = payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { filterSet, filterCarsSet, filterDelete } = filterSlice.actions;
