import { createAction, handleActions } from "redux-actions";
import {
  delay,
  put,
  takeEvery,
  takeLatest,
  select,
  throttle,
} from "redux-saga/effects";

/* Define Action Type */

const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";
const INCREASE_ASYNC = "counter/INCREASE_ASYNC";
const DECREASE_ASYNC = "counter/DECREASE_ASYNC";

/* Make Action produce Fucntion  */

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);
// createAction 으로 type 정의

// 마우스 클릭 이벤트가 payload 안에 들어가지 않도록
// () => undefined 를 두번째 파라미터로 넣어줌.

export const increaseAsync = createAction(INCREASE_ASYNC, () => undefined);
export const decreaseAsync = createAction(DECREASE_ASYNC, () => undefined);

/* 1초 뒤에 increase 혹은 decrease 함수를 디스패치 */

function* increaseSaga() {
  yield delay(1000); // 1초 기다림.
  yield put(increase()); // 특정 액션 디스패치.
  const number = yield select((state) => state.counter);
  //state는 스토어 상태를 의미.
  console.log(`현재 값은 ${number} 입니다.`);
}

function* decreaseSaga() {
  yield delay(1000); // 1초 기다림.
  yield put(decrease()); // 특정 액션 디스패치.
}

/*
export const increaseAsync = () => (dispatch) => {
  setTimeout(() => {
    dispatch(increase());
  }, 1000);
};

export const decreaseAsync = () => (dispatch) => {
  setTimeout(() => {
    dispatch(decrease());
  }, 1000);
};
*/

export function* counterSaga() {
  // 첫번째 파라미터: n초 * 1000
  yield throttle(3000, INCREASE_ASYNC, increaseSaga);

  // takeLatest 는 기존에 진행중이던 작업이 있다면 취소 처리
  // 가장 마지막으로 실행된 작업만 수행.
  yield takeLatest(DECREASE_ASYNC, decreaseSaga);
}

/* Default state */

const initialState = 0;
// 상태는 꼭 객체일 필요가 없다. 숫자도 작동.

/* Make Redux Function */

const counter = handleActions(
  {
    [INCREASE]: (state) => state + 1,
    [DECREASE]: (state) => state - 1,
  },
  initialState
);

export default counter;
