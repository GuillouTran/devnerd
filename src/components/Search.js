import React from "react";
import { connect } from "react-redux";

import { searchTodosAction } from "../actions/todoAction";
import SearchItem from "./SearchItem";

const Search = props => {
  const handleChange = e => {
    const { value } = e.target;
    props.searchTodo(value);
  };

  const { searchResults } = props;
  return (
    <div>
      <input
        type="text"
        placeholder="Search a todo"
        onChange={e => {
          e.persist();
          handleChange(e);
        }}
      />
      {searchResults &&
        searchResults.map(result => <SearchItem key={result.id} {...result} />)}

      <SearchItem />
    </div>
  );
};

const mapStateToProps = ({ searchResults }) => {
  return {
    searchResults
  };
};

const mapDispatchToProps = dispatch => {
  return {
    searchTodo: value => dispatch(searchTodosAction(value))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
