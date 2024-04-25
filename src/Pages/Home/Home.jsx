import HomeBanner from "../../Components/HomeBanner/HomeBanner";
import React from "react";
import 'swiper/css';
import 'swiper/css/navigation';
import HomeCat from "../../Components/HomeCategory/HomeCat";
import NewsLetter from "../../Components/NewsLetter/NewsLetter";
import HomeProducts from "../../Components/HomeProduct/HomeProducts";

const Home = () =>{

    // var productSliderOptions = {
    //     dots: true,
    //     infinite: false,
    //     speed: 500,
    //     slidesToShow: 4,
    //     slidesToScroll: 1
    // };

    return(
        <>
            {/* Home Banner */}
            <HomeBanner/>

            {/* Home Category */}
            <HomeCat/>

            {/* Home Products */}
            <HomeProducts/>

            {/* Home NewsLetter */}
            <NewsLetter/>

        </>
    )
}

export default Home;