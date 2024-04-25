import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const HomeCat = () => {
    const [itemBg] = useState([
        '#fffceb',
        '#ecffec',
        '#feefea',
        '#fff3eb',
        '#fff3ff',
        '#f2fce4',
        '#feefea',
        '#fffceb',
        '#feefea',
        '#ecffec',
        '#feefea',
        '#fff3eb',
        '#fff3ff',
        '#f2fce4',
        '#feefea',
        '#fffceb',
        '#feefea',
        '#ecffec'
    ]);

    return (
        <section className="homeCat">
            <div className="container">
                <h3 className='mb-4 hd'>Featured Categories</h3>
                <Swiper
                    slidesPerView={10}
                    spaceBetween={5}
                    navigation={true}
                    slidesPerGroup={3}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                {
                    itemBg?.map((item,index)=>{
                        return(
                            <SwiperSlide>
                                <div className='item text-center cursor' key={index} style={{background: item}}>
                                    <img src='https://m.media-amazon.com/images/G/31/img21/MA2023/DECWRS/Premium/Gildan_770x566._SS400_QL85_FMpng_.png' alt='item' />
                                    <h6>Men T-Shirt</h6>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
                  
                
                </Swiper> 
            </div>
        </section>
    )
}

export default HomeCat;