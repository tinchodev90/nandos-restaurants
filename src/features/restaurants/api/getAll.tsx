import axiosInstance from '~/library/api/axiosInstance';
import { RESTAURANTS_ENDPOINT } from '~/library/api/config';
import type { Restaurant } from '~/types';

export type RestaurantsListResponse = {
  data: {
    restaurant: {
      items: Restaurant[];
    };
  };
};

export const getAllRestaurants = async () =>
  axiosInstance.get<RestaurantsListResponse>(RESTAURANTS_ENDPOINT);
