import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css'

function getClassName(isActive) {
  let className = isActive ? `${s.pending} ${s.active}` : `${s.pending}`;
  return className;
}

function Navbar(props) {
  const navDataToJsx = props.navData.map(n =>
  <div>
    <NavLink to={n.url} key={n.id} className={getClassName(n.isActive)}>{n.title}</NavLink>
  </div>
  );
  return (
    <nav className={s.nav}>
      {navDataToJsx}
    </nav>
  );
}

export default Navbar;