import { Fragment } from 'react';

function App() {
  const name = '삼항 연산자';
  return (
    <>
      {name === '삼항 연산자' ? (
        <h1> 삼항 연산자 입니다. </h1>
      ) : (
        <h2> 삼항 연산자가 아닙니다. </h2>

      )}
    </>
  );
}

export default App;
