import { initialState } from "../initialState";

export const rootReducer = (state = initialState, action) => {
  return {
    ...state,
    todos: [...state.data]
  };
};
