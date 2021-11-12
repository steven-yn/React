main.js : dotenv 를 불러와서 config() 함수를 호출. 
Node.js 에서 환경변수는 process.env 값을 통해 조회.
.env : 환경변수 설정.
서버에서 사용할 포트와 MongoDB 주소를 넣는다.

main_01.js : mongoose 를 이용해 서버와 DB 연결.
연결할땐 mongoose 의 connect 함수 사용.
connect 에 두번째 파라미터 안넣음.

index.js : esm 적용하기.
package.json : esm 적용하기.
.eslint.json : sourceType 을 module 로 설정.

posts.ctrl_01.js : exports 를 export const 로 모두변경.
apipst_index.js : exports 를 export const 로 모두변경.
api_index.js : exports 를 export const 로 모두변경.
main_02.js : exports 를 export const 로 모두변경.

jsconfig.json : 자동완성을 통해 모듈을 불러올 수 있다.

post.js : 포스트의 스키마 정의

post_01.js : 포스트의 모델 생성

post.ctrl_02.js : 기존에 작성한 로직을 모두 새로 작성할 것이므로
기존 코드를 모두 지움
apipst_index_01.js : PUT 메서드를 설정한 부분 제거.

post.ctrl_03.js : write API 작성.

post.ctrl_04.js : list API 작성.

post.ctrl_05.js : read API 작성.

post.ctrl_06.js : remove API 작성.

