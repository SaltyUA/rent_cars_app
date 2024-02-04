import axios from 'axios';

axios.defaults.baseURL = 'https://65290ec055b137ddc83e236c.mockapi.io';

export const perPage = 12;

export const getCars = async () => {
  const { data } = await axios('/adverts');
  return data;
};

export const getAllCars = async (page) => {
  const { data } = await axios.get(`/adverts?page=${page}&limit=${perPage}`);
  return data;
};
