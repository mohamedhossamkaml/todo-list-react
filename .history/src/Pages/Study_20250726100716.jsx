import TodoList from '../components/TodoList';

export default function Study() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-accent mb-4">مهام العمل</h2>
      <TodoList category="study" />
    </div>
  );
}
