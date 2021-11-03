import TodoListItem from './TodoListItem';
import './TodoListItem.scss';

const TodoList = ({ todos }) => {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoListItem todo={todo} key={todo.id} />
        //  todo /* props */ = {todo} // 지역변수
      ))}
    </div>
  );
};

export default TodoList;
