import React, { Component } from "react";
import { Link } from "react-router-dom";

class TodoItem extends Component {
  render() {
    const { title, id } = this.props;
    return (
      <div>
        <Link to={`/todo/${id}`}>
          <p className="todo-title">{title}</p>
        </Link>
      </div>
    );
  }
}

export default TodoItem;
