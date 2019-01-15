import React from "react";
import { connect } from "react-redux";

import { searchTodosAction } from "../actions/todoAction";
import SearchItem from "./SearchItem";
import { SearchStyle } from "../styles";
import { SearchResultsStyle } from "../styles";

const Search = props => {
  const handleChange = e => {
    const { value } = e.target;
    props.searchTodo(value);
  };

  // When you click outside of the search results the results disappears
  window.addEventListener("mouseup", event => {
    const searchRes = document.getElementsByClassName("search");
    const input = document.getElementById("search-id");
    const searchResElement = searchRes[Object.keys(searchRes)[0]];
    if (
      (event.target.parentNode.parentNode === searchResElement &&
        event.target.parentNode.parentNode !== searchResElement) ||
      event.target !== input
    ) {
      searchResElement.style.display = "none";
    } else if (event.target === input && searchResElement) {
      searchResElement.style.display = "block";
    }
  });

  const { searchResults } = props;
  return (
    <SearchStyle>
      <input
        id="search-id"
        type="text"
        placeholder="Search a todo"
        onChange={e => {
          e.persist();
          handleChange(e);
        }}
      />
      <SearchResultsStyle className="search">
        {searchResults &&
          searchResults.map(result => (
            <SearchItem key={result.id} {...result} />
          ))}
      </SearchResultsStyle>
    </SearchStyle>
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
