import { RemoveAppForm } from "./RemoveAppForm";
import { onDeleteApp, onShowToastMessage } from "../../redux/actions/creators";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

const mapDispatchToProps = {
  onDeleteApp,
  onShowToastMessage
};

export const RemoveAppFormContainer = withRouter(
  connect(null, mapDispatchToProps)(RemoveAppForm)
);
