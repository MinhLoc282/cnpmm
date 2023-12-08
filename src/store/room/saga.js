import { put, takeLeading, call } from 'redux-saga/effects';

import roomAPI from 'apis/room/roomAPI';
import {
  GET_ALL_ROOM,
} from './actionTypes';
import {
  actionGetAllRoomSuccess,
  actionGetAllRoomFailed,

} from './actions';

function* getAllRoom() {
  try {
    const response = yield call(roomAPI.getAllRoom);

    yield put(actionGetAllRoomSuccess(response.data));
  } catch (error) {
    yield put(actionGetAllRoomFailed());
  }
}

export default function* categorySaga() {
  yield takeLeading(GET_ALL_ROOM, getAllRoom);
}
