export const selectCars = (state) => state.cars.cars;
export const selectAllCars = (state) => state.cars.allCars;
export const selectCarBrands = (state) => state.cars.carsBrands;
export const selectIsLoading = (state) => state.cars.isLoading;
export const selectError = (state) => state.cars.error;

export const selectFavoriteCars = (state) => state.favorites.favorites;

export const selectFilter = (state) => state.filter.filter;
export const selectFilterCars = (state) => state.filter.filterCars;

export const selectIsShowModal = (state) => state.modal.isShowModal;
export const selectModalCar = (state) => state.modal.carInModal;
