import data from "../data";
import Tabs from "../components/Tabs";
import Button from "../components/Button";
import TodoList from "../features/components/TodoList";
import Modal from "../components/Modal";
import { todoReducer } from "../reducers/todoReduser";
import { useReducer, useState, useEffect } from "react";

const initTodos = () => {
  const saved = localStorage.getItem("data");
  return saved ? JSON.parse(saved) : [];
};

const Home = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], initTodos);

  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("todo");

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(todos));
  }, [todos]);

  // const moveToTrash = (id) => {
  //   setTodos((prev) =>
  //     prev.map((todo) => (todo.id === id ? { ...todo, deleted: true } : todo)),
  //   );
  // };

  // const restoreTodo = (id) => {
  //   setTodos((prev) =>
  //     prev.map((todo) =>
  //       todo.id === id ? { ...todo, deleted: false, completed: false } : todo,
  //     ),
  //   );
  // };

  // const deleteForever = (id) => {
  //   setTodos((prev) => prev.filter((todo) => todo.id !== id));
  // };

  // const editTodo = (id, newTitle) => {
  //   setTodos((prev) =>
  //     prev.map((todo) =>
  //       todo.id === id ? { ...todo, title: newTitle } : todo,
  //     ),
  //   );
  // };

  const filteredTodos = todos.filter((todo) => {
    switch (activeTab) {
      case "todo":
        return !todo.completed && !todo.deleted;
      case "done":
        return todo.completed && !todo.deleted;
      case "trash":
        return todo.deleted;
    }
  });

  return (
    <>
      <div className="container m-auto">
        <h1 className="text-2xl font-bold mt-20 ">Simple To Do List</h1>
        <p className="text-xs mt-5 ">
          Today is awesome day. The weather is awesome, you are awesome too!
        </p>

        <div className="main flex items-center justify-between mt-30">
          <Tabs activeTab={activeTab} onChange={setActiveTab} />
          <Button onClick={() => setOpen(true)} />
          <Modal
            open={open}
            onClose={() => setOpen(false)}
            onAdd={(text) => dispatch({ type: "ADD", payload: text })}
          />
        </div>

        <div className="todo-list mt-10">
          <div className="header mb-5 border-b border-gray-400">
            <h1 className="text-2xl mb-2">ToDo</h1>
          </div>
          <TodoList
            data={filteredTodos}
            dispatch={dispatch}
            activeTab={activeTab}
          />
        </div>
      </div>
    </>
  );
};
export default Home;
