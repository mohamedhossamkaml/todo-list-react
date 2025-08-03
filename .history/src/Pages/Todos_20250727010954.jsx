import TodoList from '../components/TodoList';

export default function Todos() {
  return (
    <div className='flex items-center  text-center'>
      <h2 className="text-2xl flex justify-center font-bold text-accent mb-4">مهام العمل</h2>
      <TodoList />
    </div>
  );
}
