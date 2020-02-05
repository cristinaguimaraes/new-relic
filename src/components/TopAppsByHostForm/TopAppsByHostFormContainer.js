import { TopAppsByHostForm } from "./TopAppsByHostForm";
import { onDeleteApp, onShowToastMessage } from "redux/actions/creators";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

const mapDispatchToProps = {
  onDeleteApp,
  onShowToastMessage
};

export const TopAppsByHostFormContainer = withRouter(
  connect(null, mapDispatchToProps)(TopAppsByHostForm)
);
