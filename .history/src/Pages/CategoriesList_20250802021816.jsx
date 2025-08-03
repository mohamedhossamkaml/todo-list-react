import { useSelector, useDispatch } from 'react-redux';


import { motion } from 'framer-motion';
import { deleteCategory, selectCategories, selectCategoryError, selectCategoryStatus } from '../redux/categories';

const CategoriesList = () => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const status = useSelector(selectCategoryStatus);
  const error = useSelector(selectCategoryError);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className=" flex flex-col  items-center p-4 pt-32 h-full pb-96 bg-white dark:bg-gray-900 rounded shadow-md mx-auto"
    >
      <div className='w-4/2'>
        <h2 className="text-xl font-bold mb-4 mt-20 text-gray-700 dark:text-white">📁 التصنيفات</h2>

        {status === 'loading' && <p>...جارٍ التحميل</p>}
        {status === 'failed' && <p className="text-red-500">خطأ: {error}</p>}

        <ul className="space-y-3">
          {categories.map(({ id, label, color }) => (
            <li
              key={id}
              className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 p-3 rounded-md"
            >
              <div className="flex items-center gap-3">
                <span
                  className={`w-4 h-4 rounded-full bg-${color}`}
                  title={color}
                ></span>
                <span className="font-medium text-gray-800 dark:text-gray-100">{id}</span>
                <span className="font-medium text-gray-800 dark:text-gray-100">{label}</span>
              </div>
              <button
                onClick={() => dispatch(deleteCategory(id))}
                className="text-red-500 hover:text-red-700 transition"
              >
                حذف
              </button>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default CategoriesList;
