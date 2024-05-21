import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { proData } from '../../assets/product';

const HomeCat = () => {
    // const [itemBg] = useState([
    //     '#fffceb',
    //     '#ecffec',
    //     '#feefea',
    //     '#fff3eb',
    //     '#fff3ff',
    //     '#f2fce4',
    //     '#feefea',
    //     '#fffceb',
    //     '#feefea',
    //     '#ecffec',
    //     '#feefea',
    //     '#fff3eb',
    //     '#fff3ff',
    //     '#f2fce4',
    //     '#feefea',
    //     '#fffceb',
    //     '#feefea',
    //     '#ecffec'
    // ]);

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
                    proData?.map((item,index)=>{
                        return(
                            <SwiperSlide key={index}>
                                <div className='item text-center cursor'  style={{background: item.bgColor}}>
                                    <img src={item.image} alt='item' />
                                    <h6 className='mt-2'>{item.name.slice(0,10)}</h6>
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