import React from 'react';
import './NavBar.css';
import logo from '../../assets/logo.png';
import logo2x from '../../assets/logo2x.png';

const NavbarLogo = () => {
    return (
        <div className='nav__logo'>
            <img src={logo} alt="logo steak house"
            srcSet={`${logo} 1x, ${logo2x} 2x`}
            />
        </div>
    )
}

export default NavbarLogo;