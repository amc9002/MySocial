import { connect } from 'react-redux';
import Navbar from './Navbar';
import { pageIsActive } from '../../Redux/sidebar-reducer';

const mapStateToProps = (state) => {
    return { navData: state.sidebar.navData }
}

const NavbarContainer = connect(mapStateToProps, {pageIsActive})(Navbar);

export default NavbarContainer;