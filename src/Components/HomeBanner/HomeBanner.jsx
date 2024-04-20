import React from 'react'
import Slider from "react-slick";
import banner from '../../assets/banner/slider-1.webp';
import banner1 from '../../assets/banner/slider-2.webp';
import banner2 from '../../assets/banner/slider-3.webp';
import banner3 from '../../assets/banner/slider-4.webp';

const HomeBanner = () => {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true
    };

    return (
        <div className='homeBannerSection'>
            <Slider {...settings}>
                <div className='item'>
                    <img src={banner} alt='slider' className='w-100' />
                </div>
                <div className='item'>
                    <img src={banner1} alt='slider' className='w-100' />
                </div>
                <div className='item'>
                    <img src={banner2} alt='slider' className='w-100' />
                </div>
                <div className='item'>
                    <img src={banner3} alt='slider' className='w-100' />
                </div>
            </Slider>
        </div>
    )
}

export default HomeBanner