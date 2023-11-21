import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { actionRefreshToken, actionLogout } from 'store/actions';

import rootReducer from './reducers';
import rootSaga from './sagas';

import { getRefreshTokenFromCookie, decodeJWT } from 'utils';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const tokenMiddleware = () => (next) => (action) => {
  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = getRefreshTokenFromCookie();

  if (action.requiresAuth) {
    if (accessToken) {
      const decodedToken = decodeJWT(accessToken);

      if (decodedToken) {
        const currentTime = Date.now();
        const bufferTime = 5 * 60 * 1000;

        if (decodedToken.payload.exp * 1000 - currentTime < bufferTime) {
          store.dispatch(actionRefreshToken());
        }
      }
    }

    if (!refreshToken) {
      store.dispatch(actionLogout());
    } else {
      const decodedRefreshToken = decodeJWT(refreshToken);
      if (decodedRefreshToken) {
        const currentTime = Date.now();
        if (decodedRefreshToken.exp * 1000 < currentTime) {
          store.dispatch(actionLogout());
        }
      }
    }
  }

  return next(action);
};

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware, tokenMiddleware)),
);
sagaMiddleware.run(rootSaga);

export default store;
