import { Home } from './Home';
import { onSaveInitialData} from "../../redux/actions/creators";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";

const mapDispatchToProps = {
    onSaveInitialData
};

export const HomeContainer = withRouter(
    connect(
       null,
        mapDispatchToProps
    )(Home)
);


