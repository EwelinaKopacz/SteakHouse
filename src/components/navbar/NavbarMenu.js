import React from 'react';
import './NavBar.css';

const NavbarMenu = () => {
    return (
        <nav className='nav'>
            <ul className='nav__list'>
                <li className='nav__item'><a href="#" className='nav__link'>Steaks</a></li>
                <li className='nav__item'><a href="#" className='nav__link'>Burgers</a></li>
                <li className='nav__item'><a href="#" className='nav__link'>French fries</a></li>
                <li className='nav__item'><a href="#" className='nav__link'>Drinks</a></li>
                <li className='nav__item'><a href="#" className='nav__link'>Gdzie dowozimy?</a></li>
                <li className='nav__item'><a href="#" className='nav__link'>Kontakt</a></li>
            </ul>
        </nav>
    )
}

export default NavbarMenu;