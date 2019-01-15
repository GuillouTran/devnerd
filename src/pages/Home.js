import React from "react";

import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";
import VisibilityFilters from "../components/VisibilityFilters";

const Home = () => (
  <div>
    <AddTodo />
    <VisibilityFilters />
    <TodoList />
  </div>
);

export default Home;
