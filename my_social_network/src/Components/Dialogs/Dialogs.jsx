import s from "./Dialogs.module.css"
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import React from "react";
import { Formik } from "formik";
import { maxLength } from "../../Utils/validators";

const validator = (value) => {
    console.log("Validator is called", value);
    const errors = {};
    const len = maxLength(50)(value.newMessage);
    if (len) errors.newMessage = len;

    console.log("Validator resilt:", errors.newMessage);
    return errors;
}



const Dialogsform = (props) => {
    return (
        <div>
            <Formik
                initialValues={{ newMessage: '' }}
                validate={validator}
                onSubmit={(values, { setSubmitting }) => {
                    setSubmitting(props.onSubmit(values.newMessage));
                }}
            >
                {({ values, errors, touched, handleSubmit, handleChange }) => (
                    <form onSubmit={handleSubmit}>
                        <textarea className = {errors.newMessage && touched.newMessage ? s.error : undefined}
                            name="newMessage"
                            type="text"
                            placeholder={"Enter message here"}
                            onChange={handleChange}
                            value={values.newMessage}
                        />
                        <div className={s.errorMsg}>
                            {errors.newMessage && touched.newMessage && <div>{errors.newMessage}</div>}
                        </div>
                        <div><button type={"submit"}>Add message</button></div>
                    </form>
                )}
            </Formik>
        </div>
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