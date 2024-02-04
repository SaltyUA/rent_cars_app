import { createSlice } from '@reduxjs/toolkit';
import initialState from './initialState';

export const favoriteSlice = createSlice({
  name: 'favorites',
  initialState: initialState,
  reducers: {
    addFavoriteCar(state, { payload }) {
      state.favorites.push(payload);
    },
    deleteFavoriteCar(state, { payload }) {
      const index = state.favorites.findIndex((car) => car.id === payload);
      state.favorites.splice(index, 1);
    },
  },
});

export const { addFavoriteCar, deleteFavoriteCar } = favoriteSlice.actions;
export const favoriteReducer = favoriteSlice.reducer;
