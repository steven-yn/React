import { Fragment } from 'react';

function App() {
  const name = '뤼왝트';
  return (
    <>
      {name === '리액트' ? (
        <h1> 리액트 맞네요 </h1>
      ) : null }
    </>
  );
}

export default App;
