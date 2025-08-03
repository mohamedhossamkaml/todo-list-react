import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTodos, addTodo } from '../redux/todos';
import TodoItem from './TodoItem';
import { motion } from 'framer-motion';

function TodoList({ category }) {
  const [input, setInput] = useState('');
  const { todos } = useSelector((state) => state.todos);
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

  // ✨ أنميشن دخول الصفحة
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', duration: 0.6 }
    }
  };

  // ✨ أنميشن مستمر للتيبول
  const tableAnimation = {
    animate: {
      y: [0, -4, 0],
    },
    transition: {
      repeat: Infinity,
      repeatType: 'loop',
      duration: 2,
      ease: 'easeInOut'
    }
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
          className="flex-1 bg-deepMint_100 dark:bg-deepMint_600 p-3 border rounded-lg shadow-sm text-deepMint_800 dark:text-white"
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
        {...tableAnimation}
        className="m-auto mb-20 rounded-xl overflow-hidden shadow-xl"
      >
        <table className="table-auto w-full text-center bg-white dark:bg-deepMint_900 text-deepMint_600 dark:text-deepMint_100">
          <thead className="bg-deepMint_200 dark:bg-deepMint_700">
            <tr>
              <th className="py-2">Todos</th>
              <th className="py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
          </tbody>
        </table>
      </motion.div>
    </motion.div>
  );
}

export default TodoList;
