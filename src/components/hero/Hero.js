import React from 'react';
import HeroContent from './HeroContent';
import HeroImg from './HeroImg';
import './Hero.css';

const Hero = () => {
    return (
        <section className='hero'>
            <HeroContent/>
            <HeroImg/>
        </section>

    )

}

export default Hero;