export const CREATE_TODO = "CREATE_TODO";
export const createTodo = (text) => ({
  type: CREATE_TODO,
  payload: { text },
});

export const REMOVE_TODO = "REMOVE_TODO";
export const removeTodo = (text) => ({
  type: REMOVE_TODO,
  payload: { text },
});

export const IS_COMPLETED = "IS_COMPLETED";
export const isCompleted = (text) => ({
  type: IS_COMPLETED,
  payload: { text },
});
