import { put, takeLeading, call } from 'redux-saga/effects';

import { toast } from 'react-toastify';

import couponAPI from 'apis/coupon/couponAPI';

import {
  GET_COUPON,
} from './actionTypes';

import {
  actionGetCouponSuccess,
  actionGetCouponFailed,
} from './actions';

function* getCoupon(action) {
  try {
    const response = yield call(couponAPI.getCoupon, action.payload);

    yield put(actionGetCouponSuccess(response.data));

    toast.success('Code is valid');
  } catch (error) {
    toast.error('Code is not valid');
    yield put(actionGetCouponFailed());
  }
}

export default function* couponSaga() {
  yield takeLeading(GET_COUPON, getCoupon);
}
