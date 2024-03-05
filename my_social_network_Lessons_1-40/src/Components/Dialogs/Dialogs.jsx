import s from "./Dialogs.module.css"
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import React from "react";
import { addMessageAC, updateNewMessageTextAC } from "../../Redux/store";

function Dialogs(props) {
    const dialogsDataToJsx = props.dialogsPage.dialogsData.map(d =>
        <Dialog key={d.id} id={d.id} name={d.name} ava={d.ava} isActive={d.isActive}/>
    );
    const messagesDataToJsx = props.dialogsPage.messagesData.map(m =>
        <Message key={m.id} message={m.message} />
    );

    const addNewMessage = () => { props.dispatch( addMessageAC() ); }
        
    const onMessageChange = (e) => {
        let text = e.target.value;
        props.dispatch( updateNewMessageTextAC(text) );
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.title}><h3>Dialogs</h3></div>
                <div>
                    {dialogsDataToJsx}
                </div>
            </div>
            <div>
                <div>
                    <div>
                        <textarea placeholder='Enter message here'
                        onChange={onMessageChange}
                        value={props.dialogsPage.newMessageText}></textarea>
                    </div>
                    <div>
                        <button onClick={addNewMessage}>Add message</button>
                    </div>
                </div>
                <div className={s.messages}>
                    {messagesDataToJsx}
                </div>
            </div>

        </div>
    );
}

export default Dialogs;