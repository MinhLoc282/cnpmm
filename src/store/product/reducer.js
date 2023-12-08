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

const initialState = {
  loading: false,
  allProducts: [],
  totalProducts: 0,
  productDetail: null,
  productCategory: [],
  productRoom: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCT:
    case GET_PRODUCT_DETAIL:
    case GET_PRODUCT_CATEGORY:
    case GET_PRODUCT_ROOM:
      return {
        ...state,
        loading: true,
      };

    case GET_ALL_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        allProducts: action.payload.product,
        totalProducts: action.payload.total,
      };

    case GET_PRODUCT_DETAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        productDetail: action.payload,
      };

    case GET_PRODUCT_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        productCategory: action.payload,
      };

    case GET_PRODUCT_ROOM_SUCCESS:
      return {
        ...state,
        loading: false,
        productRoom: action.payload,
      };

    case GET_ALL_PRODUCT_FAILED:
    case GET_PRODUCT_DETAIL_FAILED:
    case GET_PRODUCT_CATEGORY_FAILED:
    case GET_PRODUCT_ROOM_FAILED:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default productReducer;
