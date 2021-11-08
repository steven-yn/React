재사용 성이 높은 연습 프로젝트.

실습 진행 순서
-1) 작업 환경 준비
-2) 미들웨어 직접 만들기
-3) redux-logger 사용하기
-4) 미들웨어를 사용한 비동기 작업 관리.

1. 작업 환경 준비
yarn add react-redux redux-actions

2. 카운터 모듈 준비.
17장 카운터 모듈과 인덱스 모듈 가져옴.

3. src 디렉터리의 index.js 에서 스토어 생성후
Provider 로 프로젝트에 리덕스 적용.

4. 카운터 컴포넌트 와 카운터 컨테이너 만들기.
17장 꺼 가져오기.

5. App 에 렌더링 해보기.

6. 간단한 로깅 미들웨어 만들어보기.

7. 다음 정보를 순차적으로 콘솔에 보여줌.
-1. 이전상태
-2. 액션정보
-3. 새로워진 상태 

8. index.js 에서 미들웨어 적용하기.

9. redux-logger 사용하기.
yarn add redux-logger

10. index.js 에서 logger 사용하기.

11. redux-thunk 미들웨어 적용해보기.
yarn add redux-thunk

12. 액션생성함수 에서 일반 액션 객체를 반환하는 대신
함수를 반환. increaseAsync 와 decreaseAsync 함수를 만들어
카운터 값을 비동기 적으로 변경

13.thunk 의 속성을 활용해 웹 요청 비동기 작업 처리하는 방법 알아보자.
웹 요청을 연습하기 위해 JSONPlaceholder 에서 제공되는 가짜 API 사용.
# 포스트 읽기 (:id는 1~100 사이 숫자)
GET https://jsonplaceholder.typicode.com/posts/:id

# 모든 사용자 정보 불러오기
GET https://jsonplaceholder.typicode.com/users

yarn add axios 

14. API를 함수화해서 다른파일에서 불러와 사용하도록 작성.

15. 위 API 사용하여 데이터를 받아와 상태를 관리할
sample 이라는 리듀서 생성.

16. 작성한 리듀서를 index.js 루트 리듀서에 포함시킴.

17. 데이터를 렌더링할 프레젠테이셔널 컴포넌트 작성.

18. 샘플을 담을 컨테이너 컴포넌트 만들기.

19. App 에서 SampleContainer 렌더링 해보기.

20. 반복되는 로직을 따로 분리해 리팩토링하기.
thunk 함수와 로딩상태 관리

21. sample 모듈에 기존 thunk 함수 코드 대체시키기

22. 리듀서 내부에서 각 요청에 관련된 액션이 디스패치 될 때마다
로딩 상태를 변경 한것을 따로 loading 이란 모듈로 처리.

23. 로딩 모듈을 루트 리듀서에 포함시키기.

24. createRequestThunk 에서 로딩 모듈 사용하기.

25. SampleContainer 에 로딩 모듈 적용.

26. sample 리듀서 에서 불필요한 코드 제거.

27. SampleContainer 에서 에러조회 코드 사용.

28. 