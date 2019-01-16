import React from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";

import { TodoPageStyle } from "../styles";
import { Edit } from "styled-icons/material/Edit";

const Todo = ({ todo, location }) => {
  return (
    <TodoPageStyle completed={todo.completed}>
      <div className="todo-title">
        <p>{todo.title}</p>
      </div>
      <Link to={`${location.pathname}/edit`}>
        <button className="button">
          <span>Edit</span>
          <Edit />
        </button>
      </Link>
    </TodoPageStyle>
  );
};

const mapStateToProps = (state, ownProps) => {
  const id = parseInt(ownProps.match.params.id);
  return {
    todo: state.data.find(todo => todo.id === id)
  };
};

export default withRouter(connect(mapStateToProps)(Todo));
