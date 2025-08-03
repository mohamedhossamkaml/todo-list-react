

import { useState } from 'react';
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

  const [editingId, setEditingId] = useState(null);
  const [editedLabel, setEditedLabel] = useState('');
  const [editedColor, setEditedColor] = useState('');

  const handleDelete = (id) => {
    if (window.confirm('⚠️ هل أنت متأكد أنك تريد حذف هذا التصنيف؟')) {
      dispatch(deleteCategory(id));
    }
  };

  const handleEditClick = ({ id, label, color }) => {
    setEditingId(id);
    setEditedLabel(label);
    setEditedColor(color);
  };

  const handleSave = () => {
    // console.log('✨ حفظ التعديلات:', { id: editingId, label: editedLabel, color: editedColor });
    dispatch(updateCategory({ id: editingId, label: editedLabel, color: editedColor }))
    setEditingId(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col  items-center p-4 pt-32 h-full pb-96 bg-white dark:bg-deepMint_900 rounded-xl shadow-lg"
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
                {editingId === id ? (
                  <div className="flex flex-col gap-2 w-full">
                    <input
                      type="text"
                      value={editedLabel}
                      onChange={(e) => setEditedLabel(e.target.value)}
                      className="px-2 py-1 rounded border dark:bg-gray-700 dark:text-white"
                    />
                    <input
                      type="text"
                      value={editedColor}
                      onChange={(e) => setEditedColor(e.target.value)}
                      className="px-2 py-1 rounded border dark:bg-gray-700 dark:text-white"
                    />
                    <div className="flex gap-2 mt-2">
                      <button onClick={handleSave} className="text-green-600 hover:text-green-800">✅ حفظ</button>
                      <button onClick={() => setEditingId(null)} className="text-gray-500 hover:text-gray-700">❌ إلغاء</button>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="flex items-center gap-3">
                      <span className={`w-4 h-4 rounded-full bg-[${color}]`} title={color}></span>
                      <div className="flex flex-col">
                        <span className="text-sm text-gray-600 dark:text-gray-300 font-medium">{id}</span>
                        <span className="text-base text-gray-800 dark:text-white font-semibold">{label}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEditClick({ id, label, color })}
                        className="text-blue-500 hover:text-blue-700 text-sm font-medium"
                      >
                        ✏️ تعديل
                      </button>
                      <button
                        onClick={() => handleDelete(id)}
                        className="text-red-500 hover:text-red-700 text-sm font-medium"
                      >
                        حذف
                      </button>
                    </div>
                  </>
                )}
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      </div>
    </motion.div>
  );
};

export default CategoriesList;
