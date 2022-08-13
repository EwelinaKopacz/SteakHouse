import React from 'react';
import AdvertLeft from './AdvertLeft';
import AdvertRight from './AdverRight';
import './Adverts.css';

const Advert = () =>{
    return(
        <section className='advert'>
            <div className='advert__wrapper'>
                <AdvertLeft/>
                <AdvertRight/>
            </div>
        </section>
    )
}

export default Advert;