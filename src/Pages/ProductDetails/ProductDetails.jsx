/* eslint-disable jsx-a11y/anchor-is-valid */
import { Button, Rating } from '@mui/material'
import React, { useState } from 'react'
import ProductZoom from '../../Components/ProductZoom/ProductZoom'
import QuantityCount from '../../Components/QuantityCount/QuantityCount'
import { BsCartFill } from 'react-icons/bs'

const ProductDetails = () => {

    const [activeSize, setActiveSize] = useState(null);

    const isActive = (index) => {
        setActiveSize(index);
    }

    return (
        <>
            <section className='productDetails section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-4 pl-5'>
                            <ProductZoom/>
                        </div>

                        <div className='col-md-8 pl-5 pr-5'>
                            <h2 className='hd text-capitalize'>All Natural Italian-Style Chicken Meatballs</h2>
                            <ul className='list list-inline d-flex align-items-center'>
                                <li className='list-inline-item'>
                                    <div className='d-flex align-items-center'>
                                        <span className='text-light mr-2'>Brands :</span>
                                        <span>Fratini</span>
                                    </div>                                    
                                </li>
                                <li className='list-inline-item'>
                                    <div className='d-flex align-items-center'>
                                        <Rating name="read-only" value={4.5} size='small' precision={0.5} readOnly />
                                        <span className='text-light cursor ml-2'> 1 Review</span>
                                    </div>
                                </li>
                            </ul>

                            <div className='d-flex info mb-3'>
                                <span className='oldPrice'>$20.00</span>
                                <span className='netPrice text-danger ml-2'>$14.00</span>
                            </div>
                            <span class="badge badge-success">In Stock</span>

                            <p className='mt-3'>Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent. Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent</p>

                            <div className='productSize d-flex align-items-center'>
                                <span>Size :</span>
                                <ul className='list list-inline mb-0 pl-4'>
                                    <li className='list-inline-item'><a className={`tag ${activeSize === 0 ? 'active' : ''}`} onClick={() => isActive(0)}>S</a></li>
                                    <li className='list-inline-item'><a className={`tag ${activeSize === 1 ? 'active' : ''}`} onClick={() => isActive(1)}>M</a></li>
                                    <li className='list-inline-item'><a className={`tag ${activeSize === 2 ? 'active' : ''}`} onClick={() => isActive(2)}>L</a></li>
                                    <li className='list-inline-item'><a className={`tag ${activeSize === 3 ? 'active' : ''}`} onClick={() => isActive(3)}>XL</a></li>
                                </ul>
                            </div>
 
                            <div className='d-flex align-items-center mt-3'>
                                <QuantityCount/>
                                <Button className='btn-blue btn-lg btn-big btn-round'><BsCartFill /> &nbsp; Add to cart</Button>

                                <Button className='btn-blue btn-lg btn-big btn-circle ml-4'>                                    
                                    <BsCartFill/>
                                </Button>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductDetails