import TodoItem from './TodoItem';
import { motion, AnimatePresence } from 'framer-motion';

function TodoList({ todos }) {
  const sortedTodos = [...todos].sort((a, b) => {
    if (a.completed === b.completed) return 0;
    return a.completed ? 1 : -1; // غير المكتملة أولاً
  });

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -15 },
  };

  return (
    <motion.table
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={listVariants}
      className="w-full border-collapse"
    >
      <tbody>
        <AnimatePresence>
          {sortedTodos.length === 0 ? (
            <motion.tr variants={itemVariants}>
              <td colSpan="3" className="py-6 text-center text-muted bg-white dark:bg-deepMint_800">
                لا توجد مهام حالياً 💭
              </td>
            </motion.tr>
          ) : (
            sortedTodos.map((todo) => (
              <motion.tr key={todo.id} variants={itemVariants}>
                <TodoItem todo={todo} />
                {todo.urgent && (
                  <td className="px-2">
                    <span className="text-xs font-semibold bg-red-500 text-white rounded-full px-2 py-1">
                      عاجل 🔥
                    </span>
                  </td>
                )}
              </motion.tr>
            ))
          )}
        </AnimatePresence>
      </tbody>
    </motion.table>
  );
}

export default TodoList;
