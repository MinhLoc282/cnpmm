import {
  GET_ALL_ROOM,
  GET_ALL_ROOM_SUCCESS,
  GET_ALL_ROOM_FAILED,
  GET_CATE_BY_ROOM,
  GET_CATE_BY_ROOM_SUCCESS,
  GET_CATE_BY_ROOM_FAILED,
} from './actionTypes';

const initialState = {
  loading: false,
  rooms: [],
  categories: [],
};

const category = (state = initialState, action) => {
  switch (action.type) {
    // GET_ALL_ROOM
    case GET_ALL_ROOM:
      return {
        ...state,
        loading: true,
      };

    case GET_ALL_ROOM_SUCCESS:
      return {
        ...state,
        loading: false,
        rooms: action.payload,
      };

    case GET_ALL_ROOM_FAILED:
      return {
        ...state,
        loading: false,
      };

    // GET_CATE_BY_ROOM
    case GET_CATE_BY_ROOM:
      return {
        ...state,
        loading: true,
      };

    case GET_CATE_BY_ROOM_SUCCESS:
      return {
        ...state,
        loading: false,
        categories: action.payload,
      };

    case GET_CATE_BY_ROOM_FAILED:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default category;
