import { AppForm } from './AppForm';
import {onAddApp} from "../../redux/actions/creators";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";

const mapDispatchToProps = {
    onAddApp
};

export const AppFormContainer = withRouter(
    connect(
       null,
        mapDispatchToProps
    )(AppForm)
);


