import React from "react";

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
      <h1 className="app-logo">MyTodo</h1>
      <Search />
    </div>
  );
};

export default Navbar;
