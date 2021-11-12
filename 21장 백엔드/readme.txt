.eslintrc.json : eslint 문법 설정
.prettierrc : 코드 에미터

index.js : 초기 서버 띄우기용 js

index_01.js : 현재 요청을 받은 주소와 우리가 정해준 숫자를 기록하는
두개의 미들웨어 작성.

index_02.js : 첫번째 미들웨어 에서 호출하던 next 함수를 주석처리

index_03.js : 요청 경로에 authorized=1 이라는 쿼리 파라미터가 포함되면
이후 미들웨어를 처리해주고, 그렇지 않으면 이후 미들웨어를 처리하지 않음.

index_04.js : next 함수 호출 이후에 then 을 사용해 Promise가 끝난다음
콘솔에 END 를 기록하도록 수정.

index_05.js : 기존 코드를 async/await 사용하는 형태로 수정하기.

package.json : nodemon 추가하기.

index_06.js : 미들웨어 모두 삭제후 nodemon 결과 확인하기.

index_07.js : 라우터 사용해보기.

index_08.js : 파라미터와 쿼리를 사용하는 라우트

api_index.js : 초기 api 라우트 

index_09.js : 기존 라우트 제거하고 /api 로 연결.

apipst_index.js : 여러 종류의 라우트 와 JSON 객체 반환.
api_index_01.js : 기존 test 라우트는 지우고, posts 라우트를 불러와 설정.

index_10.js : bodyparser 적용하기.
posts.ctrl.js : 컨트롤러 파일 생성.
지금은 DB 에 연결하지 않았으므로 JS 배열기능만 사용하여 임시로 구현.

apipst_index_01.js : 만든 컨트롤러 함수들을 각 라우트에 연결

