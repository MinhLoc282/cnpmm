import {
  GET_ALL_CATEGORY,
  GET_ALL_CATEGORY_SUCCESS,
  GET_ALL_CATEGORY_FAILED,

  GET_CATE_BY_ROOM,
  GET_CATE_BY_ROOM_SUCCESS,
  GET_CATE_BY_ROOM_FAILED,
} from './actionTypes';

// GET_ALL_CATEGORY
export const actionGetAllCategory = () => ({
  type: GET_ALL_CATEGORY,
});

export const actionGetAllCategorySuccess = (payload) => ({
  type: GET_ALL_CATEGORY_SUCCESS,
  payload,
});

export const actionGetAllCategoryFailed = () => ({
  type: GET_ALL_CATEGORY_FAILED,
});

// GET_CATE_BY_ROOM
export const actionGetCateByRoom = (payload) => ({
  type: GET_CATE_BY_ROOM,
  payload,
});

export const actionGetCateByRoomSuccess = (payload) => ({
  type: GET_CATE_BY_ROOM_SUCCESS,
  payload,
});

export const actionGetCateByRoomFailed = () => ({
  type: GET_CATE_BY_ROOM_FAILED,
});
