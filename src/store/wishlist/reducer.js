import {
  GET_USER_WISHLIST,
  GET_USER_WISHLIST_SUCCESS,
  GET_USER_WISHLIST_FAILED,
  UPDATE_USER_WISHLIST,
  UPDATE_USER_WISHLIST_SUCCESS,
  UPDATE_USER_WISHLIST_FAILED,
} from './actionTypes';

const initialState = {
  loading: false,
  wishlist: [],
};

const wishlist = (state = initialState, action) => {
  switch (action.type) {
    // GET_USER_WISHLIST
    case GET_USER_WISHLIST:
      return {
        ...state,
        loading: true,
      };

    case GET_USER_WISHLIST_SUCCESS:
      return {
        ...state,
        loading: false,
        wishlist: action.payload,
      };

    case GET_USER_WISHLIST_FAILED:
      return {
        ...state,
        loading: false,
      };

    // GET_CATE_BY_ROOM
    case UPDATE_USER_WISHLIST:
      return {
        ...state,
        loading: true,
      };

    case UPDATE_USER_WISHLIST_SUCCESS:
    {
      const isItemInWishlist = state.wishlist.some((item) => item._id === action.payload._id);

      if (isItemInWishlist) {
        return {
          ...state,
          loading: false,
          wishlist: state.wishlist.filter((item) => item._id !== action.payload._id),
        };
      }
      return {
        ...state,
        loading: false,
        wishlist: [...state.wishlist, action.payload],
      };
    }

    case UPDATE_USER_WISHLIST_FAILED:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default wishlist;
