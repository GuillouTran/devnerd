import React from "react";
import { Link } from "react-router-dom";

import Search from "./Search";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "1rem"
      }}
    >
      <Link to="/">
        <h1 className="app-logo">MyTodo</h1>
      </Link>
      <Search />
    </div>
  );
};

export default Navbar;
