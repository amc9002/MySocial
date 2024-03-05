import { NavLink } from "react-router-dom";
import s from "./Dialog.module.css"

function Dialog(props) {
    const path = '/dialogs/' + props.id;
    let isActive = props.isActive ? s.active : '';
    return (
        <div>
            <NavLink to={path} className={`${s.dialog} ${isActive}`}><img src={props.ava} alt='ava'/><span>{props.name}</span></NavLink>
        </div>
    );
}

export default Dialog;