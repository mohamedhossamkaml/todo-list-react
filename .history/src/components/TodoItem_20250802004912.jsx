// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { toggleTodo, deleteTodo, editTodo } from '../redux/todos';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { icons } from "../utils/Icons";
// import { motion, AnimatePresence } from 'framer-motion';

// function TodoItem({ todo }) {
//   const dispatch = useDispatch();
//   const [isEditing, setIsEditing] = useState(false);
//   const [isConfirmingDelete, setIsConfirmingDelete] = useState(false);
//   const [newText, setNewText] = useState(todo.text);

//   const handleToggle = () => dispatch(toggleTodo(todo));
//   const handleEdit = () => {
//     if (newText.trim()) {
//       dispatch(editTodo({ id: todo.id, text: newText }));
//       setIsEditing(false);
//     }
//   };
//   const handleDelete = () => {
//     dispatch(deleteTodo(todo.id));
//     setIsConfirmingDelete(false);
//   };

//   return (
//     <>
//       <AnimatePresence>
//         <motion.tr
//           layout
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -10 }}
//           className={`py-4 ${todo.completed ? 'bg-green-100 dark:bg-green-300' : 'bg-white dark:bg-deepMint_800'}`}
//         >
//           <td className="py-4">
//             <span
//               onClick={handleToggle}
//               className={`cursor-pointer ${todo.completed ? 'line-through text-gray-400' : 'text-black dark:text-white'}`}
//             >
//               {todo.text}
//             </span>
//           </td>
//           <td className="py-4 flex gap-2">
//             <button onClick={() => setIsEditing(true)} className="text-green-500 hover:text-green-700">
//               <FontAwesomeIcon icon={icons.penEdit} />
//             </button>
//             <button onClick={() => setIsConfirmingDelete(true)} className="text-red-500 hover:text-red-700">
//               <FontAwesomeIcon icon={icons.Xmark} />
//             </button>
//           </td>
//         </motion.tr>
//       </AnimatePresence>

//       {/* نافذة التعديل */}
//       <AnimatePresence>
//         {isEditing && (
//           <motion.div
//             key="edit-modal"
//             initial={{ x: 100, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             exit={{ x: 100, opacity: 0 }}
//             transition={{ duration: 0.3 }}
//             className="fixed top-0 right-0 w-80 h-screen bg-white dark:bg-deepMint_900 shadow-lg p-6 z-50"
//           >
//             <h3 className="text-xl font-bold mb-4 dark:text-white">تعديل المهمة</h3>
//             <input
//               type="text"
//               value={newText}
//               onChange={(e) => setNewText(e.target.value)}
//               className="w-full p-2 mb-4 border rounded"
//             />
//             <div className="flex justify-end gap-2">
//               <button onClick={() => setIsEditing(false)} className="px-4 py-2 bg-gray-300 rounded">إلغاء</button>
//               <button onClick={handleEdit} className="px-4 py-2 bg-blue-500 text-white rounded">حفظ</button>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* نافذة تأكيد الحذف */}
//       <AnimatePresence>
//         {isConfirmingDelete && (
//           <motion.div
//             key="delete-modal"
//             initial={{ x: 100, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             exit={{ x: 100, opacity: 0 }}
//             transition={{ duration: 0.3 }}
//             className="fixed top-0 right-0 w-80 h-screen bg-white dark:bg-deepMint_900 shadow-lg p-6 z-50"
//           >
//             <h3 className="text-xl font-bold mb-4 dark:text-white">هل أنت متأكد من الحذف؟</h3>
//             <div className="flex justify-end gap-2">
//               <button onClick={() => setIsConfirmingDelete(false)} className="px-4 py-2 bg-gray-300 rounded">إلغاء</button>
//               <button onClick={handleDelete} className="px-4 py-2 bg-red-500 text-white rounded">حذف</button>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }

// export default TodoItem;

import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTodos, addTodo, selectTodos } from '../redux/todos';
import TodoItem from './TodoItem';
import { motion, AnimatePresence } from 'framer-motion';

function TodoList({ category }) {
  const [input, setInput] = useState('');
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos(category));
  }, [dispatch, category]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      dispatch(addTodo({ text: input, category }));
      setInput('');
    }
  };

  const sortedTodos = [...todos].sort((a, b) => a.completed - b.completed);

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', damping: 12 }
    }
  };

  const tableMotion = {
    animate: { y: [0, -4, 0] },
    transition: { repeat: Infinity, duration: 2, ease: 'easeInOut' }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-10 px-4"
    >
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row items-center gap-4 justify-center"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 bg-deepMint_400 dark:bg-deepMint_600 p-3 border rounded-lg shadow-sm"
          placeholder={`إضافة مهمة لقسم ${category}`}
        />
        <motion.button
          type="submit"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.95 }}
          className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-full shadow-md"
        >
          أضف
        </motion.button>
      </form>

      <motion.div {...tableMotion} className="m-auto mb-20 rounded-xl overflow-hidden shadow-xl">
        <table className="w-full table-auto text-center dark:bg-deepMint_900 text-deepMint_600 dark:text-deepMint_100">
          <thead className="bg-deepMint_200 dark:bg-deepMint_700 text-deepMint_500 dark:text-deepMint_100">
            <tr>
              <th className="py-3">المهمة</th>
              <th className="py-3">الإجراءات</th>
              <th className="py-3">الحالة</th>
            </tr>
          </thead>
          <tbody>
            <AnimatePresence>
              {sortedTodos.length === 0 ? (
                <motion.tr
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <td colSpan="3" className="py-8 text-muted">
                    لا توجد مهام حاليًا 💭
                  </td>
                </motion.tr>
              ) : (
                sortedTodos.map((todo) => (
                  <TodoItem key={todo.id} todo={todo} />
                ))
              )}
            </AnimatePresence>
          </tbody>
        </table>
      </motion.div>
    </motion.div>
  );
}

export default TodoList;
