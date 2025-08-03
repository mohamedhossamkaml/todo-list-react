import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../redux/todos';

function TodoItem({ todo }) {
  const dispatch = useDispatch();

  return (
    <div className={`flex  p-3 items-stretch rounded shadow-md ${todo.completed ? 'bg-green-200' : 'bg-white'}`}>
      <span
        onClick={() => dispatch(toggleTodo(todo))}
        className={`cursor-pointer   ${todo.completed ? 'line-through' : ''}`}
      >
        {todo.text}
      </span>
      <button onClick={() => dispatch(deleteTodo(todo.id))} className=" text-red-500 hover:text-red-700">
        ✖
      </button>
    </div>
  );
}

export default TodoItem;
