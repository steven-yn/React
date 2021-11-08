/* Define Action Type */

const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

/* Make Action produce Fucntion  */

export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

/* Default state */

const initialState = {
  number: 0,
};

/* Make Redux Fucntion */

function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        number: state.number + 1,
      };
    case DECREASE:
      return {
        number: state.number - 1,
      };
    default:
      return state;
  }
}

export default counter;
