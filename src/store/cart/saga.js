import { toast } from 'react-toastify';
import { put, takeLeading, call } from 'redux-saga/effects';

import cartAPI from 'apis/cart/cartAPI';

import {
  ADD_TO_CART,
  GET_CART,
  EMPTY_CART,
  UPDATE_CART,
} from './actionTypes';

import {
  actionGetCartSuccess,
  actionGetCartFailed,
  actionAddToCartSuccess,
  actionAddToCartFailed,
  actionEmptyCartSuccess,
  actionEmptyCartFailed,
  actionUpdateCartSuccess,
  actionUpdateCartFailed,
} from './actions';

function* getCart() {
  try {
    const response = yield call(cartAPI.getCart);

    yield put(actionGetCartSuccess(response.data.products));
  } catch (error) {
    yield put(actionGetCartFailed());
  }
}

function* addToCart({ payload }) {
  try {
    const response = yield call(cartAPI.addToCart, payload);

    yield put(actionAddToCartSuccess(response.data.products));

    toast.success(response.status);
  } catch (error) {
    toast.error(error.message);

    yield put(actionAddToCartFailed());
  }
}

function* emptyCart() {
  try {
    const response = yield call(cartAPI.emptyCart);

    yield put(actionEmptyCartSuccess());

    toast.success(response.status);
  } catch (error) {
    toast.error(error.message);

    yield put(actionEmptyCartFailed());
  }
}

function* updateCart({ payload }) {
  try {
    const response = yield call(cartAPI.updateCart, payload);

    yield put(actionUpdateCartSuccess(response.data.products));
  } catch (error) {
    yield put(actionUpdateCartFailed());
  }
}

export default function* cartSaga() {
  yield takeLeading(GET_CART, getCart);
  yield takeLeading(ADD_TO_CART, addToCart);
  yield takeLeading(EMPTY_CART, emptyCart);
  yield takeLeading(UPDATE_CART, updateCart);
}
