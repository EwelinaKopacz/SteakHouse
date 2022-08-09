import React from 'react';
import PrimaryBtn from '../buttons/PrimaryBtn';
import './Hero.css';

const HeroContent = () => {
    return (
        <div className='hero__content'>
            <h1 className='hero__header'><span className='hero__firstLine'><span className='hero__feature'>Rabat 10%</span> na</span> pierwsze zamówienie!</h1>
            <p className='hero__text'>Do 20 stycznia złóż zamówienie na stronie i skorzystaj z promocji -10%. Spiesz się, czas trwania promocji do końca lutego.</p>
            <PrimaryBtn/>
        </div>
    )
}

export default HeroContent;