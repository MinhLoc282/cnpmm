import {
  GET_COUPON,
  GET_COUPON_SUCCESS,
  GET_COUPON_FAILED,
} from './actionTypes';

// GET_COUPON
export const actionGetCoupon = (payload) => ({
  type: GET_COUPON,
  payload,
});

export const actionGetCouponSuccess = (payload) => ({
  type: GET_COUPON_SUCCESS,
  payload,
});

export const actionGetCouponFailed = () => ({
  type: GET_COUPON_FAILED,
});
