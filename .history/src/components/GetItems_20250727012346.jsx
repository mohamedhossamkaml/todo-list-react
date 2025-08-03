import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';





// const handleSubmit = (e) => {
//   e.preventDefault();
//   console.log('Form submitted');
//   if (input.trim()) {
//     dispatch(addTodo({ text: input, category }));
//     setInput('');
//   }
// };
function GetItems() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodos(category));
  }, [dispatch, category]);
  return (
    <div>
      <div className=" m-auto max-w-80 mb-20 space-y-3 ">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  )
}

export default GetItems