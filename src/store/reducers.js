import { combineReducers } from 'redux';

import Login from 'store/auth/login/reducer';
import Register from 'store/auth/register/reducer';
import RefreshToken from 'store/auth/refreshToken/reducer';
import Logout from 'store/auth/logout/reducer';

const rootReducer = combineReducers({
  Login,
  Register,
  RefreshToken,
  Logout,
});

export default rootReducer;
