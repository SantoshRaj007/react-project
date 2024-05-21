/* eslint-disable jsx-a11y/anchor-is-valid */
import { Button, Rating } from '@mui/material'
import React, { useState } from 'react'
import ProductZoom from '../../Components/ProductZoom/ProductZoom'
import QuantityCount from '../../Components/QuantityCount/QuantityCount'
import { BsCartFill } from 'react-icons/bs'
import { FaRegHeart } from 'react-icons/fa6'
import { MdOutlineCompareArrows } from 'react-icons/md'
import Tooltip from '@mui/material/Tooltip';
import image1 from '../../assets/product/product1.jpg'
import RelatedProducts from './RelatedProducts/RelatedProducts'

const ProductDetails = () => {

    const [activeSize, setActiveSize] = useState(null);

    const [activeTabs, setActiveTabs] = useState(0);

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
                                <Tooltip title="Add to wishlist" placement='top'>
                                    <Button className='btn-blue btn-lg btn-big btn-circle ml-4'>                                    
                                        <FaRegHeart/>
                                    </Button>
                                </Tooltip>
                                
                                <Tooltip title="Add to Compare" placement='top'>
                                    <Button className='btn-blue btn-lg btn-big btn-circle ml-4'>                                    
                                        <MdOutlineCompareArrows/>
                                    </Button>
                                </Tooltip>
                            </div>

                        </div>
                    </div>

                    <br/>

                    <div className='card mt-5 p-5 detailsPageTabs'>
                        <div className='customTabs'>
                            <ul className='list list-inline'>
                                <li className='list-inline-item'>
                                    <Button className={`${activeTabs === 0 && 'active'}`} onClick={() => {setActiveTabs(0)}}>Description</Button>
                                </li>

                                <li className='list-inline-item'>
                                    <Button className={`${activeTabs === 1 && 'active'}`} onClick={() => {setActiveTabs(1)}}>Additional info</Button>
                                </li>

                                <li className='list-inline-item'>
                                    <Button className={`${activeTabs === 2 && 'active'}`} onClick={() => {setActiveTabs(2)}}>Reviews (3)</Button>
                                </li>
                            </ul>
                            <br/>

                            {
                                activeTabs === 0 &&
                                <div className='tabContent'>
                                    <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”</p>
                                </div>
                            }

                            {
                                activeTabs === 1 &&
                                <div className='tabContent'>
                                    <div className='table-responsive'>
                                        <table className='table table-bordered'>
                                            <tbody>
                                                <tr className='stand-up'>
                                                    <th>Brands</th>
                                                    <td>
                                                        <p>Puma</p>
                                                    </td>
                                                </tr>
                                                <tr className='folded-wo-wheels'>
                                                    <th>Size</th>
                                                    <td>
                                                        <p>M</p>
                                                    </td>
                                                </tr>
                                                <tr className='folded-w-wheels'>
                                                    <th>Material</th>
                                                    <td>
                                                        <p>Cotton</p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            }

                            {
                                activeTabs === 2 &&
                                
                                <div className='tabContent'>
                                    <div className='row'>
                                        <div className='col-md-8'>
                                            <h3>Customer questions & answers</h3>
                                            <br/>

                                            <div className='card p-4 reviewsCard flex-row'>
                                                <div className='image'>
                                                    <div className='rounded-circle'>
                                                        <img src={image1} alt='imgae'/>
                                                    </div>
                                                    <span className='text-g d-block text-center font-weight-bold'>Santosh Singh</span>
                                                </div>

                                                <div className='info pl-5'>
                                                    <div className='d-flex align-items-center w-100'>
                                                        <h5 className='text-light'>01/03/2024</h5>
                                                        <div className='ml-auto'>
                                                            <Rating name='half-rating-read' size='small' value={4.5} precision={0.5} readOnly />
                                                        </div>
                                                    </div>
                                                    <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”</p>
                                                </div>
                                            </div>

                                            <br className='res-hide'/>

                                            <br className='res-hide'/>

                                            <form className='reviewForm'>
                                                <h4>Add a review</h4>

                                                <div className='form-group'>
                                                    <textarea className='form-control' placeholder='Write a Review' name='review'></textarea>
                                                </div>

                                                <div className='row'>
                                                    <div className='col-md-6'>
                                                        <div className='form-group'>
                                                            <input type='text' className='form-control' placeholder='Name' name='userName' />
                                                        </div>
                                                    </div>

                                                    <div className='col-md-6'>
                                                        <div className='form-group'>
                                                            <Rating name='rating' value={4.5} precision={0.5} />
                                                        </div>
                                                    </div>
                                                </div>

                                                <br/>
                                                <div className='form-group'>
                                                    <Button className='btn-blue btn-big btn-lg btn-round' type='submit'>Submit Review</Button>
                                                </div>

                                            </form>

                                        </div>

                                        {/* <div className='col-md-4 pl-5 reviewBox'>
                                            <h4>Customer reviews</h4>
                                            <div className='d-flex align-items-center mt-2'>
                                                <Rating name='hlf-rating-read' defaultValue={4.5} precision={0.5} readOnly />
                                                <strong className='ml-3'>4.8 out 0f 5</strong>
                                            </div>

                                        </div> */}
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                    
                    <br/>

                    <RelatedProducts title="RELATED PRODUCTS"/>
                    <RelatedProducts title="RECENTLY VIEWED PRODUCTS"/>
                </div>
            </section>
        </>
    )
}

export default ProductDetails