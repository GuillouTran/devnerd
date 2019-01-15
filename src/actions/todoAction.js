import {
  SHOW_ALL,
  SHOW_ACTIVE,
  SHOW_DONE,
  ADD_NEW_TODO,
  SEARCH_TODO,
  EDIT_TODO,
  REMOVE_TODO
} from "./types";

// Get all todos action.
export const getAllTodosAction = () => {
  return {
    type: SHOW_ALL
  };
};

// Get active todos action.
export const getActiveTodosAction = () => {
  return {
    type: SHOW_ACTIVE
  };
};

// Get done todos action.
export const getDoneTodosAction = () => {
  return {
    type: SHOW_DONE
  };
};

// Add new todo action.
export const addNewTodoAction = title => {
  return {
    type: ADD_NEW_TODO,
    title
  };
};

// Search for todos action.
export const searchTodosAction = value => {
  return {
    type: SEARCH_TODO,
    value
  };
};

// Edit a specific todo action.
export const editTodoAction = (title, id) => {
  return {
    type: EDIT_TODO,
    title,
    id
  };
};

// Remove a specific todo action.
export const removeTodoAction = id => {
  return {
    type: REMOVE_TODO,
    id
  };
};
