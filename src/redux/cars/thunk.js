import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllCars, getCars } from '../../api/carsAPI';

export const getAllCarsThunk = createAsyncThunk(
  'cars/getCars',
  async (_, thunkAPI) => {
    try {
      const response = getCars();
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getCarsThunk = createAsyncThunk(
  'cars/getAllCars',
  async (page, thunkAPI) => {
    try {
      const response = await getAllCars(page);
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
