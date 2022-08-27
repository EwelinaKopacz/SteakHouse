import React from 'react';
import AdvertContent from './AdvertContent';
import AdvertSocial from './AdvertSocial';
import PrimaryBtn from '../buttons/PrimaryBtn';
// import aplikacja from "../../assets/aplikacja.png";
// import aplikacja2 from "../../assets/aplikacja@2x.png";
import './Adverts.css';


const AdvertRight = () =>{
    return(
        <div className="advert__right advert__box">
            {/* <img src={aplikacja} className="advert__img" alt="advert image2"
            srcSet={`${aplikacja} 1x, ${aplikacja2} 2x`}
            /> */}
            <div className="advert__body">
                <AdvertContent header='Uber Eats' text={<>Zamawiaj w aplikacji <span className="right__feature">10% taniej.</span> Pobierz aplikację UberEats już dziś.</>}/>
                <AdvertSocial/>
                <PrimaryBtn/>
            </div>
        </div>
    )
}

export default AdvertRight;