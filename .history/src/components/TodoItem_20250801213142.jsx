import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo, editTodo } from '../redux/todos';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../utils/Icons";

function TodoItem({ todo }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [isConfirmingDelete, setIsConfirmingDelete] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleToggle = () => dispatch(toggleTodo(todo));
  const handleEdit = () => {
    if (newText.trim() === '') return;
    dispatch(editTodo({ id: todo.id, text: newText }));
    setIsEditing(false);
  };
  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
    setIsConfirmingDelete(false);
  };

  return (
    <>
      <tr className={`py-4 ${todo.completed ? 'bg-green-100 dark:bg-green-900' : 'bg-white dark:bg-deepMint_800'}`}>
        <td className="py-4">
          <span
            onClick={handleToggle}
            className={`cursor-pointer ${todo.completed ? 'line-through text-gray-400' : 'text-black dark:text-white'}`}
          >
            {todo.text}
          </span>
        </td>
        <td className="py-4 flex gap-2">
          <button onClick={() => setIsEditing(true)} className="text-green-500 hover:text-green-700">
            <FontAwesomeIcon icon={icons.penEdit} />
          </button>
          <button onClick={() => setIsConfirmingDelete(true)} className="text-red-500 hover:text-red-700">
            <FontAwesomeIcon icon={icons.Xmark} />
          </button>
        </td>
      </tr>

      {/* تعديل المهمة */}
      {isEditing && (
        <div className="fixed top-0 right-0 w-80 h-screen bg-white dark:bg-deepMint_900 shadow-lg p-6 z-50 overflow-y-auto">
          <h3 className="text-xl font-bold mb-4 dark:text-white">تعديل المهمة</h3>
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            className="w-full p-2 mb-4 border rounded"
          />
          <div className="flex justify-end gap-2">
            <button onClick={() => setIsEditing(false)} className="px-4 py-2 bg-gray-300 rounded">إلغاء</button>
            <button onClick={handleEdit} className="px-4 py-2 bg-blue-500 text-white rounded">حفظ</button>
          </div>
        </div>
      )}

      {/* تأكيد الحذف */}
      {isConfirmingDelete && (
        <div className="fixed top-0 right-0 w-80 h-screen bg-white dark:bg-deepMint_900 shadow-lg p-6 z-50 overflow-y-auto">
          <h3 className="text-xl font-bold mb-4 dark:text-white">هل أنت متأكد من الحذف؟</h3>
          <div className="flex justify-end gap-2">
            <button onClick={() => setIsConfirmingDelete(false)} className="px-4 py-2 bg-gray-300 rounded">إلغاء</button>
            <button onClick={handleDelete} className="px-4 py-2 bg-red-500 text-white rounded">حذف</button>
          </div>
        </div>
      )}
    </>
  );
}

export default TodoItem;
