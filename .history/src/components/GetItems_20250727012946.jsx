import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from '../redux/todos';
import TodoItem from './TodoItem';





function GetItems() {
  const { todos } = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);
  return (
    <div>
      <div className=" m-auto max-w-80 mb-20 space-y-3 ">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
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
    </div>
  )
}

export default GetItems