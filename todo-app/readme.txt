10.1 프로젝트 준비하기

-> .prettier 설정.
-> index.css 설정.
-> App.js 비우기

1. TodoTemplate 만들기
-TodoTemplate.js, TodoTemplate.scss, App.js
화면을 가운데에 정렬시켜 주며, 앱 타이틀 (일정관리) 을 보여줍니다.
children 으로 내부 jsx 를 props로 받아와서 렌더링.

2. TodoInsert 만들기
-   TodoInsert.js 로 뼈대 만들기
-   TodoInsert.scss 스타일링 하기
새로운 항목을 입력하고 추가할 수 있는 컴포넌트.
state를 통해 인풋의 상태 관리.

3. TodoListItem 만들기
-   TodoListItem.js 만들기

4. TodoList 만들기
-   TodoList.js 만들기

5. TodoList 스타일링

6. TodoListItem 스타일링.

7. App에 todos 스테이트 배열 만들고 
TodoList에게 todos props로 날리기

8. TodoList 에서 todos props 받아서 map으로 정리하고 
TodoListItem 으로 todo props와 id key 값 전달하기

9. TodoListItem 에서 todo 와 id 받기
App에서 전달해준 todos 값에 따라 다른 내용을 보여준다.

10. TodoInsert 에서 인풋 입력 관리하도록 useState 로 value 상태 정의.
useCallback 사용하여 함수 재사용 쓰기.

11. App 에서 todos 배열에 새 객체 추가.
일정을 추가할수 있는 기능 구현. todos 배열에 새객체 추가하는 onInsert 함수.
onInsert 함수는 새로운 객체를 만들 때 마다 id 값에 1 씩 더해주어야한다.
useRef를 사용하여 관리. props로 전달할 함수를 만들땐 useCallback을 사용하여 함수를
감싼다.

12. TodoInsert 에서 onSubmit 이벤트 설정.
버튼을 클릭하면 발생할 이벤트 설정. onInsert 함수에 현재 useState를 통해
관리하고 있는 value 값을 파라미터로 넣어 onSubmit 호출.

13. todos 배열에서 id로 항목 지우기.
filter 함수를 사용하여 onRemove 함수를 작성.
App 컴포넌트에 id를 파라미터로 받아와서 같은 id 가진 항목을 todos 배열에서 지우는 함수.
이함수를 만들고 나서 TodoList의 props로 설정함.

14. TodoListItem 에서 삭제함수 호출하기.
TodoListItem 에서 방금 만든 onRemove 함수 사용하려면 우선
TodoList 컴포넌트 거치기. 다음과 같이 props로 받아온 onRemove 함수를
TodoListItem 에 그대로 전달.

15. 체크 기능
onToggle 이라는 함수를 App 에서 만들고, 해당 함수를 TodoList 컴포넌트에
props로 넣어주기. TodoList를 통해 TodoListItem 까지 전달.

16. 컴포넌트 최적화 하기전 랙 경험.
createBulkTodos 라는 함수를 만들어 2500개의 데이터 자동생성.

17. React.memo 사용하여 최적화

18. onToggle onRemove onInsert 함수형 업데이트 적용.
