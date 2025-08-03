import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTodos, addTodo } from '../redux/todos';
import TodoItem from './TodoItem';
import GetItems from './GetItems';

function TodoList({ category }) {
  const [input, setInput] = useState('');
  const { todos } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [editingTodo, setEditingTodo] = useState(null);

  useEffect(() => {
    dispatch(fetchTodos(category));
  }, [dispatch, category]);


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
    if (input.trim()) {
      dispatch(addTodo({ text: input, category }));
      setInput('');
    }
  };

  return (
    <div className='space-y-4'>
      <form onSubmit={handleSubmit} className=" flex justify-center gap-2 mb-4">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex p-2 border rounded"
          placeholder={`إضافة مهمة لقسم ${category}`}
        />
        <button type="submit" className="bg-buttonDark space-y-3  px-4 rounded">أضف</button>
      </form>
      <div className=" m-auto max-w-80 mb-20 space-y-3 ">
        <table className='border-separate border-spacing-2 border border-slate-500 dark:border-slate-600 w-full'>
          <thead>
            <tr>
              <th className='border border-slate-300 dark:border-slate-600'>Todos</th>
              <th className='border border-slate-300 dark:border-slate-600'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TodoList;
