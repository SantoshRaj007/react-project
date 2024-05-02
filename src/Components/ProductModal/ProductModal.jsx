import React, { useContext } from 'react'
import Dialog from '@mui/material/Dialog';
import { Button } from '@mui/material';
import { IoIosHeartEmpty, IoMdClose } from 'react-icons/io';
import Rating from '@mui/material/Rating';
// import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import QuantityCount from '../QuantityCount/QuantityCount';
import { MdOutlineCompareArrows } from 'react-icons/md';
import { MyContext } from '../../App';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation } from 'swiper/modules';
import ProductZoom from '../ProductZoom/ProductZoom';

const ProductModal = (props) => {
    
    const context = useContext(MyContext);

    return (
        <>
            <Dialog open={true} className='productModal' onClose={()=>context.setisOpenProductModal(false)}>
                <Button className='close_' onClick={()=>context.setisOpenProductModal(false)}><IoMdClose/></Button>
                <h4 className='mb-2 font-weight-bold'>All Natural Italian-Style Chicken Meatballs</h4>
                <div className='d-flex align-items-center'>
                    <div className='d-flex align-items-center mr-4'>
                        <span>Brands:</span>
                        <span className='ml-2'><b>Welch's</b></span>
                    </div>

                    <Rating name="read-only" value={5} size='small' precision={0.5} readOnly />
                </div>
                <hr/>

                <div className='row mt-2 productDetailModal'>
                
                    <div className='col-md-5'>
                        <ProductZoom/>
                    </div>

                    <div className='col-md-7'>
                        <div className='d-flex info align-items-center mb-3'>
                            <span className='oldPrice lg mr-2'>$9.54</span>
                            <span className='netPrice text-danger lg'>$7.54</span>
                        </div>
                        <span className='badge bg-success'>In Stock</span>
                        <p className='mt-3'>Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent</p>

                        <div className='d-flex align-items-center'>
                            <QuantityCount/>

                            <Button className='btn-blue btn-lg btn-big btn-round ml-3'>Add to cart</Button>
                        </div>

                        <div className='d-flex align-items-center mt-5 actions'>
                            <Button className='btn-round btn-sml' variant='outlined'><IoIosHeartEmpty/> &nbsp; Add to wishlist</Button>

                            <Button className='btn-round btn-sml ml-3' variant='outlined'><MdOutlineCompareArrows /> &nbsp; Compare</Button>
                        </div>
                    </div>
                </div>


            </Dialog>
        </>
    )
}

export default ProductModal