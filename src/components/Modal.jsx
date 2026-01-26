import { useState } from "react";

const Modal = ({ open, onClose, onAdd }) => {
  const [text, setText] = useState("");

  if (!open) return null;

  const handleAdd = () => {
    if (!text.trim()) return;

    onAdd(text);
    setText("");
    onClose();
  };

  return (
    <>
      <div className="fixed inset-0 z-40" onClick={onClose}>
        <div
          className="fixed right-24 top-24 z-50 w-80 bg-gray-100 rounded-2xl p-5 shadow-xl
                   animate-in slide-in-from-right-5 fade-in duration-200"
          onClick={(e) => e.stopPropagation()}
        >
          <h3 className="text-sm font-semibold mb-3">Add New To Do</h3>

          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Your text"
            className="w-full h-30 rounded-xl bg-white px-3 py-2 text-sm mb-4"
          />
          <button
            onClick={handleAdd}
            className="bg-slate-900 text-white text-sm px-5 py-2 rounded-full"
          >
            Add
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
