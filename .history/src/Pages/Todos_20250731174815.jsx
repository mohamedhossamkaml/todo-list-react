import GetItems from '../components/GetItems';
import TodoList from '../components/TodoList';

export default function Todos() {
  return (
    <div className='flex-col flex items-center justify-center text-center bg-deepMint_200 dark:bg-deepMint_900 pt-20 '>
      <h2 className="text-2xl text-deepMint_800 dark:text-deepMint_100 font-bold text-accent mb-4">مهام العمل</h2>
      <div className='w-full'>
        <GetItems />
      </div>
    </div>
  );
}
