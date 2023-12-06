import {
  GET_USER_WISHLIST,
  GET_USER_WISHLIST_SUCCESS,
  GET_USER_WISHLIST_FAILED,
  UPDATE_USER_WISHLIST,
  UPDATE_USER_WISHLIST_SUCCESS,
  UPDATE_USER_WISHLIST_FAILED,
} from './actionTypes';

// USER WISHLIST
export const actionGetUserWishlist = () => ({
  type: GET_USER_WISHLIST,
});

export const actionGetUserWishlistSuccess = (payload) => ({
  type: GET_USER_WISHLIST_SUCCESS,
  payload,
});

export const actionGetUserWishlistFailed = () => ({
  type: GET_USER_WISHLIST_FAILED,
});

export const actionUpdateUserWishlist = (payload) => ({
  type: UPDATE_USER_WISHLIST,
  payload,
});

export const actionUpdateUserWishlistSuccess = (payload) => ({
  type: UPDATE_USER_WISHLIST_SUCCESS,
  payload,
});

export const actionUpdateUserWishlistFailed = () => ({
  type: UPDATE_USER_WISHLIST_FAILED,
});
