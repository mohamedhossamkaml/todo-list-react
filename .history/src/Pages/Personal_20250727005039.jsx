import TodoList from '../components/TodoList';

export default function Personal() {
  return (
    <div className=' flex text-center '>
      <h2 className="text-2xl font-bold text-accent mb-4">مهام العمل</h2>
      <TodoList category="personal" />
    </div>
  );
}
