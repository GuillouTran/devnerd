import React, { Fragment } from "react";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Home />
    </Fragment>
  );
};

export default App;
