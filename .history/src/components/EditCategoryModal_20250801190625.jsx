import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function EditCategoryModal({ isOpen, onClose, category, onSave }) {
  const [label, setLabel] = useState('');
  const [color, setColor] = useState('');

  useEffect(() => {
    if (category) {
      setLabel(category.label);
      setColor(category.color);
    }
  }, [category]);

  const handleSave = () => {
    onSave({ ...category, label, color });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white dark:bg-deepMint_900 rounded-lg p-6 w-[400px] shadow-xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-lg font-bold mb-4 dark:text-white">✏️ تعديل التصنيف</h3>

            <label className="block mb-2 text-sm dark:text-white">الاسم</label>
            <input
              type="text"
              value={label}
              onChange={(e) => setLabel(e.target.value)}
              className="w-full mb-4 px-3 py-2 border rounded dark:bg-deepMint_800 dark:text-white"
            />

            <label className="block mb-2 text-sm dark:text-white">اللون</label>
            <input
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="w-full mb-6 h-10 rounded overflow-hidden"
            />

            <div className="flex justify-end gap-3">
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                حفظ
              </button>
              <button
                onClick={onClose}
                className="px-4 py-2 bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white rounded hover:bg-gray-400 dark:hover:bg-gray-600"
              >
                إلغاء
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default EditCategoryModal;
