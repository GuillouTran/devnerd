import React from "react";
import { Link } from "react-router-dom";

const SearchItem = ({ id, title, completed }) => {
  return (
    <Link to={`/todo/${id}`}>
      <li
        className="search-item"
        style={{ textDecoration: completed ? "line-through" : "none" }}
      >
        {title}
      </li>
    </Link>
  );
};

export default SearchItem;
