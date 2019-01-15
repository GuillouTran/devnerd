import React from "react";

import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";
import VisibilityFilters from "../components/VisibilityFilters";
import MakeAllDoneBtn from "../UI/MakeAllDoneBtn";

const Home = () => (
  <div>
    <AddTodo />
    <div style={{ display: "flex", margin: "7px 0" }}>
      <VisibilityFilters />
      <MakeAllDoneBtn />
    </div>
    <TodoList />
  </div>
);

export default Home;
