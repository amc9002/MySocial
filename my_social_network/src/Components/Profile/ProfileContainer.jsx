import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getProfile } from './../../Redux/profile-reducer'
import { useLocation, useNavigate, useParams } from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.router.params.userId;
        if(!userId) { userId = 2; }
        this.props.getProfile(userId);
    }
    render() {
        return <Profile {...this.props} profile={this.props.profile} />
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profileData
});

const withRouter = (Component) => {
    const ComponentWithRouterProp = (props) => {
        const location = useLocation();
        const navigate = useNavigate();
        const params = useParams();
        return (
            <div>
                <Component {...props} router={{ location, navigate, params }} />
            </div>
        )
    }
    return ComponentWithRouterProp;
}

const withUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { getProfile })(withUrlDataContainerComponent);