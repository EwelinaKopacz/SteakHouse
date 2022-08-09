import React from 'react';
import Bitmapv from '../../assets/Bitmapv.png';
import Bitmap2 from '../../assets/Bitmap@2x.png'
import './Hero.css';

const HeroImg = () => {
    return (
        <div className='hero__image'>
            <img className='hero__picture' src={Bitmapv} alt="steak" srcSet={`${Bitmapv} 1x, ${Bitmap2} 2x`}/>  
        </div>
    )

}

export default HeroImg;