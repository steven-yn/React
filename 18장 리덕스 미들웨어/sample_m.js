import { handleActions } from "redux-actions";
import * as api from "../lib/api";

// 액션 타입을 선언.
// 한 요청당 세개를 만들어야함.

/* Define Action Type */

const GET_POST = "sample/GET_POST";
const GET_POST_SUCCESS = "sample/GET_POST_SUCCESS";
const GET_POST_FAILURE = "sample/GET_POST_FAILURE";

const GET_USERS = "sample/GET_USERS";
const GET_USERS_SUCCESS = "sample/GET_USERS_SUCCESS";
const GET_USERS_FAILURE = "sample/GET_USERS_FAILURE";

// thunk 함수 생성.
// thunk 함수 내부에서는 시작할때, 성공했을 때, 실패 했을때 다른액션을 디스패치

/* Make Action produce Fucntion  */

export const getPost = (id) => async (dispatch) => {
  dispatch({ type: GET_POST }); // 요청을 시작할 것을 알림.
  try {
    const response = await api.getPost(id);
    dispatch({
      type: GET_POST_SUCCESS,
      payload: response.data,
    }); // 요청 성공
  } catch (e) {
    dispatch({
      type: GET_POST_FAILURE,
      payload: e,
      error: true,
    }); // 에러 발생
    throw e; // 나중에 컴포넌트 단에서 에러를 조회할수 있게함.
  }
};

export const getUsers = () => async (dispatch) => {
  dispatch({ type: GET_USERS }); // 요청을 시작할 것을 알림.
  try {
    const response = await api.getUsers();
    dispatch({
      type: GET_USERS_SUCCESS,
      payload: response.data,
    }); // 요청 성공
  } catch (e) {
    dispatch({
      type: GET_USERS_FAILURE,
      payload: e,
      error: true,
    }); // 에러 발생
    throw e; // 나중에 컴포넌트 단에서 에러를 조회할수 있게함.
  }
};

// 초기 상태 선언.
// 요청의 로딩중 상태는 loading 이라는 객체에서 관리.

/* Default state */

const initialState = {
  loading: {
    GET_POST: false,
    GET_USERS: false,
  },
  post: null,
  users: null,
};

/* Make Redux Function */

const sample = handleActions(
  {
    [GET_POST]: (state) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_POST: true, // 요청시작
      },
    }),
    [GET_POST_SUCCESS]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_POST: false, // 요청완료
      },
      post: action.payload,
    }),
    [GET_POST_FAILURE]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_POST: false, // 요청완료
      },
    }),
    [GET_USERS]: (state) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_USERS: true, // 요청시작
      },
    }),
    [GET_USERS_SUCCESS]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_USERS: false, // 요청완료
      },
      users: action.payload,
    }),
    [GET_USERS_FAILURE]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_USERS: false, // 요청완료
      },
    }),
  },
  initialState
);

export default sample;
