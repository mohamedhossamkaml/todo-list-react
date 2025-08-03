import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTodo } from '../store/todosThunks';

const EditModal = ({ todo, onClose }) => {
  const [text, setText] = useState(todo.text);
  const dispatch = useDispatch();

  const handleSave = () => {
    dispatch(editTodo({ id: todo.id, text }));
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">تعديل المهمة</h2>
        <input
          type="text"
          className="border p-2 w-full mb-4"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="flex justify-end gap-4">
          <button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded">إلغاء</button>
          <button onClick={handleSave} className="px-4 py-2 bg-blue-500 text-white rounded">حفظ</button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
