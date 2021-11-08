import { finishLoading, startLoading } from "../modules/loading";

export default function createRequestThunk(type, request) {
  // 성공 및 실패 액션 타입 정의

  /* Define Action Type */

  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  // 비동기 디스패치 함수 정의
  // thunk 함수 생성.
  // thunk 함수 내부에서는 시작할때, 성공했을 때, 실패 했을때 다른액션을 디스패치

  /* Make Action produce Fucntion  */

  return (params) => async (dispatch) => {
    dispatch({ type }); // 요청을 시작할 것을 알림.
    dispatch(startLoading(type));
    try {
      const response = await request(params);
      dispatch({
        type: SUCCESS,
        payload: response.data,
      }); // 요청 성공
      dispatch(finishLoading(type));
    } catch (e) {
      dispatch({
        type: FAILURE,
        payload: e,
        error: true,
      }); // 에러 발생
      dispatch(startLoading(type));
      throw e; // 나중에 컴포넌트 단에서 에러를 조회할수 있게함.
    }
  };
}

// 사용법 : createRequestThunk('GET_USERS', api.getUsers);
