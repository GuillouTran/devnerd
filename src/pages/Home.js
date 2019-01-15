import React from "react";

import TodoList from "../components/TodoList";
import VisibilityFilters from "../components/VisibilityFilters";

const Home = () => (
  <div>
    <VisibilityFilters />
    <TodoList />
  </div>
);

export default Home;
