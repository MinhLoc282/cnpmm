import {
  CREATE_ORDER,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAILED,
  GET_ALL_ORDERS,
  GET_ALL_ORDERS_SUCCESS,
  GET_ALL_ORDERS_FAILED,
  UPDATE_ORDER_STATUS,
  UPDATE_ORDER_STATUS_SUCCESS,
  UPDATE_ORDER_STATUS_FAILED,
  GET_USER_ORDERS,
  GET_USER_ORDERS_SUCCESS,
  GET_USER_ORDERS_FAILED,
  GET_ORDER_DETAIL,
  GET_ORDER_DETAIL_SUCCESS,
  GET_ORDER_DETAIL_FAILED,
} from './actionTypes';

const initialState = {
  loading: false,
  orders: [],
};

const order = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ORDER:
    case GET_ALL_ORDERS:
    case UPDATE_ORDER_STATUS:
    case GET_USER_ORDERS:
    case GET_ORDER_DETAIL:
      return {
        ...state,
        loading: true,
      };

    case CREATE_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        orders: [...state.orders, action.payload],
      };

    case GET_ALL_ORDERS_SUCCESS:
      return {
        ...state,
        loading: false,
        orders: action.payload,
      };

    case UPDATE_ORDER_STATUS_SUCCESS:
      return {
        ...state,
        loading: false,
        orders: state.orders.map(
          (o) => (o._id === action.payload._id
            ? action.payload : o),
        ),
      };

    case GET_USER_ORDERS_SUCCESS:
      return {
        ...state,
        loading: false,
        orders: action.payload,
      };

    case GET_ORDER_DETAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        orders: action.payload,
      };

    case CREATE_ORDER_FAILED:
    case GET_ALL_ORDERS_FAILED:
    case UPDATE_ORDER_STATUS_FAILED:
    case GET_USER_ORDERS_FAILED:
    case GET_ORDER_DETAIL_FAILED:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default order;
