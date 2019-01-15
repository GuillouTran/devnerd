import { SHOW_ALL, SHOW_ACTIVE, SHOW_DONE } from "./types";

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
