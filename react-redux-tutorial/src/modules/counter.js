import { createAction, handleActions } from 'redux-actions';

/* Define Action Type */

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

/* Make Action produce Fucntion  */

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);
// createAction 으로 type 정의

/* Default state */

const initialState = {
  number: 0,
};

/* Make Redux Function */

const counter = handleActions(
  {
    [INCREASE]: (state, action) => ({ number: state.number + 1 }),
    [DECREASE]: (state, action) => ({ number: state.number - 1 }),
  },
  initialState,
);

export default counter;
