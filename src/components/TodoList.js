import React from "react";
import { connect } from "react-redux";
import TodoItem from "./TodoItem";
import { TodosStyle } from "../styles";

const TodoList = ({ todos }) => {
  return (
    <TodosStyle>
      {todos.map(todo => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </TodosStyle>
  );
};

const mapStateToProps = ({ todos }) => {
  return {
    todos
  };
};

export default connect(mapStateToProps)(TodoList);
