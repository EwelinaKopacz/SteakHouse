import React from "react";
import ButtonAds from "./ButtonAds";
import './Slider.css';

const SliderAds = () =>{
    return (
        <div className="slider__discount">
            <div className="discount__container">
                <h1 className="discount__header"><span className="discount__firstLine"><span className="discount__feature">Rabat 10%</span> na</span> pierwsze zamówienie!</h1>
                <p className="discount__text">Do 20 stycznia złóż zamówienie na stronie i skorzystaj z promocji -10%. Spiesz się, czas trwania promocji do końca lutego.</p>
                <ButtonAds text='Zamów online'/>
            </div>
        </div>
    )

}

export default SliderAds;