import { CREATE_TODO, REMOVE_TODO, IS_COMPLETED } from "./actions";

export const todos = (state = [], action) => {
  const { type, payload } = action;

  //   console.log(action);

  switch (type) {
    case CREATE_TODO: {
      const { text } = payload;
      const newTodo = {
        text,
        isCompleted: false,
      };
      return state.concat(newTodo);
    }
    case REMOVE_TODO: {
      const { text } = payload;
      return state.filter((todo) => todo.text !== text);
    }
    case IS_COMPLETED: {
      const { text } = payload;

      return state.map((todo) =>
        todo.text === text ? { ...todo, isCompleted: !todo.isCompleted } : todo
      );
    }
    default:
      return state;
  }
};
