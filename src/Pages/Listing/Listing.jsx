import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
// import { Link } from 'react-router-dom'
import product_banner from '../../assets/banner/listingSlider.webp';
import Button from '@mui/material/Button';
import { HiViewGrid } from "react-icons/hi";
import { TfiLayoutGrid4Alt } from "react-icons/tfi";
import { TbGridDots } from 'react-icons/tb';
import { LuMenu } from 'react-icons/lu';

const Listing = () => {
    return (
        <>
            <section className='product_Listing_Page'>
                <div className='container'>
                    <div className='productListing d-flex'>
                        <Sidebar/>

                        <div className='content_right'>
                            <img src={product_banner} alt='product-banner' className='w-100' />

                            <div className='showBy mt-3 mb-3 d-flex align-items-center'>
                                <div className='d-flex align-items-center btnWrapper'>
                                    <Button><LuMenu /></Button>
                                    <Button><HiViewGrid/></Button>
                                    <Button><TbGridDots/></Button>
                                    <Button><TfiLayoutGrid4Alt/></Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Listing