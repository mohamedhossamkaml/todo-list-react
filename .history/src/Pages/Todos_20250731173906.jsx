import GetItems from '../components/GetItems';
import TodoList from '../components/TodoList';

export default function Todos() {
  return (
    <div className='text-center pt-20 m-auto max-w-80 mb-20'>
      <h2 className="text-2xl font-bold text-accent mb-4">مهام العمل</h2>
      <GetItems />
    </div>
  );
}
