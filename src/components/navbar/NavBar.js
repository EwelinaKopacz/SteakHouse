/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState,useEffect} from 'react';
import NavbarLogo from './NavbarLogo';
import NavbarMenu from './NavbarMenu';
import NavbarClient from './NavbarClient';
import './NavBar.css';


const NavBar = () => {
    const [toggleMenu, setToogleMenu] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);


    const toggleNav =()=> {
        setToogleMenu(!toggleMenu);
    }

    useEffect(()=>{
        const changeWidth = () =>{
            setScreenWidth(window.innerWidth);
        }

        window.addEventListener('resize',changeWidth)

        return () => {
            window.removeEventListener('resize',changeWidth)
        }
    },[])

    return (
        <header className='header'>
            <NavbarLogo/>
            {(toggleMenu || screenWidth > 580) && (
                <>
                    <NavbarMenu/>
                    <NavbarClient/>
                </>
            )}
            <button className='mobile__btn' onClick={toggleNav}>
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            </button>
        </header>
    )
}

export default NavBar;