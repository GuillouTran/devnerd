import React from "react";
import { connect } from "react-redux";

import TodoItem from "../components/TodoItem";

const Todo = ({ todo }) => {
  return (
    <div>
      <TodoItem {...todo} />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  let { id } = ownProps.match.params;
  return {
    todo: state.todos.find(todo => (todo.id = id))
  };
};

export default connect(mapStateToProps)(Todo);
