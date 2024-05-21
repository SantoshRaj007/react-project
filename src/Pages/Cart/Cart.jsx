import { Rating } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

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
                                        <th>Product</th>
                                        <th>Unit Price</th>
                                        <th>Quantity</th>
                                        <th>Subtotal</th>
                                        <th>Remove</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                        <Link to="/product/1">
                                            <div className="d-flex align-items-center cartItemimgWrapper">
                                                <div className="imgWrapper">
                                                    <img className="w-100" src="http://localhost:3001/static/media/product1.49d36142f4b56d65824b.jpg" alt='img' />
                                                </div>
                                                <div className="info px-3">
                                                    <h6>Striped Slim Fit Shirt with Button-Down Collar</h6>
                                                    <Rating name='read-only' value={4.5} precision={0.5} size='small' readOnly />
                                                </div>
                                            </div>
                                        </Link>
                                        </td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
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