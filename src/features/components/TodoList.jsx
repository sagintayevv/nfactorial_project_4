import TodoItem from "./TodoItem";

const TodoList = ({
  data,
  onToggle,
  moveToTrash,
  restoreTodo,
  deleteForever,
  editTodo,
  activeTab,
}) => {
  return (
    <>
      <div className="grid grid-cols gap-2">
        {data.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
            moveToTrash={moveToTrash}
            restoreTodo={restoreTodo}
            deleteForever={deleteForever}
            activeTab={activeTab}
            editTodo={editTodo}
          />
        ))}
      </div>
    </>
  );
};

export default TodoList;
