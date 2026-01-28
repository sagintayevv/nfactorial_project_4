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
          className="absolute max-w-sm right-2 top-20  md:right-40 md:top-50 z-50 sm:w-80 bg-gray-100 rounded-xl p-5 shadow-xl
                   animate-in slide-in-from-right-5 fade-in duration-200"
          onClick={(e) => e.stopPropagation()}
        >
          <h3 className="text-sm font-semibold mb-3">Add New To Do</h3>

          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Your text"
            className="w-full h-15 rounded-sm md:h-30 md:rounded-xl bg-white px-3 py-2 text-sm mb-4 "
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
