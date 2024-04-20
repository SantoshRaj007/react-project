import { Button } from "@mui/material";
import HomeBanner from "../../Components/HomeBanner/HomeBanner";
import banner1 from '../../assets/banner/banner1.jpg';
import { IoIosArrowRoundForward } from "react-icons/io";
import React from "react";
import Slider from "react-slick";
import item1 from '../../assets/product/product1.jpg'

const Home = () =>{

    var productSliderOptions = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };

    return(
        <>
            <HomeBanner/>

            <section className="homeProducts">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="banner">
                            <img src={banner1} alt="left-banner" className="cursor w-100" />
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

                            <div className="product_row w-100">
                                <Slider {...productSliderOptions}>
                                
                                    <div className="item productItem">
                                        <div className="imageWrapper">
                                            <img src={item1} alt="product-img" className="w-100" />
                                        </div>
                                    </div>
                                    

                                </Slider>
                            </div>

                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;