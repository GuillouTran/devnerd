import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";

import { removeTodoAction } from "../actions/todoAction";

class TodoItem extends Component {
  removeTodo = () => {
    this.props.remTodo(this.props.id);
    // When the user delete from edit route, so we want to redirect to home page.
    this.props.history.push("/");
  };

  render() {
    const { title, id } = this.props;
    return (
      <div>
        <Link to={`/todo/${id}`}>
          <p className="todo-title">{title}</p>
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
    }
  };
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(TodoItem)
);
