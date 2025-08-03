import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from '../redux/todos';
import TodoItem from './TodoItem';





function GetItems() {
  const { todo } = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);
  return (
    <div className={`flex justify-around  p-3  rounded shadow-md ${todo.completed ? 'bg-green-200' : 'bg-white'}`}>
      <span
        onClick={() => dispatch(toggleTodo(todo))}
        className={`cursor-pointer   ${todo.completed ? 'line-through' : ''}`}
      >
        {todo.text}
      </span>
      <button onClick={() => dispatch(deleteTodo(todo.id))} className="  text-red-500 hover:text-red-700">
        ✖
      </button>
    </div>
  )
}

export default GetItems