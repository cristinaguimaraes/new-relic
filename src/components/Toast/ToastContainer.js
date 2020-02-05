import { connect } from "react-redux";
import { Toast } from "./Toast";
import { onHideToastMessage } from "redux/actions/creators";

const mapStateToProps = state => ({
  showToast: state.toast.show,
  messageKey: state.toast.messageKey,
  type: state.toast.type
});

const mapDispatchToProps = {
  onClose: onHideToastMessage
};

export default connect(mapStateToProps, mapDispatchToProps)(Toast);
