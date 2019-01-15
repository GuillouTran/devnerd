import React, { Component } from "react";
import { connect } from "react-redux";

import { getAllTodosAction } from "../actions/todoAction";
import { getActiveTodosAction } from "../actions/todoAction";
import { getDoneTodosAction } from "../actions/todoAction";

class VisibilityFilters extends Component {
  state = {
    all: null,
    active: null,
    done: null
  };

  componentDidMount = () => {
    // Get todos out of the props using destructuring.
    const { todos } = this.props;

    // count all todos.
    const all = todos.length;

    // count active todos.
    const active = todos.filter(todo => !todo.completed).length;

    // count done todos.
    const done = todos.filter(todo => todo.completed).length;

    this.setState({ all, active, done });
  };
  // Get all todos.
  getAllTodos = () => {
    this.props.allTodos();
  };

  // Get active todos "uncompleted ones".
  getActiveTodos = () => {
    this.props.activeTodos();
  };

  // Get done todos "completed ones".
  getDoneTodos = () => {
    this.props.doneTodos();
  };

  render() {
    const { all, active, done } = this.state;
    return (
      <div>
        <div className="todo-filter">
          <input
            id="all"
            type="radio"
            name="filters"
            checked="checked"
            onChange={this.getAllTodos}
          />
          <label htmlFor="all">All</label>
          <span>{all}</span>
        </div>
        <div className="todo-filter">
          <input
            id="active"
            type="radio"
            name="filters"
            onChange={this.getActiveTodos}
          />
          <label htmlFor="active">Active</label>
          <span>{active}</span>
        </div>
        <div className="todo-filter">
          <input
            id="done"
            type="radio"
            name="filters"
            onChange={this.getDoneTodos}
          />
          <label htmlFor="done">Done</label>
          <span>{done}</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ todos }) => {
  return {
    todos
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
