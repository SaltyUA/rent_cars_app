import { createSlice } from '@reduxjs/toolkit';
import initialState from './initialState';

export const modalSlice = createSlice({
  name: 'modal',
  initialState: initialState,
  reducers: {
    setIsShowModal(state, { payload }) {
      state.isShowModal = payload;
    },
    deleteModalCar(state) {
      state.carInModal = null;
    },
    setModalCar(state, { payload }) {
      state.carInModal = payload;
    },
  },
});

export const modalReducer = modalSlice.reducer;
export const { setIsShowModal, deleteModalCar, setModalCar } =
  modalSlice.actions;
