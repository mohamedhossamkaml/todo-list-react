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
    <div className=' space-y-8'>
      <form onSubmit={handleSubmit} className=" flex flex-col space-y-8  justify-center mb-4">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex  p-2 border rounded"
          placeholder={`إضافة مهمة لقسم ${category}`}
        />
        <button type="submit" className="bg-cyan-500 space-y-8 rounded-full  px-4 ">أضف</button>
      </form>
      <div className=" m-auto max-w-80 mb-20 space-y-8 ">
        <table className='table-auto  w-full'>
          <thead>
            <tr>
              <th className=''>Todos</th>
              <th className=''>Actions</th>
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
