import s from "./Header.module.css"

function Header() {
    return (
        <div>
            <header className={s.header}>
                <img src="https://img.freepik.com/free-vector/golden-bird-logo-design_1195-336.jpg?w=2000" alt='logo picture' />
                <div className={s.title}>My Social Network</div>
            </header>
        </div>
    );
}

export default Header;