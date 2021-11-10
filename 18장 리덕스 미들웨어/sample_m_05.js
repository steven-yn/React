import { createAction, handleActions } from "redux-actions";
import * as api from "../lib/api";
import { takeLatest } from "redux-saga/effects";
import createRequestSaga from "../lib/createRequestSaga";

// 액션 타입을 선언.
// 한 요청당 세개를 만들어야함.

/* Define Action Type */

const GET_POST = "sample/GET_POST";
const GET_POST_SUCCESS = "sample/GET_POST_SUCCESS";

const GET_USERS = "sample/GET_USERS";
const GET_USERS_SUCCESS = "sample/GET_USERS_SUCCESS";

// thunk 함수 생성.
// thunk 함수 내부에서는 시작할때, 성공했을 때, 실패 했을때 다른액션을 디스패치

/* Make Action produce Fucntion  */

export const getPost = createAction(GET_POST, (id) => id);
export const getUsers = createAction(GET_USERS);

const getPostSaga = createRequestSaga(GET_POST, api.getPost);
const getUsersSaga = createRequestSaga(GET_USERS, api.getUsers);

/* saga define */

export function* sampleSaga() {
  yield takeLatest(GET_POST, getPostSaga);
  yield takeLatest(GET_USERS, getUsersSaga);
}

// 초기 상태 선언.
// 요청의 로딩중 상태는 loading 이라는 객체에서 관리.

/* Default state */

const initialState = {
  post: null,
  users: null,
};

/* Make Redux Function */

const sample = handleActions(
  {
    [GET_POST_SUCCESS]: (state, action) => ({
      ...state,
      post: action.payload,
    }),

    [GET_USERS_SUCCESS]: (state, action) => ({
      ...state,
      users: action.payload,
    }),
  },
  initialState
);

export default sample;
