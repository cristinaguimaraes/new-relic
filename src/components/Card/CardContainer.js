import { Card } from "./Card";
import { onShowToastMessage } from "redux/actions/creators";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

const mapDispatchToProps = {
  onShowToastMessage
};

export const CardContainer = withRouter(
  connect(null, mapDispatchToProps)(Card)
);
