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

post.ctrl_07.js : update API 작성.

post.ctrl_08.js : ObjectId 를 검증하기위한 코드를 작성하고, 원하는 API 에만 
적용하기 위해 미들웨어를 만듦.
apipst_index_02.js : 만든 미들웨어 checkObjectId 를 적용.

apipst_index_03.js : 리팩토링.

post.ctrl_09.js : write 함수에서 Joi 를 사용해 요청내용 검증.

post.ctrl_10.js : update API 에서 Joi 를 사용해 요청내용 검증.

createFakeData.js : 페이지네이션 실습을 위해 가짜 데이터를 채워넣을 
스크립트 작성.
main_03.js : createFakeData 호출.

post.ctrl_11.js : list API 에서 포스트를 역순으로 불러옴.

post.ctrl_12.js : list API 에서 보이는 포스트 개수 제한.

post.ctrl_13.js : list API 에 페이지 기능 구현.

post.ctrl_14.js : list API 에 마지막 페이지 알림기능 구현.

post.ctrl_15.js : list API 에 내용 길이 제한 기능을 구현.

post.ctrl_16.js : lean() 함수를 사용해서 같은 기능구현.