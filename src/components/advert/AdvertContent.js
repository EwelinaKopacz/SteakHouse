import React from 'react';
import './Adverts.css';

const AdvertContent = (props) => {
    const {header,text} = props;
    return(
        <>
            <h2 className="advert__title">{header}</h2>
            <p className="advert__text">{text}</p> 
        </>
    )
}

export default AdvertContent;