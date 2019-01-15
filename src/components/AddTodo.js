import React, { Component } from "react";
import { connect } from "react-redux";

import { addNewTodoAction } from "../actions/todoAction";

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
      <div>
        <input
          type="text"
          name="title"
          value={title}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>Add</button>
      </div>
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
