import React, { Component } from "react";
import { connect } from "react-redux";

import { editTodoAction } from "../actions/todoAction";

class EditTodo extends Component {
  state = {
    title: "",
    id: ""
  };

  componentDidMount = () => {
    const {
      todo: { title, id }
    } = this.props;
    this.setState({ title, id });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSave = () => {
    const { title, id } = this.state;
    this.props.editTodo(title, id);

    // navigate to the home page after the user save.
    this.props.history.push("/");
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
        <button onClick={this.handleSave}>Save</button>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;
  return {
    todo: state.todos.find(todo => (todo.id = id))
  };
};

const mapDispatchToProps = dispatch => {
  return {
    editTodo: (title, id) => dispatch(editTodoAction(title, id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditTodo);
