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
        <section className="header">
            <nav className='nav'>
                <NavbarLogo/>
                {(toggleMenu || screenWidth > 575) && (
                    <>
                        <NavbarMenu/>
                        <NavbarClient/>
                    </>
                )}
                <button className='nav__btn' onClick={toggleNav}><i className="fa-solid fa-bars"></i></button>
            </nav>
        </section>
    )
}

export default NavBar;