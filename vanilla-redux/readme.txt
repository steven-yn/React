실습 진행 순서
-1) 핵심 키워드 알아보기
-2) Parcel 로 프로젝트 구성하기
-3) 토글 스위치와 카운터 구현하기.

1. Parcel 로 프로젝트 만들기
npm install -g parcel-bundler
디렉터리 들어간후 yarn init -y

2. index.html 과 index.js 만들기.

3. parcel index.html 로 parcel 개발서버 구동.
주소는 http://localhost:1234/
yarn add redux 로 리덕스 모듈 설치

parcel index.html 로 실행.

4. index.css 작성하기.

5. index.html 수정.

6. index.js 에 DOM 레퍼런스 만들기.

7. 액션 타입 정의
액션 이름은 문자열.

8. 액션 생성함수 작성.

9. 초기값 생성

10. 리듀서 함수 정의

11. 스토어 생성.

12. render 함수 생성.

13. subscribe 함수 생성.
상태가 업데이트 될때마다 render 함수 호출하도록 코드 작성.

14. dispatch를 사용해서 액션을 발생시키기.