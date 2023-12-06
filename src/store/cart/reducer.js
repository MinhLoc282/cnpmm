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

const initialState = {
  loading: false,
  cart: [],
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    // GET_CART
    case GET_CART:
      return {
        ...state,
        loading: true,
      };

    case GET_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        cart: action.payload,
      };

    case GET_CART_FAILED:
      return {
        ...state,
        loading: false,
      };

    // ADD_TO_CART
    case ADD_TO_CART:
      return {
        ...state,
        loading: true,
      };

    case ADD_TO_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        cart: action.payload,
      };

    case ADD_TO_CART_FAILED:
      return {
        ...state,
        loading: false,
      };

    // EMPTY_CART
    case EMPTY_CART:
      return {
        ...state,
        loading: true,
      };

    case EMPTY_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        cart: [],
      };

    case EMPTY_CART_FAILED:
      return {
        ...state,
        loading: false,
      };

    case UPDATE_CART:
      return {
        ...state,
        loading: true,
      };

    case UPDATE_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        cart: action.payload,
      };

    case UPDATE_CART_FAILED:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default cart;
