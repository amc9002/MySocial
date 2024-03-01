import s from "./Dialogs.module.css"
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

function Dialogs(props) {

    let dialogsData = [
        {id: 1, name: 'Andris'},
        {id: 2, name: 'Mscislau'},
        {id: 3, name: 'Anela'},
        {id: 4, name: 'Kandrat'},
        {id: 5, name: 'Jakub'}
    ];
    let dialogsDataToJsx = dialogsData.map(d => <Dialog key={d.id} id={d.id} name={d.name} />);

    let messageData = [
        {id: 1, message: 'message 1'},
        {id: 2, message: "message 2"},
        {id: 3, message: 'message 3'}
    ];
    let messageDataToJsx = messageData.map(m => <Message key={m.id} message={m.message} />);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div><h3>Dialogs</h3></div>
                {dialogsDataToJsx}
            </div>

            <div className={s.messages}>
                {messageDataToJsx}
            </div>
        </div>
    );
}

export default Dialogs;