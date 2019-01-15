import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Todo from "./pages/Todo";
import EditTodo from "./components/EditTodo";

const App = () => {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/todo/:id/edit" component={EditTodo} />
          <Route path="/todo/:id" component={Todo} />
        </Switch>
      </Fragment>
    </Router>
  );
};

export default App;
