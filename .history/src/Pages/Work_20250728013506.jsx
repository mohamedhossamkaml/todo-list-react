import TodoList from '../components/TodoList';

export default function Work() {
  return (
    <div className='text-center m-auto max-w-80 mt-20'>
      <h2 className="text-2xl font-bold text-accent mb-4">مهام العمل</h2>
      <TodoList category="work" />
    </div>
  );
}
