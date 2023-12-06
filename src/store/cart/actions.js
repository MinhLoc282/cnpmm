import {
  GET_CART,
  GET_CART_SUCCESS,
  GET_CART_FAILED,
  ADD_TO_CART,
  ADD_TO_CART_SUCCESS,
  ADD_TO_CART_FAILED,
  EMPTY_CART,
  EMPTY_CART_SUCCESS,
  EMPTY_CART_FAILED,
  UPDATE_CART,
  UPDATE_CART_SUCCESS,
  UPDATE_CART_FAILED,
} from './actionTypes';

// GET_CART
export const actionGetCart = (payload) => ({
  type: GET_CART,
  payload,
});

export const actionGetCartSuccess = (payload) => ({
  type: GET_CART_SUCCESS,
  payload,
});

export const actionGetCartFailed = () => ({
  type: GET_CART_FAILED,
});

// ADD_TO_CART
export const actionAddToCart = (payload) => ({
  type: ADD_TO_CART,
  payload,
});

export const actionAddToCartSuccess = (payload) => ({
  type: ADD_TO_CART_SUCCESS,
  payload,
});

export const actionAddToCartFailed = () => ({
  type: ADD_TO_CART_FAILED,
});

// EMPTY_CART
export const actionEmptyCart = () => ({
  type: EMPTY_CART,
});

export const actionEmptyCartSuccess = () => ({
  type: EMPTY_CART_SUCCESS,
});

export const actionEmptyCartFailed = () => ({
  type: EMPTY_CART_FAILED,
});

// UPDATE_CART
export const actionUpdateCart = (payload) => ({
  type: UPDATE_CART,
  payload,
});

export const actionUpdateCartSuccess = (payload) => ({
  type: UPDATE_CART_SUCCESS,
  payload,
});

export const actionUpdateCartFailed = () => ({
  type: UPDATE_CART_FAILED,
});
