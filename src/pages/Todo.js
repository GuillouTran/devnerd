import React from "react";
import { connect } from "react-redux";
import TodoItem from "../components/TodoItem";
import { Link, withRouter } from "react-router-dom";

const Todo = ({ todo, location }) => {
  return (
    <div>
      <TodoItem {...todo} />
      <Link to={`${location.pathname}/edit`}>
        <button className="edit-button">Edit</button>
      </Link>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  let { id } = ownProps.match.params;
  return {
    todo: state.todos.find(todo => (todo.id = id))
  };
};

export default withRouter(connect(mapStateToProps)(Todo));
