import { useReducer } from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ data, dispatch, activeTab }) => {
  return (
    <>
      <div className="grid grid-cols gap-2">
        {data.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            activeTab={activeTab}
            onToggle={() => dispatch({ type: "TOGGLE", payload: todo.id })}
            moveToTrash={() => dispatch({ type: "MOVE", payload: todo.id })}
            restoreTodo={() => dispatch({ type: "RETURN", payload: todo.id })}
            deleteForever={() => dispatch({ type: "DELETE", payload: todo.id })}
            editTodo={(id, title) =>
              dispatch({
                type: "EDIT",
                payload: { id, title },
              })
            }
          />
        ))}
      </div>
    </>
  );
};

export default TodoList;
