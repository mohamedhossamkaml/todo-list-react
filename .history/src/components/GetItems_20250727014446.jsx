import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos, toggleTodo } from '../redux/todos';


function GetItems() {
  const { todos } = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);


  return (
    <div className="space-y-3">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className={` p-3 rounded shadow-md ${todo.completed ? 'bg-green-200' : 'bg-white'}`}
        >
          <span
            onClick={() => dispatch(toggleTodo(todo))}
            className={`cursor-pointer ${todo.completed ? 'line-through' : ''}`}
          >
            {todo.text}
          </span>
        </div>
      ))}
    </div>
  )
}

export default GetItems