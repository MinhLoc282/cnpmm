import { put, takeLeading, call } from 'redux-saga/effects';

import wishlistAPI from 'apis/wishlist/wishlistAPI';

import {
  GET_USER_WISHLIST,
  UPDATE_USER_WISHLIST,
} from './actionTypes';
import {
  actionGetUserWishlistSuccess,
  actionGetUserWishlistFailed,
  actionUpdateUserWishlistSuccess,
  actionUpdateUserWishlistFailed,
} from './actions';

function* getUserWishlist() {
  try {
    const response = yield call(wishlistAPI.getUserWishlist);
    yield put(actionGetUserWishlistSuccess(response.data));
  } catch (error) {
    yield put(actionGetUserWishlistFailed());
  }
}

function* updateUserWishlist({ payload }) {
  try {
    const response = yield call(wishlistAPI.updateUserWishlist, payload);
    yield put(actionUpdateUserWishlistSuccess(response.data));
  } catch (error) {
    yield put(actionUpdateUserWishlistFailed());
  }
}

export default function* wishlistSaga() {
  yield takeLeading(GET_USER_WISHLIST, getUserWishlist);
  yield takeLeading(UPDATE_USER_WISHLIST, updateUserWishlist);
}
