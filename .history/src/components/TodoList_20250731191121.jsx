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
      <form onSubmit={handleSubmit} className=" flex flex-col space-y-4  justify-center mb-4">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex  bg-deepMint_100 dark:bg-deepMint_600  p-2 border rounded"
          placeholder={`إضافة مهمة لقسم ${category}`}
        />
        <button type="submit" className="bg-cyan-500 p-2 space-y-4 rounded-full  ">أضف</button>
      </form>
      <div className=" m-auto  mb-20 space-y-8 ">
        <table className='table-auto text-deepMint_500  rounded shadow-md w-full'>
          <thead>
            <tr>
              <th>Todos</th>
              <th >Actions</th>
            </tr>
          </thead>
          <tbody >
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
