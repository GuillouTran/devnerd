import React, { Component } from "react";

class TodoItem extends Component {
  render() {
    const { title } = this.props;
    return (
      <div>
        <p className="todo-title">{title}</p>
      </div>
    );
  }
}

export default TodoItem;
