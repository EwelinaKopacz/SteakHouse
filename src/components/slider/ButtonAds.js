import React from 'react';
import './Slider.css';

const ButtonAds = ({text,extraClass}) =>{
    const classes = `discount__btn ${extraClass}`
    return(
        <button className={classes}>{text}</button>
    )
}

export default ButtonAds;