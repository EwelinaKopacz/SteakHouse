import React from 'react';
import AdvertContent from './AdvertContent';
import PrimaryBtn from '../buttons/PrimaryBtn';
// import danadevolk from "../../assets/dana-devolk.png";
// import danadevolk2 from "../../assets/dana-devolk2x.png";
import './Adverts.css';

const AdvertLeft = () =>{
    return(
        <div className="advert__left advert__box">
            {/* <img src={danadevolk} className="advert__img" alt="advert image1"
            srcSet={`${danadevolk} 1x, ${danadevolk2} 2x`}
            /> */}
            <div className="advert__body">
                <AdvertContent header='Zestaw dla 3 osób' text={<>Razem smakuje lepiej! Zamów zestawy obiadowy dla 3 osób już od <span className="left__feature">39 zł</span></>} />
                <PrimaryBtn/>
            </div>
        </div>
    )
}

export default AdvertLeft;