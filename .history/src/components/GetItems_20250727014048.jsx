import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from '../redux/todos';


function GetItems() {
  const { todos } = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);


  return (
    {
      todos.map((todo) => (
        <div className={`flex justify-around  p-3  rounded shadow-md ${todo.completed ? 'bg-green-200' : 'bg-white'}`}>
          <span
            onClick={() => dispatch(toggleTodo(todo))}
            className={`cursor-pointer  ${todo.completed ? 'bg-green-200' : 'bg-white'}`}
          >
            {todo.text}
          </span>
        </div>
      ))
    }
  )
}

export default GetItems