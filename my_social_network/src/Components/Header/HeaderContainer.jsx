import React from "react";
import Header from "./Header";
import axios from "axios";
import { setAuthUserData } from '../../Redux/auth-reducer'

import { connect } from "react-redux";
import { authAPI } from "../../API/api";

class HeaderContainer extends React.Component {
    componentDidMount() {
        authAPI.getMe()
            .then(data => {
                if (data.resultCode === 0) {
                    const { id, login, email } = data.data;
                    this.props.setAuthUserData(id, email, login);
                }
            })
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

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);