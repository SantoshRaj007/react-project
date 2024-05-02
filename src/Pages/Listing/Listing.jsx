import React, { useState } from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
// import { Link } from 'react-router-dom'
import product_banner from '../../assets/banner/listingSlider.webp';
import Button from '@mui/material/Button';
import { TfiLayoutGrid4Alt } from "react-icons/tfi";
import { TbGridDots } from 'react-icons/tb';
import { LuMenu } from 'react-icons/lu';
import { FaAngleDown } from "react-icons/fa6";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ProductItem from '../../Components/ProductItem/ProductItem'
import Pagination from '@mui/material/Pagination';

const Listing = () => {

    

    const [anchorEl, setAnchorEl] = useState(null);

    const [productView, setProductView] = useState('four');

    const openDropdown = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    
    return (
        <>
            <section className='product_Listing_Page'>
                <div className='container'>
                    <div className='productListing d-flex'>
                        <Sidebar/>

                        <div className='content_right'>
                            <img src={product_banner} alt='product-banner' className='w-100' style={{borderRadius:'8px'}} />

                            <div className='showBy mt-3 mb-3 d-flex align-items-center'>
                                <div className='d-flex align-items-center btnWrapper'>
                                    <Button className={productView==='one' && 'act'} onClick={() => setProductView('one')}><LuMenu /></Button>
                                    <Button className={productView==='three' && 'act'} onClick={() => setProductView('three')}><TbGridDots/></Button>
                                    <Button className={productView==='four' && 'act'} onClick={() => setProductView('four')}><TfiLayoutGrid4Alt/></Button>
                                </div>

                                <div className='ml-auto showByFilter'>
                                    <Button onClick={handleClick}>Show 9 <FaAngleDown/></Button>

                                    <Menu
                                        className='w-100 showPerPageDropdown'
                                        id="basic-menu"
                                        anchorEl={anchorEl}
                                        open={openDropdown}
                                        onClose={handleClose}
                                        MenuListProps={{
                                        'aria-labelledby': 'basic-button',
                                        }}
                                    >
                                        <MenuItem onClick={handleClose}>9</MenuItem>
                                        <MenuItem onClick={handleClose}>12</MenuItem>
                                        <MenuItem onClick={handleClose}>18</MenuItem>
                                        <MenuItem onClick={handleClose}>24</MenuItem>
                                    </Menu>
                                </div>
                            </div>

                            <div className="productListing product_row productRow2 w-100 mt-4 d-flex">
                                <ProductItem itemView={productView} />
                                <ProductItem itemView={productView} />
                                <ProductItem itemView={productView} />
                                <ProductItem itemView={productView} />
                                <ProductItem itemView={productView} />
                                <ProductItem itemView={productView} />
                                <ProductItem itemView={productView} />
                                <ProductItem itemView={productView} />
                            </div>


                            <div className='d-flex align-items-center justify-content-center mt-5'>
                                <Pagination count={10} color="primary" size='large' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Listing