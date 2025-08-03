import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../redux/todos';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../utils/Icons";

function TodoItem({ todo }) {
  const dispatch = useDispatch();

  return (
    <div className={`flex justify-around  p-3  rounded shadow-md ${todo.completed ? 'bg-green-200' : 'bg-white'}`}>
      <span
        onClick={() => dispatch(toggleTodo(todo))}
        className={`cursor-pointer   ${todo.completed ? 'line-through' : ''}`}
      >
        {todo.text}
      </span>
      <button onClick={() => dispatch(deleteTodo(todo.id))} className="  text-red-500 hover:text-red-700">
        <FontAwesomeIcon icon={icons.Xmark} className="hover:text-pink-500 transition" />
      </button>
      <button onClick={() => dispatch(deleteTodo(todo.id))} className="  text-red-500 hover:text-red-700">
        <FontAwesomeIcon icon={icons.penEdit} className="hover:text-pink-500 transition" />
      </button>
    </div>
  );
}

export default TodoItem;
