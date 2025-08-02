import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTodos, addTodo } from '../redux/todos';
import TodoItem from './TodoItem';

function TodoList({ category }) {
  const [input, setInput] = useState('');
  const { todos } = useSelector((state) => state.todos);
  const dispatch = useDispatch();


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
    <div className=''>
      <form onSubmit={handleSubmit} className="flex justify-center gap-2 mb-4">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex p-2 border rounded"
          placeholder={`إضافة مهمة لقسم ${category}`}
        />
        <button type="submit" className="bg-buttonDark  px-4 rounded">أضف</button>
      </form>
      <div className="  space-y-2 w-full">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
}

export default TodoList;
