import Dialogs from "./Dialogs";
import { addMessage, updateNewMessageText } from "../../Redux/dialogs-reducer";
import { connect } from "react-redux";
import React from "react";
import withAuthRedirect from "../../HOC/withAuthRedirect";
import { compose } from "redux";


class DialogsContainer extends React.Component {
    componentDidMount() { }
    render() {
        return <Dialogs {...this.props} />
    }
}

const mapStateToProps = (state) => ({ dialogsPage: state.dialogsPage })

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, { addMessage, updateNewMessageText }))
    (DialogsContainer);


