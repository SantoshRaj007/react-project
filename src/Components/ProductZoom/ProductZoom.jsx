import React, { useState, useRef } from 'react';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { proData } from '../../assets/product';

const ProductZoom = () => {

    const [slideIndex, setSlideIndex] = useState(0);

    const zoomSliderBig = useRef();
    const zoomSlider = useRef();

    const goto = (index) => {
        setSlideIndex(index);
        zoomSlider.current.swiper.slideTo(index);
        zoomSliderBig.current.swiper.slideTo(index);
    }
    return (
        <>
            <div className='productZoom position-relative'>
                <div className='badge badge-primary'>23%</div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={0}
                    navigation={false}
                    slidesPerGroup={1}
                    modules={[Navigation]}
                    className='zoomSliderBig'
                    ref={zoomSliderBig}
                >   
                    {
                        proData?.map((item,index)=>{
                        return(
                        <SwiperSlide key={index}>
                            <div className='item'>
                                <InnerImageZoom
                                    zoomType="hover" zoomScale={1}
                                    src={item.image}
                                />
                            </div>
                        </SwiperSlide>
                        )})
                    }
                </Swiper>
            </div>

            <Swiper  
                slidesPerView={3}
                spaceBetween={0}
                navigation={true}
                slidesPerGroup={1}
                modules={[Navigation]}
                className='zoomSlider' 
                ref={zoomSlider}
            >
                {
                    proData.map((item,index)=>{
                        return (
                            <SwiperSlide key={index}>
                                <div className={`item ${slideIndex===0 && 'item_active'}`}>
                                    <img src={item.image}  className='w-100' alt='pro-img' onClick={() => goto(item.id)}/>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </>
    )
}

export default ProductZoom