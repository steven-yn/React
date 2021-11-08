index.html : 초기 html 구성
index.js : 초기 js 구성
index.css : 초기 css 구성.

index_01.html : 카운터 ui 만들기

index_01.js : DOM 가리키는 레퍼런스

index_02.js : 액션 타입과  정의.

index_03.js : 액션 생성함수 작성.

index_04.js : 초기값 정의.

index_05.js : 리듀서 함수 정의
상태, 액션객체를 파라미터로 받아
현재상태 불변성 유지하며 내보내고,
액션 타입에 따른 새로운 상태를 반환시킨다.

index_06.js : 스토어 생성.

index_07.js : render 함수 정의하기.
상태에 따라 html 속성을 변경해준다.

index_08.js : subscribe 함수 정의하기.

index_09.js : dispatch 사용하기
DOM 요소에 이벤트 발생시 현재 상태에 액션을 발생시키도록 해줌.
파라미터로 액션 객체를 넣어준다. 액션은 스토어로 전달된다.
