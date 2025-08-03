

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo, editTodo } from '../redux/todos';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../utils/Icons";
import { motion, AnimatePresence } from 'framer-motion';

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

  return (
    <>
      <motion.tr
        layout
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        className={`${todo.completed ? 'bg-green-100 dark:bg-green-300' : 'bg-white dark:bg-deepMint_800'}`}
      >
        <td className="py-4">
          <span
            onClick={handleToggle}
            className={`cursor-pointer ${todo.completed ? 'line-through text-gray-400' : 'text-black dark:text-white'}`}
          >
            {todo.text}
          </span>
        </td>
        <td className="py-4 flex gap-3 justify-center">
          <button onClick={() => setIsEditing(true)} className="text-green-500 hover:text-green-700">
            <FontAwesomeIcon icon={icons.penEdit} />
          </button>
          <button onClick={() => setIsConfirmingDelete(true)} className="text-red-500 hover:text-red-700">
            <FontAwesomeIcon icon={icons.Xmark} />
          </button>
        </td>
        <td className="py-4">
          {todo.urgent && (
            <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-full">عاجل 🔥</span>
          )}
        </td>
      </motion.tr>

      {/* نافذة التعديل */}
      {/* <AnimatePresence>
        {isEditing && (
          <motion.div
            key="edit-modal"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 w-80 h-screen bg-white dark:bg-deepMint_900 p-6 shadow-lg z-50"
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
        )}
      </AnimatePresence> */}

      <AnimatePresence>
        {isEditing && (
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
        )}
      </AnimatePresence>

      {/* نافذة تأكيد الحذف */}
      <AnimatePresence>
        {isConfirmingDelete && (
          <motion.div
            key="delete-modal"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 w-80 h-screen bg-white dark:bg-deepMint_900 p-6 shadow-lg z-50"
          >
            <h3 className="text-xl font-bold mb-4 dark:text-white">هل أنت متأكد من الحذف؟</h3>
            <div className="flex justify-end gap-2">
              <button onClick={() => setIsConfirmingDelete(false)} className="px-4 py-2 bg-gray-300 rounded">إلغاء</button>
              <button onClick={handleDelete} className="px-4 py-2 bg-red-500 text-white rounded">حذف</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default TodoItem;
