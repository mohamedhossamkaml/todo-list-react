import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories, deleteCategory } from '../redux/cateThunks';
import { selectCategories, selectCategoryStatus } from '../redux/cateSelectors';
import { motion, AnimatePresence } from 'framer-motion';

function CategoryTable({ onEdit }) {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const status = useSelector(selectCategoryStatus);
  const [confirmId, setConfirmId] = useState(null); // للتأكيد قبل الحذف

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleDelete = (id) => {
    setConfirmId(id);
  };

  const confirmDelete = () => {
    dispatch(deleteCategory(confirmId));
    setConfirmId(null);
  };

  const cancelDelete = () => {
    setConfirmId(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto p-6 bg-white dark:bg-deepMint_900 rounded shadow"
    >
      <h2 className="text-xl font-bold mb-4 dark:text-white">📁 إدارة التصنيفات</h2>

      {status === 'loading' ? (
        <p>...جارٍ التحميل</p>
      ) : categories.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">لا توجد تصنيفات حاليًا.</p>
      ) : (
        <table className="w-full text-center border border-gray-300 dark:border-gray-700 rounded overflow-hidden">
          <thead className="bg-deepMint_200 dark:bg-deepMint_700 text-white">
            <tr>
              <th className="py-2">الاسم</th>
              <th className="py-2">اللون</th>
              <th className="py-2">إجراء</th>
            </tr>
          </thead>
          <tbody>
            <AnimatePresence>
              {categories.map(({ id, label, color }) => (
                <motion.tr
                  key={id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white dark:bg-deepMint_800 border-b border-gray-200 dark:border-gray-600"
                >
                  <td className="py-2 dark:text-white">{label}</td>
                  <td>
                    <div
                      className={`w-6 h-6 rounded-full border border-gray-400`}
                      style={{ backgroundColor: color }}
                      title={color}
                    />
                  </td>
                  <td>
                    <div className="flex gap-2 justify-center">
                      <button
                        onClick={() => onEdit(id)}
                        className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                      >
                        تعديل
                      </button>
                      <button
                        onClick={() => handleDelete(id)}
                        className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600 transition"
                      >
                        حذف
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </AnimatePresence>
          </tbody>
        </table>
      )}

      {/* نافذة التأكيد */}
      {confirmId && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="mt-6 p-4 bg-red-100 dark:bg-red-800 text-red-800 dark:text-red-200 rounded shadow flex justify-between items-center"
        >
          <span>هل أنت متأكد أنك تريد حذف هذا التصنيف؟ ⚠️</span>
          <div className="flex gap-2">
            <button
              onClick={confirmDelete}
              className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
            >
              نعم، احذف
            </button>
            <button
              onClick={cancelDelete}
              className="px-3 py-1 bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white rounded hover:bg-gray-400 dark:hover:bg-gray-600"
            >
              إلغاء
            </button>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

export default CategoryTable;
