import TodoItem from "./TodoItem";

const TodoList = ({
  data,
  onToggle,
  moveToTrash,
  restoreTodo,
  deleteForever,
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
          />
        ))}
      </div>
    </>
  );
};

export default TodoList;
