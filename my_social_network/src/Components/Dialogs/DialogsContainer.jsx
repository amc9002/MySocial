import Dialogs from "./Dialogs";
import { addMessageAC, updateNewMessageTextAC } from "../../Redux/dialogs-reducer";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return { dialogsPage: state.dialogsPage }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNewMessage:  () => dispatch(addMessageAC()),
        onMessageChange:  (text) => dispatch(updateNewMessageTextAC(text))
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;