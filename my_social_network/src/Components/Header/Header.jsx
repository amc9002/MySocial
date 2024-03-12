import s from "./Header.module.css"
import logo from './../../Assets/Images/logo.avif'
import { NavLink } from "react-router-dom";

function Header(props) {
    return (
        <header className={s.header}>
            <img src={logo} alt='logo picture' />
            <div className={s.title}>My Social Network</div>
            <div className={s.loginBlock}>
                { props.isAuth ? props.login : <NavLink to='/login'>Login</NavLink> }
            </div>
        </header>
    );
}

export default Header;