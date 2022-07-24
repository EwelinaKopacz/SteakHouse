import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFlip } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-flip';
import Bitmapv from '../../assets/Bitmapv.png';
import Bitmap2 from '../../assets/Bitmap@2x.png';
import SliderAds from "./ SliderAds";
import './Slider.css';



const Slider = () => {
    return (
        <section className="slider">
            <SliderAds/>
            <div className='slider__wrapper'>
                <Swiper
                    modules={[Pagination,EffectFlip]}
                    speed={800}
                    slidesPerView={1}
                    effect={"flip"}
                    pagination={{ clickable: true }}
                    className="custom__swiper"
                >
                    <SwiperSlide className="swiper__slide">
                        <img src={Bitmapv} alt="steak"
                        srcSet={`${Bitmapv} 1x, ${Bitmap2} 2x`}
                        />
                    </SwiperSlide>
                    <SwiperSlide className="swiper__slide">
                        <img src={Bitmapv} alt="steak"/>
                    </SwiperSlide>
                    <SwiperSlide className="swiper__slide">
                        <img src={Bitmapv} alt="steak"/>
                    </SwiperSlide>

                </Swiper>

            </div>
        </section>
    )

}

export default Slider;