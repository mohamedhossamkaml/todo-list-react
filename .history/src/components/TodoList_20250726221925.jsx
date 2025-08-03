// import { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchTodos, addTodo } from '../redux/todos';
// import TodoItem from './TodoItem';

// function TodoList({ category }) {
//   const [input, setInput] = useState('');
//   const { todos } = useSelector((state) => state.todos);
//   const dispatch = useDispatch();
//   console.log("RENDER")

//   // useEffect(() => {
//   //   dispatch(fetchTodos(category));
//   // }, [dispatch, category]);

//   const prevCategory = useRef();

//   useEffect(() => {
//     if (prevCategory.current !== category) {
//       dispatch(fetchTodos(category));
//       prevCategory.current = category;
//     }
//   }, [category, dispatch]);

//   console.log("CATEGORY:", category);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted');
//     if (input.trim()) {
//       dispatch(addTodo({ text: input, category }));
//       setInput('');
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
//         <input
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           className="flex-grow p-2 border rounded"
//           placeholder={`إضافة مهمة لقسم ${category}`}
//         />
//         <button type="submit" className="bg-buttonDark text-white px-4 rounded">أضف</button>
//       </form>
//       <div className="space-y-2">
//         {todos.map((todo) => (
//           <TodoItem key={todo.id} todo={todo} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default TodoList;
