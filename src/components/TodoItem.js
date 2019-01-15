import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";

import { removeTodoAction } from "../actions/todoAction";
import { toggleTodoAction } from "../actions/todoAction";

class TodoItem extends Component {
  state = {
    completed: null
  };

  componentDidMount = () => {
    const { completed } = this.props;
    this.setState({ completed });
  };

  removeTodo = () => {
    this.props.remTodo(this.props.id);
    // When the user delete from edit route, so we want to redirect to home page.
    this.props.history.push("/");
  };

  toggleTodo = () => {
    // Check the state of this todo, if it's complete or no.
    const isCompleted = this.state.completed;

    // set state to change the the state of this todo.
    this.setState({ completed: !isCompleted });
    this.props.toggleTodo(this.props.id, !isCompleted);
  };

  render() {
    const { title, id } = this.props;
    const { completed } = this.state;

    return (
      <div style={{ display: "flex" }}>
        <input
          type="checkbox"
          onChange={this.toggleTodo}
          checked={completed || false}
        />
        <Link to={`/todo/${id}`}>
          <p
            className="todo-title"
            style={{ textDecoration: completed ? "line-through" : "none" }}
          >
            {title}
          </p>
        </Link>
        <div onClick={this.removeTodo}>X</div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    remTodo: id => {
      dispatch(removeTodoAction(id));
    },
    toggleTodo: (id, isCompleted) => {
      dispatch(toggleTodoAction(id, isCompleted));
    }
  };
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(TodoItem)
);
