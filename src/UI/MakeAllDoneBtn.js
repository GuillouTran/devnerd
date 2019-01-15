import React from "react";
import { connect } from "react-redux";
import { allDoneAction } from "../actions/todoAction";
import { MakeAllDoneBtnStyle } from "../styles";
import { Done } from "styled-icons/material/Done";

const MakeAllDoneBtn = props => {
  const makeAllDone = () => {
    props.complateAll();
  };

  return (
    <MakeAllDoneBtnStyle onClick={makeAllDone}>
      <span>Mark all as complate</span> <Done />
    </MakeAllDoneBtnStyle>
  );
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
