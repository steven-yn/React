import { createAction, handleActions } from "redux-actions";
import * as api from "../lib/api";
import { call, put, takeLatest } from "redux-saga/effects";
import { startLoading, finishLoading } from "./loading";

// 액션 타입을 선언.
// 한 요청당 세개를 만들어야함.

/* Define Action Type */

const GET_POST = "sample/GET_POST";
const GET_POST_SUCCESS = "sample/GET_POST_SUCCESS";
const GET_POST_FAILURE = "sample/GEY_POST_FAILURE";

const GET_USERS = "sample/GET_USERS";
const GET_USERS_SUCCESS = "sample/GET_USERS_SUCCESS";
const GET_USERS_FAILURE = "sample/GET_USERS_FAILURE";

// thunk 함수 생성.
// thunk 함수 내부에서는 시작할때, 성공했을 때, 실패 했을때 다른액션을 디스패치

/* Make Action produce Fucntion  */

export const getPost = createAction(GET_POST, (id) => id);
export const getUsers = createAction(GET_USERS);

/* saga define */

function* getPostSaga(action) {
  yield put(startLoading(GET_POST)); // 로딩시작
  // 파라미터로 action 을 받아오면 액션의 정보 조회 가능.
  try {
    // call 을 사용하면 Promise 를 반환하는 함수호출, 기다릴수 있음.
    // 첫번째 파라미터는 함수, 나머지 파라미터는 해당 함수에 넣을 인수.
    const post = yield call(api.getPost, action.payload);
    // api.getPost(action.payload) 를 의미
    yield put({
      type: GET_POST_SUCCESS,
      payload: post.data,
    });
  } catch (e) {
    // try/catch 문을 사용하여 에러도 잡을수 있음.
    yield put({
      type: GET_POST_FAILURE,
      payload: e,
      error: true,
    });
  }
  yield put(finishLoading(GET_POST)); // 로딩완료
}

function* getUsersSaga() {
  yield put(startLoading(GET_POST)); // 로딩시작
  // 파라미터로 action 을 받아오면 액션의 정보 조회 가능.
  try {
    // call 을 사용하면 Promise 를 반환하는 함수호출, 기다릴수 있음.
    // 첫번째 파라미터는 함수, 나머지 파라미터는 해당 함수에 넣을 인수.
    const users = yield call(api.getUsers);
    // api.getPost(action.payload) 를 의미
    yield put({
      type: GET_POST_SUCCESS,
      payload: users.data,
    });
  } catch (e) {
    // try/catch 문을 사용하여 에러도 잡을수 있음.
    yield put({
      type: GET_USERS_FAILURE,
      payload: e,
      error: true,
    });
  }
  yield put(finishLoading(GET_USERS)); // 로딩완료
}

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
