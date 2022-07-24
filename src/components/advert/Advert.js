import React from 'react';
import AdvertContent from './AdvertContent';
import AdvertSocial from './AdvertSocial';
import './Advert.css';
import ButtonAds from '../slider/ButtonAds';
import danadevolk from "../../assets/dana-devolk.png";
import danadevolk2 from "../../assets/dana-devolk2x.png";
import aplikacja from "../../assets/aplikacja.png";
import aplikacja2 from "../../assets/aplikacja@2x.png";


const Advert = () =>{
    return(
        <section className='advert'>
            <div className='advert__wrapper'>
                <div className="advert__left">
                    <img src={danadevolk} className="advert__img" alt="advert image1"
                    srcSet={`${danadevolk} 1x, ${danadevolk2} 2x`}
                    />
                    <div className="advert__body">
                        <AdvertContent header='Zestaw dla 3 osób' text={<>Razem smakuje lepiej! Zamów zestawy obiadowy dla 3 osób już od <span className="left__feature">39 zł</span></>} />
                        <ButtonAds text='Zamów online' extraClass="advert__btn"/>
                    </div>
                </div>
                <div className="advert__right">
                    <img src={aplikacja} className="advert__img" alt="advert image2"
                    srcSet={`${aplikacja} 1x, ${aplikacja2} 2x`}
                    />
                    <div className="advert__body">
                        <AdvertContent header='Uber Eats' text={<>Zamawiaj w aplikacji <span className="right__feature">10% taniej.</span> Pobierz aplikację UberEats już dziś.</>}/>
                        <AdvertSocial/>
                        <ButtonAds text='Zamów online' extraClass="advert__btn"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Advert;