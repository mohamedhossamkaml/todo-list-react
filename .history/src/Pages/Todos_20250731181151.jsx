import GetItems from '../components/GetItems';
import TodoList from '../components/TodoList';

export default function Todos() {
  return (
    <div className='flex-col py-16 px-6 flex items-center justify-center text-center bg-deepMint_400 dark:bg-deepMint_900 pt-20 '>
      <h2 className="text-2xl  text-deepMint_100 dark:text-deepMint_50 font-bold text-accent mb-4">مهام العمل</h2>
      <div className='w-96'>
        <GetItems />
      </div>
    </div>
  );
}
