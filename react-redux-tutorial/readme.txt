-1) 프로젝트 준비
-2) 프레젠테이셔널 컴포넌트 작성
-3) 리덕스 관련 코드 작성
-4) 컨테이너 컴포넌트 작성
-5) 더 편하게 사용하는 방법 알아보기
-6) connect 대신 Hooks 사용하기.

1. 프로젝트 생성후, yarn add redux react-redux 라이브러리 설치.

2. components 폴더와 containers 폴더로 분리.
관심사의 분리.

3. 카운터 컴포넌트 만들기.

4. 할일 목록 UI 컴포넌트 만들기.

5. Todos 컴포넌트 렌더링하기.

6. modules 디렉더리 생성후 그안에 counter.js 파일 작성.
- 카운터 모듈에 액션 타입 정의 
- 액션 생성 함수 만들기.
- 초기 state 및 리듀서 함수 만들기.

7. todos 모듈 만들기
- 액션 타입 정의하기
- 액션 생성 함수 만들기
- 초기 state 정의 및 리덕스 함수 만들기

8. 루트 리듀서 만들기
modules 디렉터리에 index.js 파일 만들고
리듀서를 하나로 합치는 과정 해야함.
이 작업은 리덕스에서 제공하는 combineReducers 라는 유틸함수 사용.

9. index.js에 스토어 만들기 

10. Provider 사용하여 리액트 애플리케이션 에 리덕스를 적용

11. chrome 확장 프로그램인 Redux DevTools 설치
및 패키지인 redux-devtools-extension 설치
yarn add redux-devtools-extension

12. store에 Redux DevTools 적용하기.

13. 크롬 개발자 도구에서 Redux 탭 사용해보기.

14. CounterContainer 만들기 

15. 임시 컨테이너 렌더링 후 임시로 콘솔로그 찍어보기

16. 콘솔로그 대신 dispatch 적용해서 렌더링해보기. 

17. connect 함수 내부에 익명 함수형태로 바꿔보기.

18. bindActionCreators 사용해서 dispatch로 감싸는 코드 간략화 해보기.

19. mapDispatchToProps 에 해당하는 파라미터를 함수 형태가 아닌
액션생성함수 로 이루어진 객체 형태로 넣어줘서 간략화 해보기.

20. 위에서 한 간략화와 connect 함수 적용해서 
Todos 컴포넌트 를 위한 컨테이너 인 TodosContainer 작성하기.

21. Todos 컴포넌트 TodosContainer 로 교체해서 렌더링.

22. Todos 컴포넌트에 props 받아서 사용하도록 기능구현.

23. redux-actions 적용해서 편리하게 써보기.
yarn add redux-actions

24. counter 모듈 액션생성함수에 createAction 함수 적용하기.

25. 리듀서 함수에 handleActions 함수 적용.

26. todos 모듈 액션생성함수에 createAction 함수 적용하기.

27. 리듀서 함수에 handleActions 함수 적용.
모두 공통적으로 action.payload 값을 조회하도록 리듀서 구현.

28. action 을 받아오는 파라미터에 비구조화 할당 문법으로
payload 의 이름을 작성해줌.

29. todos 모듈에 immer 라이브러리 적용하기.
yarn add immer

30. CounterContainer 에서 useSelector Hook 을 사용하면 
connect 함수를 사용하지 않고도 리덕스의 상태를 조회할수 있음.
useSelector 사용해 counter.number 값을 조회 함으로써 
Counter 에게 props 전달하기.

31. useDispatch 사용해서 increase 와 decrease 컨트롤.

32. useCallback 으로 감싸서 최적화.

33. TodosContainer 에도 같은 작업

34. useActions 라이브러리 만들어보기.
https://react-redux.js.org/api/hooks#recipe-useactions

35. TodosContainer 에 useActions 를 사용해보기.