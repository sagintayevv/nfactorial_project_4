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
  }
}
