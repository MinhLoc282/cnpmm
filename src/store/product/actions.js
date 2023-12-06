import {
  GET_ALL_PRODUCT,
  GET_ALL_PRODUCT_SUCCESS,
  GET_ALL_PRODUCT_FAILED,
  GET_PRODUCT_DETAIL,
  GET_PRODUCT_DETAIL_SUCCESS,
  GET_PRODUCT_DETAIL_FAILED,
  GET_PRODUCT_CATEGORY,
  GET_PRODUCT_CATEGORY_SUCCESS,
  GET_PRODUCT_CATEGORY_FAILED,
  GET_PRODUCT_ROOM,
  GET_PRODUCT_ROOM_SUCCESS,
  GET_PRODUCT_ROOM_FAILED,
} from './actionTypes';

export const actionGetAllProduct = () => ({
  type: GET_ALL_PRODUCT,
});

export const actionGetAllProductSuccess = (payload) => ({
  type: GET_ALL_PRODUCT_SUCCESS,
  payload,
});

export const actionGetAllProductFailed = () => ({
  type: GET_ALL_PRODUCT_FAILED,
});

export const actionGetProductDetail = (payload) => ({
  type: GET_PRODUCT_DETAIL,
  payload,
});

export const actionGetProductDetailSuccess = (payload) => ({
  type: GET_PRODUCT_DETAIL_SUCCESS,
  payload,
});

export const actionGetProductDetailFailed = () => ({
  type: GET_PRODUCT_DETAIL_FAILED,
});

export const actionGetProductCategory = (payload) => ({
  type: GET_PRODUCT_CATEGORY,
  payload,
});

export const actionGetProductCategorySuccess = (payload) => ({
  type: GET_PRODUCT_CATEGORY_SUCCESS,
  payload,
});

export const actionGetProductCategoryFailed = () => ({
  type: GET_PRODUCT_CATEGORY_FAILED,
});

export const actionGetProductRoom = (payload) => ({
  type: GET_PRODUCT_ROOM,
  payload,
});

export const actionGetProductRoomSuccess = (payload) => ({
  type: GET_PRODUCT_ROOM_SUCCESS,
  payload,
});

export const actionGetProductRoomFailed = () => ({
  type: GET_PRODUCT_ROOM_FAILED,
});
