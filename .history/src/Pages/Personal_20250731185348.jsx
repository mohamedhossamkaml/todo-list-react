import TodoList from '../components/TodoList';

export default function Personal() {
  return (
    <div className='pt-40 h-screen flex-col items-center justify-center text-center   bg-deepMint_500 dark:bg-deepMint_800'>
      <h2 className="text-2xl font-bold text-accent mb-4">مهام العمل</h2>
      <TodoList category="personal" />
    </div>
  );
}
