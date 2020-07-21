import { put } from 'redux-saga/effects';
import { loadSuccess, loadFailure } from './actions';

export function* loadProducts() {
  try {
    // TODO: Fetch products
    yield put(loadSuccess([]));
  } catch (error) {
    yield put(loadFailure());
  }
}
