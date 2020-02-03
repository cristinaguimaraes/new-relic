import { TopApps } from './TopApps';
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {hostsWithApps} from "../../redux/reducers/apps";

const mapStateToProps = state => ({
    data: hostsWithApps(state.apps)
});

export const TopAppsContainer = withRouter(
    connect(
        mapStateToProps,
        null
    )(TopApps)
);


