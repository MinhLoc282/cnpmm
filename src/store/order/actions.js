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

// Create Order
export const actionCreateOrder = (payload) => ({
  type: CREATE_ORDER,
  payload,
});

export const actionCreateOrderSuccess = (payload) => ({
  type: CREATE_ORDER_SUCCESS,
  payload,
});

export const actionCreateOrderFailed = () => ({
  type: CREATE_ORDER_FAILED,
});

// Get All Orders
export const actionGetAllOrders = () => ({
  type: GET_ALL_ORDERS,
});

export const actionGetAllOrdersSuccess = (payload) => ({
  type: GET_ALL_ORDERS_SUCCESS,
  payload,
});

export const actionGetAllOrdersFailed = () => ({
  type: GET_ALL_ORDERS_FAILED,
});

// Update Status of Order
export const actionUpdateOrderStatus = (payload) => ({
  type: UPDATE_ORDER_STATUS,
  payload,
});

export const actionUpdateOrderStatusSuccess = (payload) => ({
  type: UPDATE_ORDER_STATUS_SUCCESS,
  payload,
});

export const actionUpdateOrderStatusFailed = () => ({
  type: UPDATE_ORDER_STATUS_FAILED,
});

// Get User Orders
export const actionGetUserOrders = () => ({
  type: GET_USER_ORDERS,
});

export const actionGetUserOrdersSuccess = (payload) => ({
  type: GET_USER_ORDERS_SUCCESS,
  payload,
});

export const actionGetUserOrdersFailed = () => ({
  type: GET_USER_ORDERS_FAILED,
});

// Get Order Detail
export const actionGetOrderDetail = (orderId) => ({
  type: GET_ORDER_DETAIL,
  payload: { orderId },
});

export const actionGetOrderDetailSuccess = (payload) => ({
  type: GET_ORDER_DETAIL_SUCCESS,
  payload,
});

export const actionGetOrderDetailFailed = () => ({
  type: GET_ORDER_DETAIL_FAILED,
});
