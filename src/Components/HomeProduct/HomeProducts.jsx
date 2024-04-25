import React from 'react'
import banner1 from '../../assets/banner/banner1.png'
import banner2 from '../../assets/banner/banner2.png'
import banner3 from '../../assets/banner/banner3.png'
import banner4 from '../../assets/banner/banner4.png'
import { Button } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { Navigation } from 'swiper/modules';
import ProductItem from '../ProductItem/ProductItem';

const HomeProducts = () => {
    return (
        <section className="homeProducts">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="sticky">
                            <div className="banner">
                                <img src={banner1} alt="left-banner" className="cursor w-100" />
                            </div>

                            <div className="banner mt-4">
                                <img src={banner2} alt="left-banner" className="cursor w-100" />
                            </div>
                        </div>
                    </div>

                    <div className="col-md-9 productRow">

                        <div className="d-flex align-items-center">
                            <div className="info w-75">
                                <h3 className="mb-0 hd">BEST SELLERS</h3>
                                <p className="text-light text-sml mb-0">Do not miss the current offers until the end of March.</p>
                            </div>

                            <Button className="viewAllBtn ml-auto">View All <IoIosArrowRoundForward/></Button>

                        </div>   

                        <div className="product_row w-100 mt-4">
                            <Swiper
                                slidesPerView={4}
                                spaceBetween={0}
                                slidesPerGroup={3}
                                pagination={{
                                    type: 'fraction',
                                }}
                                navigation={true}
                                modules={[Navigation]}
                                className="mySwiper"
                            >

                                <SwiperSlide>
                                    <ProductItem/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <ProductItem/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <ProductItem/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <ProductItem/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <ProductItem/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <ProductItem/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <ProductItem/>
                                </SwiperSlide>

                            </Swiper>
                        </div>



                        <div className="d-flex align-items-center mt-5">
                            <div className="info w-75">
                                <h3 className="mb-0 hd">NEW PRODUCTS</h3>
                                <p className="text-light text-sml mb-0">New products with updated stocks.</p>
                            </div>

                            <Button className="viewAllBtn ml-auto">View All <IoIosArrowRoundForward/></Button>

                        </div>   

                        <div className="product_row productRow2 w-100 mt-4 d-flex">
                            <ProductItem/>
                            <ProductItem/>
                            <ProductItem/>
                            <ProductItem/>
                            <ProductItem/>
                            <ProductItem/>
                            <ProductItem/>
                            <ProductItem/>
                        </div>

                        <div className="d-flex mt-5 mb-5 bannerSec">
                            <div className="banner">
                                <img src={banner3} alt="left-banner" className="cursor w-100" />
                            </div>

                            <div className="banner">
                                <img src={banner4} alt="left-banner" className="cursor w-100" />
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default HomeProducts