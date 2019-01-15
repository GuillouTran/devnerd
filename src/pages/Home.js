import React from "react";

import { ReactComponent as TodoSvg } from "../svgs/todo.svg";
import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";
import VisibilityFilters from "../components/VisibilityFilters";
import MakeAllDoneBtn from "../UI/MakeAllDoneBtn";
import { HomeStyle } from "../styles";

const Home = () => (
  <HomeStyle>
    <TodoSvg />
    <h1>Hey, This is your to-do list.</h1>
    <AddTodo />
    <div className="filters-row">
      <VisibilityFilters />
      <MakeAllDoneBtn />
    </div>
    <TodoList />
  </HomeStyle>
);

export default Home;
