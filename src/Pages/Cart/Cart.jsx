import { Button , Rating} from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom'
import QuantityCount from '../../Components/QuantityCount/QuantityCount'
import { IoIosClose } from 'react-icons/io'
import { IoCartSharp } from 'react-icons/io5';

const Cart = () => {
  return (
    <>
        <section className="section cartPage">
            <div className="container">
                <h2 className="hd mb-1">Your Cart</h2>
                <p>There are <b className='text-red'>3</b> products in your cart</p>
                <div className="row">
                    <div className="col-md-9 pr-5">
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th width="35%">Product</th>
                                        <th width="20%">Unit Price</th>
                                        <th width="25%">Quantity</th>
                                        <th width="10%">Subtotal</th>
                                        <th width="10%">Remove</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td width="35%">
                                        <Link to="/product/1">
                                            <div className="d-flex align-items-center cartItemimgWrapper">
                                                <div className="imgWrapper">
                                                    <img className="w-100" src="http://localhost:3000/static/media/product1.49d36142f4b56d65824b.jpg" alt='img' />
                                                </div>
                                                <div className="info px-3">
                                                    <h6>Striped Slim Fit Shirt with Button-Down Collar</h6>
                                                    <Rating name='read-only' value={4.5} precision={0.5} size='small' readOnly />
                                                </div>
                                            </div>
                                        </Link>
                                        </td>
                                        <td width="20%">$7.25</td>
                                        <td width="25%">
                                            <QuantityCount />
                                        </td>
                                        <td width="10%">$7.25</td>
                                        <td width="10%"><span className='remove'><IoIosClose /></span></td>
                                    </tr>
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="card border p-3 cardDetails">
                            <h4>CARD TOTALS</h4>

                            <div className="d-flex align-items-center mb-3">
                                <span>Subtotal</span>
                                <span className="ml-auto text-red font-weight-bold">$12.25</span>
                            </div>

                            <div className="d-flex align-items-center mb-3">
                                <span>Shipping</span>
                                <span className="ml-auto"><b>Free</b></span>
                            </div>

                            <div className="d-flex align-items-center mb-3">
                                <span>Estimate for</span>
                                <span className="ml-auto"><b>India</b></span>
                            </div>

                            <div className="d-flex align-items-center mb-3">
                                <span>Total</span>
                                <span className="ml-auto text-red font-weight-bold">$12.25</span>
                            </div>
                            <br/>
                            <Button className='btn-blue bg-red btn-lg btn-big btn-round'><IoCartSharp/> &nbsp; Add to cart</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Cart