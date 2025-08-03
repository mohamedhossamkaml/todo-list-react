import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchTodos } from '../redux/todos'; // لو مش عاملها هساعدك فيها

function CategoryPage() {
  const { id } = useParams(); // ده الـ categoryId
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);

  useEffect(() => {
    dispatch(fetchTodos()); // لو المهام مش موجودة بالفعل
  }, [dispatch]);

  const filteredTodos = todos.filter(todo => todo.categoryId === id);

  return (
    <div className="pt-32 text-center">
      <h2 className="text-2xl font-bold text-accent mb-4">مهام القسم: {id}</h2>
      {filteredTodos.length === 0 ? (
        <p className="text-muted">لا توجد مهام في هذا القسم حتى الآن.</p>
      ) : (
        <ul className="space-y-2">
          {filteredTodos.map(todo => (
            <li key={todo.id} className="bg-white dark:bg-gray-800 p-4 rounded shadow">
              ✅ {todo.text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CategoryPage;
