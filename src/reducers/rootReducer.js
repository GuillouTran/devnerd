import { initialState } from "../initialState";
import {
  SHOW_ALL,
  SHOW_ACTIVE,
  SHOW_DONE,
  ADD_NEW_TODO
} from "../actions/types";

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_ALL: {
      // Return all the todos.
      return {
        ...state,
        todos: [...state.data]
      };
    }
    case SHOW_ACTIVE: {
      // Filter into your existing todos and return the ones that are active "uncomplete".
      const activeTodos = state.data.filter(todo => !todo.completed);
      return {
        ...state,
        todos: activeTodos
      };
    }
    case SHOW_DONE: {
      // Filter into your existing todos and return the ones that are done.
      const doneTodos = state.data.filter(todo => todo.completed);
      return {
        ...state,
        todos: doneTodos
      };
    }

    case ADD_NEW_TODO: {
      const newTodo = {
        userId: 1,
        id: state.data.length + 1,
        title: action.title,
        completed: false
      };
      const todos = [...state.data, newTodo];
      return {
        ...state,
        data: todos,
        todos
      };
    }

    default:
      return {
        ...state,
        todos: [...state.data]
      };
  }
};
