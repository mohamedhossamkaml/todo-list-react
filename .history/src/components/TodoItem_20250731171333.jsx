import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo, editTodo } from '../redux/todos'; // تأكد إنك عامل export لـ editTodo
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../utils/Icons";

function TodoItem({ todo }) {
  const dispatch = useDispatch();

  const [showEdit, setShowEdit] = useState(false);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = () => {
    dispatch(editTodo({ id: todo.id, text: newText }));
    setShowEdit(false);
  };

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
    setShowConfirmDelete(false);
  };

  return (
    <div className="relative">
      <tr className={`shadow-md ${todo.completed ? 'bg-green-200' : 'bg-white'}`}>
        <td className='border border-gray-300 dark:border-gray-700'>
          <span
            onClick={() => dispatch(toggleTodo(todo))}
            className={`cursor-pointer ${todo.completed ? 'line-through text-gray-500' : 'text-black'}`}
          >
            {todo.text}
          </span>
        </td>
        <td className='border border-gray-300 dark:border-gray-700'>
          <button
            onClick={() => setShowEdit(true)}
            className="text-green-500 hover:text-green-700 mr-2"
          >
            <FontAwesomeIcon icon={icons.penEdit} />
          </button>
          <button
            onClick={() => setShowConfirmDelete(true)}
            className="text-red-500 hover:text-red-700"
          >
            <FontAwesomeIcon icon={icons.Xmark} />
          </button>
        </td>
      </tr>
      {/* Slider تعديل */}
      {showEdit && (
        <div className="fixed top-0  w-80 bg-white dark:bg-deepMint_800 shadow-lg p-6 z-50">
          <h3 className="text-xl font-bold mb-4 dark:text-white">تعديل المهمة</h3>
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            className="w-full p-2 mb-4 border rounded"
          />
          <div className="flex justify-between">
            <button onClick={() => setShowEdit(false)} className="px-4 py-2 bg-gray-300 rounded">إلغاء</button>
            <button onClick={handleEdit} className="px-4 py-2 bg-blue-500 text-white rounded">حفظ</button>
          </div>
        </div>
      )}

      {/* Slider تأكيد الحذف */}
      {showConfirmDelete && (
        <div className="fixed top-0   w-80 bg-white dark:bg-deepMint_800 shadow-lg p-6 z-50">
          <h3 className="text-xl font-bold mb-4 dark:text-white">هل أنت متأكد من الحذف؟</h3>
          <div className="flex justify-between">
            <button onClick={() => setShowConfirmDelete(false)} className="px-4 py-2 bg-gray-300 rounded">إلغاء</button>
            <button onClick={handleDelete} className="px-4 py-2 bg-red-500 text-white rounded">حذف</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TodoItem;
