import { combineReducers } from 'redux';

import Login from 'store/auth/login/reducer';
import Register from 'store/auth/register/reducer';
import RefreshToken from 'store/auth/refreshToken/reducer';
import Logout from 'store/auth/logout/reducer';

import Category from 'store/category/reducer';
import Room from 'store/room/reducer';
import Cart from 'store/cart/reducer';
import Product from 'store/product/reducer';
import Wishlist from 'store/wishlist/reducer';

const rootReducer = combineReducers({
  Login,
  Register,
  RefreshToken,
  Logout,

  Category,
  Room,
  Cart,
  Product,
  Wishlist,
});

export default rootReducer;
