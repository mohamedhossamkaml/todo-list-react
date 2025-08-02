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

  // const sortedTodos = [...todos].sort((a, b) => a.completed - b.completed);

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

  const [filterType, setFilterType] = useState('incomplete');

  const filteredTodos = [...todos].filter(todo => {
    if (filterType === 'urgent') return todo.urgent;
    if (filterType === 'completed') return todo.completed;
    if (filterType === 'incomplete') return !todo.completed;
    return true;
  });

  const sortedTodos = [...filteredTodos].sort((a, b) => {
    if (filterType === 'latest') return b.id - a.id;
    return a.completed - b.completed; // غير المكتملة أولًا
  });

  return (
    <motion.div
      variants={containerVariants}
      // initial="hidden"
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
          Add
        </motion.button>
      </form>

      <div className="flex justify-center gap-3 mb-4 flex-wrap">
        <button
          onClick={() => setFilterType('incomplete')}
          className={`px-4 py-2 rounded-full ${filterType === 'incomplete' ? 'bg-cyan-600 text-white' : 'bg-gray-200'}`}
        >
          غير مكتملة
        </button>
        <button
          onClick={() => setFilterType('completed')}
          className={`px-4 py-2 rounded-full ${filterType === 'completed' ? 'bg-green-600 text-white' : 'bg-gray-200'}`}
        >
          مكتملة
        </button>
        <button
          onClick={() => setFilterType('urgent')}
          className={`px-4 py-2 rounded-full ${filterType === 'urgent' ? 'bg-red-600 text-white' : 'bg-gray-200'}`}
        >
          العاجلة 🔥
        </button>
        <button
          onClick={() => setFilterType('latest')}
          className={`px-4 py-2 rounded-full ${filterType === 'latest' ? 'bg-purple-600 text-white' : 'bg-gray-200'}`}
        >
          الأحدث أولًا 🕒
        </button>
      </div>
      <motion.div {...tableMotion} className="m-auto mb-20 rounded-xl overflow-hidden shadow-xl">
        <table className="w-full table-auto text-center dark:bg-deepMint_900 text-deepMint_600 dark:text-deepMint_100">
          <thead className="bg-deepMint_200 dark:bg-deepMint_700 text-deepMint_500 dark:text-deepMint_100">
            <tr>
              <th className="py-3">المهمة</th>
              <th className="py-3">الإجراءات</th>
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
