import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import { favoriteReducer } from './favorite/slice';
import { configureStore } from '@reduxjs/toolkit';
import { carsReducer } from './cars/slice';
import { filterReducer } from './filter/slice';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { modalReducer } from './modal/slice';

const persistConfig = {
  key: 'favoriteCars',
  storage,
  whitelist: ['favorites'],
};

export const favoriteCarsPersistReducer = persistReducer(
  persistConfig,
  favoriteReducer
);

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    favorites: favoriteCarsPersistReducer,
    filter: filterReducer,
    modal: modalReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
