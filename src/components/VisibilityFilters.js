import React from "react";
import { connect } from "react-redux";

import { getAllTodosAction } from "../actions/todoAction";
import { getActiveTodosAction } from "../actions/todoAction";
import { getDoneTodosAction } from "../actions/todoAction";
import { VisibilityFiltersStyle } from "../styles";

const VisibilityFilters = props => {
  // Get all todos.
  const getAllTodos = () => {
    props.allTodos();
  };

  // Get active todos "uncompleted ones".
  const getActiveTodos = () => {
    props.activeTodos();
  };

  // Get done todos "completed ones".
  const getDoneTodos = () => {
    props.doneTodos();
  };

  // This function return an object with the count of all, active, done todos.
  const count = () => {
    const { todos } = props;
    return {
      all: todos.length,
      active: todos.filter(todo => !todo.completed).length,
      done: todos.filter(todo => todo.completed).length
    };
  };
  return (
    <VisibilityFiltersStyle>
      <div className="todo-filter">
        <input
          className="radio-btn"
          id="all"
          type="radio"
          name="filters"
          checked="checked"
          onChange={getAllTodos}
        />
        <label htmlFor="all">All</label>
        <span>{count().all}</span>
      </div>
      <div className="todo-filter">
        <input
          className="radio-btn"
          id="active"
          type="radio"
          name="filters"
          onChange={getActiveTodos}
        />
        <label htmlFor="active">Active</label>
        <span>{count().active}</span>
      </div>
      <div className="todo-filter">
        <input
          className="radio-btn"
          id="done"
          type="radio"
          name="filters"
          onChange={getDoneTodos}
        />
        <label htmlFor="done">Done</label>
        <span>{count().done}</span>
      </div>
    </VisibilityFiltersStyle>
  );
};

const mapStateToProps = ({ data }) => {
  return {
    todos: data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    allTodos: () => dispatch(getAllTodosAction()),
    activeTodos: () => dispatch(getActiveTodosAction()),
    doneTodos: () => dispatch(getDoneTodosAction())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VisibilityFilters);
