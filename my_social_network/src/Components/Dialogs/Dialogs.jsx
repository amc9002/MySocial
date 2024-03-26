import s from "./Dialogs.module.css"
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import React from "react";
import { Field, Form } from "react-final-form";


const Dialogsform = (props) => {
    return (
        <Form fields={["newMessage"]} onSubmit={values => {
            props.onSubmit(values.newMessage);
        }}>
            {({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <Field name={"newMessage"}
                            component={"input"}
                            type={"text"}
                            placeholder={"Enter message here"} />
                    </div>
                    <div>
                        <button>Add message</button>
                    </div>
                </form>
            )}
        </Form>
    )    
}

function Dialogs(props) {
    const dialogsDataToJsx = props.dialogsPage.dialogsData.map(d =>
        <Dialog key={d.id} id={d.id} name={d.name} ava={d.ava} isActive={d.isActive} />
    );
    const messagesDataToJsx = props.dialogsPage.messagesData.map(m =>
        <Message key={m.id} message={m.message} />
    );

    const addNewMessage = (newMessage) => { props.addMessage(newMessage); }
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
                    <Dialogsform onSubmit={addNewMessage} />
                </div>
                <div className={s.messages}>
                    {messagesDataToJsx}
                </div>
            </div>
        </div>
    );
}

export default Dialogs;