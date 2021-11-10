counter_m.js : 초기 카운터 모듈
index_m.js : 초기 모듈 인덱스
index.js : 초기 인덱스
Counter.js : 초기 카운터 기능 컴포넌트
CounterContainer.js : 초기 카운터 컨테이너.
App.js : 초기 카운터 렌더링

loggerMiddleware.js : 상태와 액션을 확인하는 로깅 미들웨어 만들기.
index_01.js : 미들웨어 적용.

index_02.js : redux-logger 로 바꾸기.

index_03.js : redux-thunk 적용.

counter_m_01.js : 1초 뒤 실행되는 비동기 함수 만들기.
CounterContainer_01.js : 비동기 함수 호출하기.

api.js : API를 함수화해서 다른파일에서 불러와 사용하도록 작성.
sample_m.js : API 요청, 초기상태, 로딩상태 와 각 액션을
요청시작 / 요청성공 / 요청실패 로 나누어 작성.
index_m_01.js : sample 리듀서를 루트 리듀서에 포함시키기.
Sample.js : 데이터를 렌더링할 프레젠테이셔널 컴포넌트 작성.
post 의 경우 title 과 body만,
user 의 경우 username 과 email 만.
SampleContainer.js : 샘플을 담는 컨테이너.
App_01.js : 샘플 컨테이너 렌더링.

createRequestThunk.js : 반복되는 로직을 따로 분리해 리팩토링하기.
thunk 함수와 로딩상태 관리. thunk 함수를 한줄로 생성할수 있게
해주는 유틸 함수.
sample_m_01.js : createRequestThunk 사용하기.

loading.js : 로딩 상태를 리덕스 모듈로 따로 꺼내기.
index_m_02.js : 로딩 모듈을 루트 리듀서에 포함시키기.

createRequestThunk_01.js : 디스패치 때 로딩 모듈 사용.
SampleContainer_01.js : 로딩상태 조회.
sample_m_03.js : 불필요한 코드 지우기.

SampleContainer_02.js : useEffect 에서 try/catch 구문으로
실패 케이스 관리.

counter_m_02.js : saga 로 비동기 카운터 작성.
index_m_03.js : rootSaga 만들기.
index_04.js : redux-saga 미들웨어 적용.
App_02.js : CounterContainer 렌더링.

index_05.js : 리덕스 개발자 도구 적용하기.

sample_m_04 : saga 로 sample 모듈 적용해보기.
index_m_04 : 루트 사가에 등록.
App_03 : SampleContainer 렌더링.

createRequestSaga.js : saga 를 모듈 형식으로 작성.
sample_m_05.js : createRequestSaga 적용.

counter_m_03.js : select 사용해서 사가 내부에서 현재상태 조회.
App_04 : CounterContainer 렌더링.

counter_m_04.js : throttle 사용해보기.
