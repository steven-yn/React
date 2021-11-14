user.js : 사용자 계정명과 비밀번호 를 담는 스키마 작성.

user_01.js : 파라미터로 받은 비밀번호가 해당 계정의 비밀번호와 일치하는지
검증 하는 setPassword 와 checkPassword 인스턴스 메서드 작성.

user_02.js : findByUsername 이라는 스태틱 메서드 작성.

auth.ctrl.js : 회원 인증 API 를 위한 새로운 라우트 정의. 틀만 잡음.
apiauth_index.js : auth 라우터 생성.
api_index.js : auth 라우터를 api 라우터에 적용.

auth.ctrl_01.js : register API 작성.

user_03.js : serialize 인스턴스 메서드 작성.
auth.ctrl_02.js : hashedPassword 삭제한 부분 serialize 로 교체.

auth.ctrl_03.js : login API 구현하기

.env : JWT 토큰을 만들때 사용할 비밀키 JWT_SECRET 만들기.
문자열 아무거나 입력.
user_04.js : user 모델 파일에서 generateToken 이라는 인스턴스 메서드 생성.

auth.ctrl_04.js : 사용자 토큰을 쿠키에 담아 사용. register 와 login API 를 수정.

jwtMiddleware.js : 사용자의 토큰을 확인한 후 검증하는 작업.

main.js : 미들웨어를 만든뒤 main.js 에서 app 에 미들웨어를 적용.
jwtMiddleware 를 적용하는 작업은 app 에 router 미들웨어를 
적용하기 전에 이뤄져야 함.
jwtMiddleware_01.js : 해석된 결과를 이후 미들웨어 에서
사용하려면 ctx 의 state 안에 넣어줌.
auth.ctrl_05.js : check API 구현.

jwtMiddleware_02.js : exp 에 표현된 날짜가 3.5일 미만이라면
토큰을 새로 재발급 해주는 기능 구현.

auth.ctrl_06.js : 로그아웃 기능 구현. 
이 API 는 쿠키를 지워주기만 하면 끝남.

mdl_post.js : 스키마에 user의 id와 username 전부 넣어줌.

checkLoggedIn.js : checkLoggedIn 이라는 미들웨어 만들어서 로그인 해야만 
글쓰기, 수정, 삭제를 할수있도록 구현하기.

pst_index.js : checkLoggedIn 미들웨어를 posts 라우터 에서 사용.

posts.ctrl.js : 로그인된 사용자만 포스트를 작성할수 있게 했으니, 
포스트 작성시 사용자 정보를 넣어서 DB에 저장하도록 구현.

posts.ctrl_01.js : 작성자만 포스트를 수정하거나 삭제 할수 있도록 구현.
id로 포스트를 조회하는 작업도 미들웨어로 해줘야 한다.
read 함수 내부에서 id로 포스트 찾는 코드 간소화.
pst_index_01.js : posts 라우터에 getPostById 반영.
posts.ctrl_02.js : checkOwnPost 미들웨어 만들기.
id로 찾은 포스트가 로그인 중인 사용자의 게시물 인지
확인해줌. 만약 사용자의 포스트가 아니라면 403 에러 발생.
pst_index_02.js : 만든 미들웨어를 update 및 remove API 에 적용.

post.ctrl_03.js : 특정 사용자가 작성한 포스트만 조회하거나 
특정 태그가 있는 포스트만 조회하는 기능을 만듦.