
실습진행순서
-1) 작업 환경 준비
-2) Koa 서버 띄우기
-3) 미들웨어 알아보기.
-4) Koa-router 를 통한 백엔드 라우팅.
-5) 라우트 모듈화하기

1. node --version

2. blog-backend 디렉터리에서 패키지 정보 생성.
yarn init -y

3. 해당 파일 잘 만들어졌는지 확인.
cat package.json 또는 에디터로 직접 확인.

4. Koa 웹 프레임워크 설치.
yarn add koa

5. ESLint 와 Prettier 설정.
yarn add --dev eslint

6. Prettier 에서 관리하는 코드 스타일은 ESLint 에서 관리하지 않도록
eslint-config-prettier 설치 및 적용.
yarn add eslint-config-prettier

7. 설치후 .eslintrc.json 파일에서 
"extends": ["eslint:recommended", "prettier"], 로 수정.

8. src/index.js 생성.