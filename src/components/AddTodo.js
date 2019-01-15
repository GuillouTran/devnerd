import React, { Component } from "react";
import { connect } from "react-redux";

import { addNewTodoAction } from "../actions/todoAction";
import { AddTodoStyle } from "../styles";

class AddTodo extends Component {
  state = {
    title: ""
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleClick = () => {
    const { title } = this.state;
    this.props.addNewTodo(title);
  };

  render() {
    const { title } = this.state;
    return (
      <AddTodoStyle>
        <input
          className="new-todo-input"
          type="text"
          name="title"
          value={title}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick} className="add-todo-btn">
          Add
        </button>
      </AddTodoStyle>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addNewTodo: title => dispatch(addNewTodoAction(title))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AddTodo);
