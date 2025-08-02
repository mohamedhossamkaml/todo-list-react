import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTodos, addTodo, deleteTodo, toggleTodo } from '../features/todo/todoSlice';
import TodoItem from './TodoItem';

function TodoList() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput('');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a task..."
          className="flex-grow p-2 rounded border"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 rounded">
          Add
        </button>
      </form>

      <div className="space-y-2">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
}

export default TodoList;
