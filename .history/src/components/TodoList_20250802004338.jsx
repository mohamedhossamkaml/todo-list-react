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

  const sortedTodos = [...todos].sort((a, b) => {
    if (a.completed === b.completed) return 0;
    return a.completed ? 1 : -1; // غير المكتملة أولاً
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', duration: 0.6 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8 px-4"
    >
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row items-center gap-4 justify-center mb-4"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 bg-deepMint_400 dark:bg-deepMint_600 p-3 border rounded-lg shadow-sm"
          placeholder={`إضافة مهمة لقسم ${category}`}
        />
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-full shadow-md transition"
        >
          أضف
        </motion.button>
      </form>

      <motion.div
        className="m-auto mb-20 rounded-xl overflow-hidden shadow-xl"
        animate={{ y: [0, -4, 0] }}
        transition={{
          repeat: Infinity,
          repeatType: 'loop',
          duration: 2,
          ease: 'easeInOut'
        }}
      >
        <table className="table-auto w-full text-center dark:bg-deepMint_900 text-deepMint_600 dark:text-deepMint_100">
          <thead className="bg-deepMint_200 dark:bg-deepMint_700 text-deepMint_500 dark:text-deepMint_100">
            <tr>
              <th className="py-2">المهمة</th>
              <th className="py-2">إجراء</th>
              <th className="py-2">الحالة</th>
            </tr>
          </thead>
          <tbody>
            <AnimatePresence>
              {sortedTodos.length === 0 ? (
                <motion.tr
                  variants={itemVariants}
                  className="bg-white dark:bg-deepMint_800 text-muted"
                >
                  <td colSpan="3" className="py-6">لا توجد مهام بعد 💭</td>
                </motion.tr>
              ) : (
                sortedTodos.map((todo) => (
                  <motion.tr key={todo.id} variants={itemVariants} initial="hidden" animate="visible" exit="exit">
                    <TodoItem todo={todo} />
                    <td>
                      {todo.urgent && (
                        <span className="bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded-full">
                          عاجل 🔥
                        </span>
                      )}
                    </td>
                  </motion.tr>
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
