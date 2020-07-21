export enum ProductsTypes {
  'LOAD_REQUEST' = '@products/LOAD_REQUEST',
  'LOAD_SUCCESS' = '@products/LOAD_SUCCESS',
  'LOAD_FAILURE' = '@products/LOAD_FAILURE',
}

export interface Product {
  id: string;
  name: string;
}

export interface ProductsState {
  readonly data: Product[];
  readonly loading: boolean;
  readonly error: boolean;
}
