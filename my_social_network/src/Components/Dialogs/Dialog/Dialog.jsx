import { NavLink } from "react-router-dom";
import s from "./Dialog.module.css"

function Dialog(props) {
    const path = '/dialogs/' + props.id;
    return (
        <div className={`${s.dialog} ${s.active}`}>
            <NavLink to={path} ><img src={props.ava} alt='ava'/><span>{props.name}</span></NavLink>
        </div>
    );
}

export default Dialog;