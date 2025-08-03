import TodoList from '../components/TodoList';

export default function Todos() {
  return (
    <div className='flex justify-center text-center'>
      <h2 className="text-2xl font-bold ">مهام العمل</h2>
      <TodoList />
    </div>
  );
}
