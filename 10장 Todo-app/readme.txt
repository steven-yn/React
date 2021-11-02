App_01 : TodoTemplate 적용.
App_02 : TodoInsert 적용.
App_03 : TodoList 렌더링.

TodoListItem_01.js : 뼈대만 만들어 놓은상태.
checkbox와 remove 기능

TodoList_01 : TodoListItem을 3개 담은 컴포넌트
TodoListItem.scss : TodoListItem을 스타일링 해줌.

App_04 : todos 로 객체 배열 날리기.
TodoList_02 : App 에게 props 받아와서 todos를 맵으로 변환
map으로 정렬한 배열에서 key와 props를 TodoListItem 에게 전달
TodoListItem_02 : key와 props를 받아서 조건부 렌더링

TodoInsert_02 : useState 로 value 상태 정의.
                onChange 이벤트 발생시 useCallback 으로
                value값 업데이트

App_05 : todos 배열에 새객체 추가하는 onInsert 함수.
onInsert 함수는 새로운 객체를 만들 때 마다 id 값에 1 씩 더한다.
useRef를 사용하여 관리. props로 전달할 함수를 만들땐 useCallback을 사용하여 함수를
감싼다.
TodoInsert_03 : 버튼을 클릭하면 발생할 이벤트 설정. onInsert 함수에 현재 useState를 통해
관리하고 있는 value 값을 파라미터로 넣어 onSubmit 호출.
form 에서 onSubmit 시 input 내용 작성후 button 클릭하거나 엔터치면
submit 된다.

App_06 : filter 함수를 사용해서 삭제 기능 구현.
TodoList_03 : onRemove를 받아서 TodoListItem 으로 다시 전달.
TodoListItem_03 : 중간을 거쳐 다시 받은 onRemove를 사용.

App_07 : onToggle 을 map과 삼항 연산자를 통해 조건부 객체 반환.
TodoList_04 : onToggle 을 받아서 TodoListItem 으로 다시 전달.
TodoListItem_04 : 중간을 거쳐 다시 받은 onToggle을 사용.