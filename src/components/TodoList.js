import React from "react";
import { connect } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = ({ todos }) => {
  return (
    <div>
      {todos.map(todo => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </div>
  );
};

const mapStateToProps = ({ todos }) => {
  return {
    todos
  };
};

export default connect(mapStateToProps)(TodoList);
