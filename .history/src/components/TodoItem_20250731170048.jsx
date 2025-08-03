import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../redux/todos';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../utils/Icons";

function TodoItem({ todo }) {
  const dispatch = useDispatch();

  return (
    <table className=' justify-center border-separate border-spacing-2 border border-gray-400 dark:border-gray-500'>
      <thead>
        <tr>
          <th className='border border-gray-300 dark:border-gray-600'>Todos</th>
          <th className='border border-gray-300 dark:border-gray-600'>buttons</th>
        </tr>
      </thead>
      <tbody>
        <tr className={`shadow-md ${todo.completed ? ' bg-green-200' : 'bg-white'}`}>
          <td className='border border-gray-300 dark:border-gray-700'>
            <span
              onClick={() => dispatch(toggleTodo(todo))}
              className={`cursor-pointer   ${todo.completed ? 'line-through' : ''}`}
            >
              {todo.text}
            </span>
          </td>
          <td className='border border-gray-300 dark:border-gray-700'>
            <button onClick={() => dispatch(deleteTodo(todo.id))} className="  text-green-500 hover:text-green-700">
              <FontAwesomeIcon icon={icons.penEdit} className=" transition" />
            </button>
            <button onClick={() => dispatch(deleteTodo(todo.id))} className="  text-red-500 hover:text-red-700">
              <FontAwesomeIcon icon={icons.Xmark} className=" transition" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default TodoItem;
