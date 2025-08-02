// // 📦 React & Redux
// import { useEffect, useMemo } from 'react';
// import { useParams } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';

// // 🔧 Actions & Components
// import { fetchTodos } from '../redux/todos';
// import TodoList from '../components/TodoList';

// function CategoryPage() {
//   const { id } = useParams();
//   const dispatch = useDispatch();

//   // 🧠 Get todos & categories from Redux store
//   const todos = useSelector(state => state.todos.todos);
//   const categories = useSelector(state => state.categories.categories);

//   // 🟡 Check if categories have finished loading
//   const isCategoryReady = categories.length > 0;

//   // ✅ Check if current category exists (after load)
//   const categoryExists = isCategoryReady && categories.some(cat => cat.id === id);

//   // 🚀 Load todos on component mount
//   useEffect(() => {
//     dispatch(fetchTodos());
//   }, [dispatch]);

//   // 🧮 Filter todos by category (memoized for efficiency)
//   const filteredTodos = useMemo(() => {
//     return todos.filter(todo => todo.category === id);
//   }, [todos, id]);

//   return (
//     <div className="pt-32 h-full pb-96 bg-deepMint_400 dark:bg-deepMint_800 text-center flex flex-col items-center justify-start px-4">
//       <h2 className="text-2xl font-bold text-deepMint_100 dark:text-deepMint_50 mb-4">
//         المهام في قسم: <span className="text-accent">{id}</span>
//       </h2>

//       {!isCategoryReady ? (
//         <p className="text-muted">🔄 جاري تحميل الفئات...</p>
//       ) : !categoryExists ? (
//         <p className="text-red-400 font-semibold">⚠️ القسم غير موجود.</p>
//       ) : filteredTodos.length === 0 ? (
//         <div>
//           <p className="text-muted mb-10">لا توجد مهام في هذا القسم حتى الآن.</p>
//           <TodoList category={id} />
//         </div>
//       ) : (
//         <div className="max-w-2xl w-full mt-6">
//           <TodoList category={id} />
//         </div>
//       )}
//     </div>
//   );
// }

// export default CategoryPage;
