import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo, editTodo } from '../redux/todos';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../utils/Icons";
import { motion, AnimatePresence } from 'framer-motion';
import FullscreenModal from './FullscreenModal';
import { toggleUrgent } from '../redux/categories/cateSlice';

function TodoItem({ todo }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [isConfirmingDelete, setIsConfirmingDelete] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleToggle = () => dispatch(toggleTodo(todo));
  const handleEdit = () => {
    if (newText.trim()) {
      dispatch(editTodo({ id: todo.id, text: newText }));
      setIsEditing(false);
    }
  };
  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
    setIsConfirmingDelete(false);
  };
  const handleToggleUrgent = () => {
    dispatch(toggleUrgent(todo.id));
  };

  const rowClasses = `${todo.completed
    ? 'bg-green-100 dark:bg-green-300'
    : todo.urgent
      ? 'bg-red-100 dark:bg-red-300'
      : 'bg-white dark:bg-deepMint_800'
    }`;

  return (
    <>
      <motion.tr
        layout
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        className={rowClasses}
      >
        <td className="py-4">
          <span
            onClick={handleToggle}
            className={`cursor-pointer ${todo.completed ? 'line-through text-gray-400' : 'text-black dark:text-white'} font-medium`}
          >
            {todo.text}
          </span>
          {todo.urgent && (
            <span className="ml-2 bg-red-600 text-white text-xs px-2 py-1 rounded-full">عاجل 🔥</span>
          )}
        </td>

        <td className="py-4 flex gap-2 justify-center">
          <button onClick={() => setIsEditing(true)} className="text-green-500 hover:text-green-700">
            <FontAwesomeIcon icon={icons.penEdit} />
          </button>
          <button onClick={() => setIsConfirmingDelete(true)} className="text-red-500 hover:text-red-700">
            <FontAwesomeIcon icon={icons.Xmark} />
          </button>
          <button
            onClick={handleToggleUrgent}
            className={`text-sm px-3 py-1 rounded-full transition font-medium ${todo.urgent ? 'bg-red-600 text-white hover:bg-red-700' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
              }`}
          >
            {todo.urgent ? 'غير عاجل' : 'تحديد كعاجل'}
          </button>
        </td>
      </motion.tr>

      {/* نافذة التعديل */}
      <AnimatePresence>
        {isEditing && (
          <FullscreenModal>
            <motion.div
              key="edit-fullscreen-modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-1 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white dark:bg-deepMint_900 p-6 rounded-xl shadow-2xl w-full max-w-md mx-4"
              >
                <h3 className="text-xl font-bold mb-4 dark:text-white">تعديل المهمة</h3>
                <input
                  value={newText}
                  onChange={(e) => setNewText(e.target.value)}
                  className="w-full p-2 mb-4 border rounded"
                />
                <div className="flex justify-end gap-2">
                  <button onClick={() => setIsEditing(false)} className="px-4 py-2 bg-gray-300 rounded">إلغاء</button>
                  <button onClick={handleEdit} className="px-4 py-2 bg-blue-500 text-white rounded">حفظ</button>
                </div>
              </motion.div>
            </motion.div>
          </FullscreenModal>
        )}
      </AnimatePresence>

      {/* نافذة تأكيد الحذف */}
      <AnimatePresence>
        {isConfirmingDelete && (
          <FullscreenModal>
            <motion.div
              key="confirm-delete-modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-1 z-50 flex flex-col items-center justify-center bg-black/30 backdrop-blur-sm"
            >
              <h3 className="text-xl font-bold mb-4 dark:text-white">هل أنت متأكد من الحذف؟</h3>
              <div className="flex justify-end gap-2">
                <button onClick={() => setIsConfirmingDelete(false)} className="px-4 py-2 bg-gray-300 rounded">إلغاء</button>
                <button onClick={handleDelete} className="px-4 py-2 bg-red-500 text-white rounded">حذف</button>
              </div>
            </motion.div>
          </FullscreenModal>
        )}
      </AnimatePresence>
    </>
  );
}

export default TodoItem;
