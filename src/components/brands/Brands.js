import React from "react";
import "./Brands.css";
import pyszne from '../../assets/pyszne.png';
import deligo from '../../assets/deligo.png';
import glovo from '../../assets/glovo.png';
import ubereats from '../../assets/ubereats.png';
import boldfood from '../../assets/boldfood.png';

const Brands = () => {
    return(
        <section className="brands">
            <div className="brands__wrapper">
                <div className="brand__box"><img src={pyszne} className="brand__img" alt="pyszne-logo"/></div>
                <div className="brand__box"><img src={deligo} className="brand__img" alt="deligo-logo"/></div>
                <div className="brand__box"><img src={glovo} className="brand__img" alt="glovo-logo"/></div>
                <div className="brand__box"><img src={ubereats} className="brand__img" alt="ubeareats-logo"/></div>
                <div className="brand__box"><img src={boldfood} className="brand__img" alt="bold-logo"/></div>
            </div>
        </section>
    )
}

export default Brands;