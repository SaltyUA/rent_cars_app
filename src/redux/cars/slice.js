import { createSlice } from '@reduxjs/toolkit';
import initialState from './initialState';
import { handleFulfilled, handlePending, handleRejected } from '../helpers';
import { createBrandsObject } from '../../utils/createBrandsObject';
import { getAllCarsThunk, getCarsThunk } from './thunk';

const carsSlice = createSlice({
  name: 'cars',
  initialState: initialState,
  reducers: {
    resetCars(state) {
      state.cars = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllCarsThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.allCars = payload;
        state.carsBrands = createBrandsObject(payload);
        state.error = null;
      })
      .addCase(getCarsThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.cars = [...state.cars, ...payload];
        state.error = null;
      })
      .addMatcher((action) => action.type.endsWith('/pending'), handlePending)
      .addMatcher((action) => action.type.endsWith('/rejected'), handleRejected)
      .addMatcher(
        (action) => action.type.endsWith('/fulfilled'),
        handleFulfilled
      );
  },
});

export const carsReducer = carsSlice.reducer;
export const { resetCars } = carsSlice.actions;
