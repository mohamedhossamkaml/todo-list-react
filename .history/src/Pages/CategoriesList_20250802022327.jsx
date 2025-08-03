

import { useSelector, useDispatch } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import {
  deleteCategory,
  selectCategories,
  selectCategoryStatus,
  selectCategoryError
} from '../redux/categories';

const CategoriesList = () => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const status = useSelector(selectCategoryStatus);
  const error = useSelector(selectCategoryError);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className=" flex flex-col  items-center p-4 pt-32 h-full pb-96 bg-white dark:bg-deepMint_900 rounded-xl shadow-lg"
    >
      <div className='w-1/2'>
        <h2 className="text-2xl font-bold mb-6 text-deepMint_700 dark:text-white text-center">📁 التصنيفات</h2>

        {status === 'loading' && <p className="text-center text-gray-500 dark:text-gray-300">...جارٍ التحميل</p>}
        {status === 'failed' && <p className="text-red-500 text-center">خطأ: {error}</p>}

        <ul className="space-y-4">
          <AnimatePresence>
            {categories.map(({ id, label, color }) => (
              <motion.li
                key={id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="flex items-center justify-between p-4 bg-gray-100 dark:bg-gray-800 rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <span className={`w-4 h-4 rounded-full bg-[${color}]`} title={color}></span>
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-600 dark:text-gray-300 font-medium">{id}</span>
                    <span className="text-base text-gray-800 dark:text-white font-semibold">{label}</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => console.log('تعديل التصنيف:', id)}
                    className="text-blue-500 hover:text-blue-700 text-sm font-medium"
                  >
                    ✏️ تعديل
                  </button>

                  <button
                    onClick={() => dispatch(deleteCategory(id))}
                    className="text-red-500 hover:text-red-700 text-sm font-medium"
                  >
                    حذف
                  </button>
                </div>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      </div>
    </motion.div>
  );
};

export default CategoriesList;
