import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css'


function Navbar(props) {
  const onActiveClick = (pageId) => {
    props.pageIsActive(pageId);
  }
  const navDataToJsx = props.navData.map(n =>
    <div key={n.id} >
      <NavLink to={n.url}
        onClick={() => onActiveClick(n.id)}
        className={n.isActive ? `${s.pending} ${s.active}` : `${s.pending}`}>{n.title}
      </NavLink>
    </div>
  );
  return (
    <nav className={s.nav}>
      {navDataToJsx}
    </nav>
  );
}

export default Navbar;