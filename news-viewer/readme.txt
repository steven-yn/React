-1) 비동기 작업의 이해
-2) axios로 API 호출해서 데이터 받아오기.
-3) newsapi API 키 발급받기
-4) 뉴스 뷰어 UI 만들기.
-5) 데이터 연동하기
-6) 카테고리 기능 구현하기.
-7) 리액트 라우터 적용하기.

1. axios 설치하기 및 프리티어 설정.
+ jsconfig.json.

2. App.js 에 가짜 API 호출하고, 응답을 컴포넌트
상태에 넣어 보여주는 예제

3. 예제 코드에 async 적용.

4. 뉴스 API 키 발급받기
d2994b6a37f94808b18f80a0e79be828

5. newsapi.org 사이트에서 전체뉴스 API 받아오기.

6. styled-components 설치하기.

7. API로 받은 JSON 객체를 컴포넌트에 나타내기.
NewsItem 만들기.

8. 나중에 API 요청할 NewsList 에 예시 객체 넣어두기
및 NewsList로 만든 UI렌더링

9. 실제 뉴스 API 받아오기.

10. 뉴스 카테고리 구현하기.

11. category 상태 useState로 관리하고,
category 값을 업데이트 하는 onSelect 만들고
category onSelect 함수를 Categories, NewsList 
컴포넌트에 props 로 전달

12. Categories 에서는 props 로 전달받은 onSelect 를 
각 Category 컴포넌트의 onClick 으로 설정하고,
현재 선택된 카테고리 값에 따라 다른 스타일 적용하기.

13. category 에 따른 API 요청하도록 구현하기.

14. useState로 관리 하던것을 리액트 라우터의
URL 파라미터 사용하여 관리하기.

15. NewsPage 만들기.

16. App.js 에 라우터 적용하고 NewsPage 렌더링.

17. Categories 에서 NavLink 사용하기.
