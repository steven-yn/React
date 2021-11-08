import { createAction, handleActions } from "redux-actions";

/* Define Action Type */

const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

/* Make Action produce Fucntion  */

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);
// createAction 으로 type 정의

/* 1초 뒤에 increase 혹은 decrease 함수를 디스패치 */

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
