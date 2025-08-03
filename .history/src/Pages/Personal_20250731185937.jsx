import TodoList from '../components/TodoList';

export default function Personal() {
  return (
    <div className='pt-32 h-screen flex-col items-center justify-center text-center bg-deepMint_400 dark:bg-deepMint_900'>
      <h2 className="text-2xl font-bold text-accent mb-4">مهام العمل</h2>
      <div className='m-auto max-w-80 mt-10'>

        <TodoList category="personal" />
      </div>
    </div>
  );
}
