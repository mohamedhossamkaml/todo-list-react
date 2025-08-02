import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from '../redux/todos';


function GetItems() {
  const { todoس } = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);


  return (
    <div className={`flex justify-around  p-3  rounded shadow-md ${todo.completed ? 'bg-green-200' : 'bg-white'}`}>
      {todos.map((todo) => (
        <span
          onClick={() => dispatch(toggleTodo(todo))}
          className={`cursor-pointer   ${todo.completed ? 'line-through' : ''}`}
        >
          {todo.text}
        </span>
    </div>
  )
}

export default GetItems