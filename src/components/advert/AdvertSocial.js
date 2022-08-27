import React from 'react';
import './Adverts.css';
import googlePlay from "../../assets/googleplay-badge.svg";
import appStore from "../../assets/appstore-badge.svg";
import huaweiLogo from "../../assets/huawei-badge.svg";

const AdvertSocial = () => {
    return(
        <div className='advert__social social'>
            <div className='social__box'>
                <img src={googlePlay} alt="google play logo"/>
            </div>
            <div className='social__box'>
                <img src={appStore} alt="app store logo"/>
            </div>
            <div className='social__box'>
                <img src={huaweiLogo} alt="huwaei logo"/>
            </div>
        </div>
    )
}

export default AdvertSocial;