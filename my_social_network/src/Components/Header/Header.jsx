import s from "./Header.module.css"
import logo from './../../Assets/Images/logo.avif'

function Header() {
    return (
        <header className={s.header}>
            <img src={logo} alt='logo picture' />
            <div className={s.title}>My Social Network</div>
        </header>
    );
}

export default Header;