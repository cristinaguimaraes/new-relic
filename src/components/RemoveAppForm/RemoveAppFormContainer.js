import { RemoveAppForm } from "./RemoveAppForm";
import { onDeleteApp, onShowToastMessage } from "../../redux/actions/creators";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  data: state.apps.data
});

const mapDispatchToProps = {
  onDeleteApp,
  onShowToastMessage
};

export const RemoveAppFormContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(RemoveAppForm)
);
