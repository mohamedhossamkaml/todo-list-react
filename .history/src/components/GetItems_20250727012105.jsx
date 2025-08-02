import React, { useEffect } from 'react'

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
function GetItems(category) {
  return (
    <div>GetItems</div>
  )
}

export default GetItems