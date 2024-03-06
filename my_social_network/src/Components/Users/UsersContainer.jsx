import { connect } from "react-redux";
import { followAC, setUsersAC, unfollowAC } from "../../Redux/users-reducer";
import Users from "./Users";

const mapStateToProps = (state) => {
    return { users: state.usersPage.users }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUsers: (users) => dispatch(setUsersAC(users)),
        follow: (userId) => dispatch(followAC(userId)),
        unfollow: (userId) => dispatch(unfollowAC(userId))
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);