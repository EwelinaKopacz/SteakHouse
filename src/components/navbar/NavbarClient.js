/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './NavBar.css';
import accountIcon from '../../assets/mojekonto.svg';
import basketIcon from '../../assets/koszyk.svg';
import orderIcon from '../../assets/zamow_ikona.svg';

const NavbarClient = () => {
    return (
        <div className='client'>


            <div className='client__box box'>
                <div className='box__img'>
                    <img src={accountIcon} alt=''/>
                </div>
                <a href="#" className='box__text'>Moje konto</a>
            </div>


            <div className='client__box box'>
                <div className='box__img'>
                    <img src={basketIcon} alt=''/>
                </div>
                <a href="#" className='box__text'>Koszyk</a>
            </div>


            <div className='client__box box '>
                <div className='box__img'>
                    <img src={orderIcon} alt=''/>
                </div>
                <a href="#" className='box__text'>Zamów</a>
            </div>


        </div>
    )
}

export default NavbarClient;