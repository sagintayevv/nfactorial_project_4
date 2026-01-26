import { useState } from "react";
import { Trash, CheckCheck, PencilLine } from "lucide-react";

const TodoItem = ({
  todo,
  onToggle,
  moveToTrash,
  restoreTodo,
  deleteForever,
  editTodo,
  activeTab,
}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(todo.title);
  const [isEditing, setIsEditing] = useState(false);

  const save = (event) => {
    if (!value.trim()) return;

    if (event.key === "Enter") {
      editTodo(todo.id, value.trim());
      setIsEditing(false);
    }
  };

  return (
    <>
      {open && (
        <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
      )}

      <div
        className={`relative w-lg flex items-center gap-2 ${
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
            className="absolute left-0 top-8 w-52 bg-gray-200 rounded-xl shadow-lg z-50"
            onClick={(e) => e.stopPropagation()}
          >
            {activeTab !== "trash" ? (
              <>
                <button
                  onClick={() => {
                    moveToTrash(todo.id);
                    setOpen(false);
                  }}
                  className="flex items-center gap-3 w-full px-4 py-3 text-left text-sm hover:bg-gray-100 rounded-xl"
                >
                  <Trash size={16} />
                  {" Move to Trash"}
                </button>

                {!todo.completed && (
                  <button
                    onClick={() => {
                      setIsEditing(true);
                      setOpen(false);
                    }}
                    className=" flex items-center gap-3 w-full px-4 py-3 text-left text-sm hover:bg-gray-100 rounded-xl"
                  >
                    <PencilLine size={16} /> Edit
                  </button>
                )}
              </>
            ) : (
              <>
                <button
                  onClick={() => {
                    restoreTodo(todo.id);
                    setOpen(false);
                  }}
                  className=" flex items-center gap-3 w-full px-4 py-3 text-left text-sm hover:bg-gray-100"
                >
                  <CheckCheck size={16} />
                  {"Move Back To To Do"}
                </button>

                <button
                  onClick={() => {
                    deleteForever(todo.id);
                    setOpen(false);
                  }}
                  className="flex items-center gap-3 w-full px-4 py-3 text-left text-sm hover:bg-gray-100"
                >
                  <Trash size={16} />
                  {"Delete Forever"}
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

        {isEditing ? (
          <input
            autoFocus
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={save}
            className="border rounded-md px-2 py-1 text-sm w-50"
          />
        ) : (
          <span className={`w-lg ${todo.completed ? "line-through" : ""}`}>
            {todo.title}
          </span>
        )}
      </div>
    </>
  );
};

export default TodoItem;
