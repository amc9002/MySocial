import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { setUserProfile } from './../../Redux/profile-reducer'
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { profileAPI } from "../../API/api";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.router.params.userId;
        if(!userId) { userId = 2; }
        profileAPI.getProfile(userId)
            .then(data => { this.props.setUserProfile(data) });
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

export default connect(mapStateToProps, { setUserProfile })(withUrlDataContainerComponent);