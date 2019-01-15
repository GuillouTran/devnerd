import { initialState } from "../initialState";
import {
  SHOW_ALL,
  SHOW_ACTIVE,
  SHOW_DONE,
  ADD_NEW_TODO,
  SEARCH_TODO,
  EDIT_TODO,
  REMOVE_TODO,
  TOGGLE_TODO
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

    // Add new todo to the store.
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

    case SEARCH_TODO: {
      // check todos if they contain the value of what the user has written.
      const todos = state.data.filter(todo =>
        todo.title.includes(action.value)
      );
      return {
        ...state,
        searchResults: todos
      };
    }

    // Edit a specific todo in the store.
    case EDIT_TODO: {
      const todos = [...state.todos];
      const foundIndex = todos.findIndex(todo => todo.id === action.id);
      todos[foundIndex].title = action.title;
      return {
        ...state,
        data: todos,
        todos
      };
    }

    case REMOVE_TODO: {
      // Get all todos except the one we removed.
      const newTodos = state.data.filter(todo => todo.id !== action.id);
      return {
        ...state,
        data: newTodos,
        todos: newTodos
      };
    }
    case TOGGLE_TODO: {
      // Make a copy of our todos.
      const todos = [...state.data];
      // Find the index of the todo that the user toggled.
      const foundIndex = todos.findIndex(todo => todo.id === action.id);
      // Update it.
      todos[foundIndex].completed = action.isCompleted;
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
