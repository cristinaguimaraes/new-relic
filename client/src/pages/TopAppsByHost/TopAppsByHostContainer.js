import { TopAppsByHost } from './TopAppsByHost';
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {hostsWithApps} from "../../redux/reducers/apps";

const mapStateToProps = state => ({
    data: hostsWithApps(state.apps)
});

export const TopAppsByHostContainer = withRouter(
    connect(
        mapStateToProps,
        null
    )(TopAppsByHost)
);


