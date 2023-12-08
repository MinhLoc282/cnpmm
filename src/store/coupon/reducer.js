import {
  GET_COUPON,
  GET_COUPON_SUCCESS,
  GET_COUPON_FAILED,
} from './actionTypes';

const initialState = {
  loading: false,
  coupon: null,
};

const coupon = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUPON:
      return {
        ...state,
        loading: true,
      };

    case GET_COUPON_SUCCESS:
      return {
        ...state,
        loading: false,
        coupon: action.payload,
      };

    case GET_COUPON_FAILED:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default coupon;
