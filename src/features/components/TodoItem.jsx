import { useState } from "react";

const TodoItem = ({
  todo,
  onToggle,
  moveToTrash,
  restoreTodo,
  deleteForever,
  activeTab,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open && (
        <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
      )}

      <div
        className={`relative bg-gray- flex items-center gap-2 ${
          todo.completed ? "bg-gray-200 text-gray-400" : ""
        }`}
      >
        <button
          onClick={(e) => {
            e.stopPropagation();
            setOpen((prev) => !prev);
          }}
          className="p-1 rounded-full hover:bg-gray-100 "
        >
          ⋮
        </button>
        {open && (
          <div
            className="absolute left-0 top-8 w-52 bg-white rounded-xl shadow-lg z-50"
            onClick={(e) => e.stopPropagation()}
          >
            {activeTab !== "trash" ? (
              <button
                onClick={() => {
                  moveToTrash(todo.id);
                  setOpen(false);
                }}
                className="w-full px-4 py-3 text-left text-sm hover:bg-gray-100 rounded-xl"
              >
                🗑 Move to Trash
              </button>
            ) : (
              <>
                <button
                  onClick={() => {
                    restoreTodo(todo.id);
                    setOpen(false);
                  }}
                  className="w-full px-4 py-3 text-left text-sm hover:bg-gray-100"
                >
                  ✔ Move Back To To Do
                </button>

                <button
                  onClick={() => {
                    deleteForever(todo.id);
                    setOpen(false);
                  }}
                  className="w-full px-4 py-3 text-left text-sm hover:bg-gray-100"
                >
                  🗑 Delete Forever
                </button>
              </>
            )}
          </div>
        )}

        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="w-4 h-4 accent-violet-700"
        />

        <span className={`${todo.completed ? "line-through" : ""}`}>
          {todo.title}
        </span>
      </div>
    </>
  );
};

export default TodoItem;
