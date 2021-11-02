import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import React from 'react';

const App = () => {
  return (
    <TodoTemplate>
      <TodoInsert />
    </TodoTemplate>
  );
};

export default App;
