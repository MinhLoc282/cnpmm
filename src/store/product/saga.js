import { toast } from 'react-toastify';
import { put, takeLeading, call } from 'redux-saga/effects';

import productAPI from 'apis/product/productAPI';

import {
  GET_ALL_PRODUCT, GET_PRODUCT_DETAIL, GET_PRODUCT_CATEGORY, GET_PRODUCT_ROOM,
} from './actionTypes';

import {
  actionGetAllProductSuccess,
  actionGetAllProductFailed,
  actionGetProductDetailSuccess,
  actionGetProductDetailFailed,
  actionGetProductCategorySuccess,
  actionGetProductCategoryFailed,
  actionGetProductRoomSuccess,
  actionGetProductRoomFailed,
} from './actions';

function* getAllProduct({ payload }) {
  try {
    const response = yield call(productAPI.getAllProduct, payload);
    yield put(actionGetAllProductSuccess(response.data));
  } catch (error) {
    yield put(actionGetAllProductFailed());
    toast.error(error.message);
  }
}

function* getProductDetail({ payload }) {
  try {
    const response = yield call(productAPI.getProductDetail, payload);
    yield put(actionGetProductDetailSuccess(response.data));
  } catch (error) {
    yield put(actionGetProductDetailFailed());
    toast.error(error.message);
  }
}

function* getProductCategory({ payload }) {
  try {
    const response = yield call(productAPI.getProductCategory, payload);
    yield put(actionGetProductCategorySuccess(response.data));
  } catch (error) {
    yield put(actionGetProductCategoryFailed());
    toast.error(error.message);
  }
}

function* getProductRoom({ payload }) {
  try {
    const response = yield call(productAPI.getProductRoom, payload);
    yield put(actionGetProductRoomSuccess(response.data));
  } catch (error) {
    yield put(actionGetProductRoomFailed());
    toast.error(error.message);
  }
}

export default function* productSaga() {
  yield takeLeading(GET_ALL_PRODUCT, getAllProduct);
  yield takeLeading(GET_PRODUCT_DETAIL, getProductDetail);
  yield takeLeading(GET_PRODUCT_CATEGORY, getProductCategory);
  yield takeLeading(GET_PRODUCT_ROOM, getProductRoom);
}
