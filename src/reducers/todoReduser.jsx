export function todoReducer(state, action) {
  switch (action.type) {
    case "INIT":
      return action.payload;

    case "ADD": {
      return [
        ...state,
        {
          id: Date.now(),
          title: action.payload.trim(),
          completed: false,
          deleted: false,
        },
      ];
    }
    case "TOGGLE": {
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo,
      );
    }
    case "MOVE": {
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, deleted: true } : todo,
      );
    }
    case "RETURN": {
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, deleted: false, completed: false }
          : todo,
      );
    }
    case "DELETE": {
      return state.filter((todo) => todo.id !== action.payload);
    }
    case "EDIT": {
      const { id, title } = action.payload;
      return state.map((todo) => (todo.id === id ? { ...todo, title } : todo));
    }
  }
}
