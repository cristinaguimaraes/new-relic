import { AddAppForm } from "./AddAppForm";
import { onAddApp, onShowToastMessage } from "redux/actions/creators";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

const mapDispatchToProps = {
  onAddApp,
  onShowToastMessage
};

export const AddAppFormContainer = withRouter(
  connect(null, mapDispatchToProps)(AddAppForm)
);
