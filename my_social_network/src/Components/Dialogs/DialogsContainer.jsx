import Dialogs from "./Dialogs";
import { addMessage, updateNewMessageText } from "../../Redux/dialogs-reducer";
import { connect } from "react-redux";
import React from "react";


class DialogsContainer extends React.Component {
    componentDidMount() { }
    render() {
        return <Dialogs {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}


export default connect(mapStateToProps, { addMessage, updateNewMessageText })(DialogsContainer);
