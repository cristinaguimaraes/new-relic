import { Home } from './Home';
import { onSaveInitialData} from "../../redux/actions/creators";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";

const mapStateToProps = state => ({
    hasInitialData: state.apps.data.length > 0
});

const mapDispatchToProps = {
    onSaveInitialData
};

export const HomeContainer = withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(Home)
);


