import { put, takeLeading, call } from 'redux-saga/effects';

import roomAPI from 'apis/room/roomAPI';
import {
  GET_ALL_ROOM,
  GET_CATE_BY_ROOM,
} from './actionTypes';
import {
  actionGetAllRoomSuccess,
  actionGetAllRoomFailed,
  actionGetCateByRoomSuccess,
  actionGetCateByRoomFailed,
} from './actions';

function* getAllRoom() {
  try {
    const response = yield call(roomAPI.getAllRoom);

    yield put(actionGetAllRoomSuccess(response.data));
  } catch (error) {
    yield put(actionGetAllRoomFailed());
  }
}

function* getCateByRoom({ payload }) {
  try {
    const response = yield call(roomAPI.getCateByRoom, payload);

    yield put(actionGetCateByRoomSuccess(response.data));
  } catch (error) {
    yield put(actionGetCateByRoomFailed());
  }
}

export default function* categorySaga() {
  yield takeLeading(GET_ALL_ROOM, getAllRoom);
  yield takeLeading(GET_CATE_BY_ROOM, getCateByRoom);
}
