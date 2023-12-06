import {
  GET_ALL_ROOM,
  GET_ALL_ROOM_SUCCESS,
  GET_ALL_ROOM_FAILED,
  GET_CATE_BY_ROOM,
  GET_CATE_BY_ROOM_SUCCESS,
  GET_CATE_BY_ROOM_FAILED,
} from './actionTypes';

// GET_ALL_ROOM
export const actionGetAllRoom = () => ({
  type: GET_ALL_ROOM,
});

export const actionGetAllRoomSuccess = (payload) => ({
  type: GET_ALL_ROOM_SUCCESS,
  payload,
});

export const actionGetAllRoomFailed = () => ({
  type: GET_ALL_ROOM_FAILED,
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
