import { put, takeLeading, call } from 'redux-saga/effects';

import categoryAPI from 'apis/category/categoryAPI';
import roomAPI from 'apis/room/roomAPI';

import {
  GET_ALL_CATEGORY,
  GET_CATE_BY_ROOM,
} from './actionTypes';
import {
  actionGetAllCategorySuccess,
  actionGetAllCategoryFailed,
  actionGetCateByRoomSuccess,
  actionGetCateByRoomFailed,
} from './actions';

function* getAllCategory() {
  try {
    const response = yield call(categoryAPI.getAllCategory);

    yield put(actionGetAllCategorySuccess(response.data));
  } catch (error) {
    yield put(actionGetAllCategoryFailed());
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
  yield takeLeading(GET_ALL_CATEGORY, getAllCategory);
  yield takeLeading(GET_CATE_BY_ROOM, getCateByRoom);
}
