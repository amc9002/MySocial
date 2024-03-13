import React from "react";
import Header from "./Header";
import { setAuthData } from '../../Redux/auth-reducer'
import { connect } from "react-redux";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.setAuthData();
    }

    render() {
        return (
            <Header {...this.props} />
        )
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default connect(mapStateToProps, { setAuthData })(HeaderContainer);