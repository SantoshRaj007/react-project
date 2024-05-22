import { Rating } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import QuantityCount from '../../Components/QuantityCount/QuantityCount'
import { IoIosClose } from 'react-icons/io'

const Cart = () => {
  return (
    <>
        <section className="section cartPage">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <h2 className="hd mb-0">Your Cart</h2>
                        <p>There are 3 products in your cart</p>

                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th width="45%">Product</th>
                                        <th width="15%">Unit Price</th>
                                        <th width="15%">Quantity</th>
                                        <th width="15%">Subtotal</th>
                                        <th width="10%">Remove</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td width="45%">
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
                                        <td width="15%">$7.25</td>
                                        <td width="15%">
                                            <QuantityCount />
                                        </td>
                                        <td width="15%">$7.25</td>
                                        <td width="10%"><span className='remove'><IoIosClose /></span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="col-md-4"></div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Cart