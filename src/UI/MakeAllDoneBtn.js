import React from "react";
import { connect } from "react-redux";
import { allDoneAction } from "../actions/todoAction";

const MakeAllDoneBtn = props => {
  const makeAllDone = () => {
    props.complateAll();
  };

  return <button onClick={makeAllDone}>Mark all as complate</button>;
};

const mapDispatchToProps = dispatch => {
  return {
    complateAll: () => dispatch(allDoneAction())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(MakeAllDoneBtn);
