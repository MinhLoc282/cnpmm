import { all, fork } from 'redux-saga/effects';

import Login from 'store/auth/login/saga';
import Register from 'store/auth/register/saga';
import RefreshToken from 'store/auth/refreshToken/saga';
import Logout from 'store/auth/logout/saga';

import Category from 'store/category/saga';
import Room from 'store/room/saga';
import Cart from 'store/cart/saga';
import Product from 'store/product/saga';
import Wishlist from 'store/wishlist/saga';

export default function* rootSaga() {
  yield all([
    fork(Login),
    fork(Register),
    fork(RefreshToken),
    fork(Logout),

    fork(Category),
    fork(Room),
    fork(Cart),
    fork(Product),
    fork(Wishlist),
  ]);
}
