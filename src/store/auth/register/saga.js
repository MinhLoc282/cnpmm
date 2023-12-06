import { toast } from 'react-toastify';
import { put, takeLeading, call } from 'redux-saga/effects';

import authAPI from 'apis/auth/authAPI';
import { removeSpacesWithTrim } from 'utils';

import { REGISTER } from './actionTypes';
import {
  actionRegisterSuccess,
  actionRegisterFailed,
} from './actions';

function* register({ payload }) {
  try {
    const {
      values: {
        username,
        email,
        password,
        firstname,
        lastname,
        phoneNumber,
      },

      callback,
    } = payload;

    const newData = removeSpacesWithTrim({
      username,
      email,
      password,
      firstname,
      lastname,
      phoneNumber,
    });

    const response = yield call(authAPI.register, newData);

    yield put(actionRegisterSuccess());

    toast.success(response.message);

    callback();
  } catch (error) {
    toast.error(error.response.data);

    yield put(actionRegisterFailed());
  }
}

export default function* registerSaga() {
  yield takeLeading(REGISTER, register);
}
