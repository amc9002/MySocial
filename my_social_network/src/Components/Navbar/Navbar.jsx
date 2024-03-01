import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css'

const navData = [
  { id: 1, url: '/profile', title: 'Profile', isActive: false },
  { id: 2, url: '/dialogs', title: 'Messages', isActive: true },
  { id: 3, url: '/news', title: 'News', isActive: false },
  { id: 4, url: '/music', title: 'Music', isActive: false },
  { id: 5, url: '/friends', title: 'Friends', isActive: false },
  { id: 6, url: '/users', title: 'Users', isActive: false },
  { id: 7, url: '/settings', title: 'Settings', isActive: false },
];

function getClassName(isActive) {
  let className = isActive ? `${s.pending} ${s.active}` : `${s.pending}`;
  return className;
}

const navDataToJsx = navData.map(n =>
  <div className={getClassName(n.isActive)}>
    <NavLink to={n.url} key={n.id}>{n.title}</NavLink>
  </div>);

function Navbar() {
  return (
    <nav className={s.nav}>
      {navDataToJsx}
    </nav>
  );
}

export default Navbar;