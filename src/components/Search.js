import React, { Component } from "react";
import { connect } from "react-redux";

import { searchTodosAction } from "../actions/todoAction";
import SearchItem from "./SearchItem";
import { SearchStyle } from "../styles";
import { SearchResultsStyle } from "../styles";

class Search extends Component {
  handleChange = e => {
    const value = e.target.value.replace(/^\s+|\s+$/g, "");
    if (value.length > 0) {
      this.props.searchTodo(value);
    }
  };

  componentDidMount = () => {
    // When you click outside of the search results the results disappears
    window.addEventListener("mouseup", event => {
      const searchRes = document.getElementsByClassName("search");
      const searchResElement = searchRes[Object.keys(searchRes)[0]]; // Search res element <ul></ul>.

      const input = document.getElementById("search-id"); // Search input.
      if (input !== event.target) {
        // We clicked somewhere else except the search input
        searchResElement.style.display = "none"; // Hide the results
      } else {
        // We click on the search input.
        searchResElement.style.display = "block"; // display the results.
      }
    });
  };

  render() {
    const { searchResults } = this.props;
    return (
      <SearchStyle>
        <input
          id="search-id"
          type="text"
          placeholder="Search a todo"
          onChange={e => {
            e.persist();
            this.handleChange(e);
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
  }
}

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
