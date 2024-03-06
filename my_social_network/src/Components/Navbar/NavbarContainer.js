import { connect } from 'react-redux';
import Navbar from './Navbar';

const mapStateToProps = (state) => {
    return { navData: state.sidebar.navData }
}

const NavbarContainer = connect(mapStateToProps, )(Navbar);

export default NavbarContainer;