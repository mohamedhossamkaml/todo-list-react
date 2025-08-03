// 📦 React & Redux
import { useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// 🔧 Actions & Components
import { fetchTodos } from '../redux/todos';
import TodoList from '../components/TodoList';

function CategoryPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  // 🧠 Redux Selectors
  const todos = useSelector(state => state.todos.todos);
  // const categories = useSelector(state => state.categories.categories);

  // 📥 Load todos on mount
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  // 🧮 Filter todos by category (memoized for performance)
  const filteredTodos = useMemo(() => {
    return todos.filter(todo => todo.category === id);
  }, [todos, id]);

  // ✅ Check if category exists
  // const categoryExists = categories.some(cat => cat.id === id);

  return (
    <div className="pt-32 h-full pb-96 bg-deepMint_400 dark:bg-deepMint_800 text-center flex flex-col items-center justify-start px-4">
      <h2 className="text-2xl font-bold text-deepMint_100 dark:text-deepMint_50 mb-4">
        المهام في قسم: <span className="text-accent">{id}</span>
      </h2>

      {!categoryExists ? (
        <p className="text-red-400 font-semibold">⚠️ القسم غير موجود.</p>
      ) : filteredTodos.length === 0 ? (
        <div>
          <p className="text-muted mb-10">لا توجد مهام في هذا القسم حتى الآن.</p>
          <TodoList category={id} />
        </div>
      ) : (
        <div className="max-w-2xl w-full mt-6">
          <TodoList category={id} />
        </div>
      )}
    </div>
  );
}

export default CategoryPage;
