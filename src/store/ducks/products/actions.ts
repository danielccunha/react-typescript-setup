import { action } from 'typesafe-actions';
import { ProductsTypes, Product } from './types';

export const loadRequest = () => {
  return action(ProductsTypes.LOAD_REQUEST);
};

export const loadSuccess = (products: Product[]) => {
  return action(ProductsTypes.LOAD_SUCCESS, products);
};

export const loadFailure = () => {
  return action(ProductsTypes.LOAD_FAILURE);
};
