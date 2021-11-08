.prettier 적용하기

Counter.js : 초기 카운터
Todos.js : 초기 할일 목록 컴포넌트
App.js : Todos 렌더링

counter_m.js : 초기 카운터 모듈
액션타입, 액션생성함수, 리듀서 함수 포함.

todos_m.js : 초기 할일 모듈

index_m.js : 초기 리듀서 합치는 모듈

index.js : 초기 스토어 생성 및 프로젝트에 리덕스 반영.
store에 redux-devtools-extension 사용해서 Redux DevTools 적용.

CounterContainer.js : Counter에 임시 컨테이너 씌우기
App_01.js : 임시 컨테이너 렌더링 해서 콘솔로그 찍어보기.

CounterContainer_01.js : increase 와 decrease dispatch 하기.

CounterContainer_02.js : map 어쩌구를 connect 내부에 익명함수로 변경.

CounterContainer_03.js : dispatch를 bindActionCreators 사용해서 간략화.

CounterContainer_04.js : bindActionCreators 도 생략하고
그냥 connect 함수 두번쨰 파라미터에 객체형태를 넣으면
connect 함수가 bindActionCreators 작업을 대신해줌.

TodosContainer.js : todos 모듈에서 작성했던 액션생성함수 와 상태 안에 있던 값을
컴포넌트 의 props 로 전달.
App_02.js : Todos 컴포넌트 TodosContainer 로 교체
Todos_01.js : Todos 컴포넌트 실 사용.

counter_m_01.js : createAction 과 handleActions 로 작성하기.

todos_m_01.js : createAction 과 handleActions 로 작성하기.
todos_m_02.js : action 을 받아오는 파라미터에 비구조화 할당 문법으로
payload 의 이름을 작성해줌.

todos_m_03.js : immer 라이브러리의 produce 함수 적용하기.

CounterContainer_05.js : 
useSelector 사용해서 number state를 props 전달.
useDispatch 사용해서 increase 와 decrease 컨트롤.

CounterContainer_06.js : useCallback 으로 감싸기.

TodosContainer_01.js : useSelector useDispatch useCallback 전환.

useActions.js : 링크에서 복사해와서 라이브러리 만들기.
TodosContainer_02.js : useDispatch 대신 useActions 로
여러개의 액션을 깔끔히 정리해줌.

TodosContainer_03.js : memo 사용해서 최적화


