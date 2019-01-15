import React from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";

import { removeTodoAction } from "../actions/todoAction";
import { toggleTodoAction } from "../actions/todoAction";

const TodoItem = props => {
  const removeTodo = () => {
    const { id } = props;
    props.remTodo(id);
    // When the user delete from edit route, so we want to redirect to home page.
    props.history.push("/");
  };

  const toggleTodo = () => {
    const { completed, id } = props;
    // Check the state of this todo, if it's complete or no.
    const isCompleted = completed;
    props.toggleTodo(id, !isCompleted);
  };

  const { title, id, completed } = props;
  return (
    <div style={{ display: "flex" }}>
      <input
        type="checkbox"
        onChange={toggleTodo}
        checked={completed || false}
      />
      <Link to={`/todo/${id}`}>
        <p
          className="todo-title"
          style={{
            textDecoration: completed ? "line-through" : "none"
          }}
        >
          {title}
        </p>
      </Link>
      <div onClick={removeTodo}>X</div>
    </div>
  );
};

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
