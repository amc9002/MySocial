import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getProfile, getUserStatus, updateUserStatus } from './../../Redux/profile-reducer'
import withAuthRedirect from "../../HOC/withAuthRedirect";
import withRouter from "../../HOC/withRouter";
import { compose } from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.router.params.userId;
        if (!userId) { userId = 2; }
        this.props.getProfile(userId);
        this.props.getUserStatus(userId);
    }
    render() {
        return <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
    }
}

const mapStateToProps = (state) => ({ 
    profile: state.profilePage.profileData,
    status: state.profilePage.status
});

export default compose(
    withAuthRedirect,
    withRouter,
    connect(mapStateToProps, { getProfile, getUserStatus, updateUserStatus }))
    (ProfileContainer) 