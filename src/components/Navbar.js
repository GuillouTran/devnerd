import React from "react";
import { Link } from "react-router-dom";

import { NavbarStyle } from "../styles";
import Search from "./Search";

const Navbar = () => {
  return (
    <NavbarStyle>
      <Link to="/">
        <h1 className="app-logo">MyTodo</h1>
      </Link>
      <Search />
    </NavbarStyle>
  );
};

export default Navbar;
