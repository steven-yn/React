App_01 : Counter 와 Info 컴포넌트 렌더링

Counter_01 : +1 -1 버튼 구현

Info_01 : input 으로 이름과 닉네임 받고, 콘솔로그에 useEffect로 업데이트
Info_02 : 언마운트 시에만 뒷정리 함수 업데이트 (라이프사이클)
Info_03 : useReducer를 이용해 액션을 통해 스테이트 업데이트 (반복적인 기능해결책)
Info_04 : 커스텀 hook useInputs 로 기능 빼내기

App_02 : Average 렌더링

Average_01 : 입력받은 값들을 더해서 인수의 크기만큼 나눈 평균값 렌더링
Average_02 : useMemo를 사용해서 최적화.
Average_03 : useCallback 사용해서 함수 재사용 조건 달아주기.
Average_04 : useRef 사용해보기.

App_03 : Info 렌더링

useInputs : info에 있던 useReducer등을 옮겨 커스텀 hook 만들어보기.