import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCategory, editCategory } from '../redux/cateThunks';
import { motion } from 'framer-motion';

const ModalForm = ({ onClose, initialData = null }) => {
  const [label, setLabel] = useState(initialData?.label || '');
  const [id, setId] = useState(initialData?.id || '');
  const [color, setColor] = useState(initialData?.color || 'accent');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (initialData) {
      dispatch(editCategory({ id, label, color }));
    } else {
      dispatch(addCategory({ id, label, color }));
    }
    onClose();
  };

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
    >
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md w-96 space-y-4"
      >
        <h2 className="text-lg font-bold dark:text-white">
          {initialData ? 'تعديل تصنيف' : 'إضافة تصنيف'}
        </h2>

        <input
          type="text"
          placeholder="ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
          required={!initialData}
          className="w-full p-2 rounded border dark:bg-gray-800 dark:text-white"
          disabled={!!initialData}
        />
        <input
          type="text"
          placeholder="Label"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
          className="w-full p-2 rounded border dark:bg-gray-800 dark:text-white"
        />
        <input
          type="text"
          placeholder="لون Tailwind (مثل accent أو green-500)"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="w-full p-2 rounded border dark:bg-gray-800 dark:text-white"
        />

        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            {initialData ? 'تعديل' : 'إضافة'}
          </button>
          <button
            type="button"
            onClick={onClose}
            className="bg-gray-300 dark:bg-gray-700 text-black dark:text-white px-4 py-2 rounded"
          >
            إلغاء
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default ModalForm;
