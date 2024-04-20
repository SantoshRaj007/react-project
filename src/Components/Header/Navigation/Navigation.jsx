import { Button } from '@mui/material'
import React, { useState } from 'react'
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { FaAngleRight } from "react-icons/fa6";


const Navigation = () => {

    const [isopenSidebarVal, setisopenSidebarVal] = useState(false);

    return (
        <nav>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-2 navPart1'>
                        <div className='catWrapper'>
                            <Button className='allCatTab align-items-center' onClick={()=>setisopenSidebarVal(!isopenSidebarVal)}>
                                <span className='icon1 mr-2'><IoIosMenu/></span>
                                <span className='text'>ALL CATEGORIES</span>
                                <span className='icon2 ml-2'><FaAngleDown/></span>
                            </Button>

                            <div className={`sidebarNav ${isopenSidebarVal===true ? 'open' : ''}`}>
                                <ul>
                                    <li><Link><Button>Men <FaAngleRight className='ml-auto'/></Button></Link>
                                        <div className='submenu'>
                                            <Link><Button>Clothing</Button></Link>
                                            <Link><Button>Footware</Button></Link>
                                            <Link><Button>Watches</Button></Link>
                                        </div>
                                    </li>
                                    <li><Link><Button>Women <FaAngleRight className='ml-auto'/></Button></Link>
                                        <div className='submenu'>
                                            <Link><Button>Clothing</Button></Link>
                                            <Link><Button>Footware</Button></Link>
                                            <Link><Button>Watches</Button></Link>
                                        </div>
                                    </li>
                                    <li><Link><Button>Beauty<FaAngleRight className='ml-auto'/></Button></Link></li>
                                    <li><Link><Button>Watches</Button></Link></li>
                                    <li><Link><Button>Kids</Button></Link></li>
                                    <li><Link><Button>Gifts</Button></Link></li>
                                    <li><Link><Button>Blogs</Button></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className='col-sm-10 navPart2 d-flex align-items-center'>
                        <ul className='list list-inline ml-auto'>
                            <li className='list-inline-item'><Link to={'/'}><Button>Home</Button></Link></li>
                            <li className='list-inline-item'>
                                <Link to={'/'}><Button>Men</Button></Link>
                                <div className='submenu shadow'>
                                    <Link><Button>Clothing</Button></Link>
                                    <Link><Button>Footware</Button></Link>
                                    <Link><Button>Watches</Button></Link>
                                </div>
                            </li>
                            <li className='list-inline-item'>
                                <Link to={'/'}><Button>Women</Button></Link>
                                <div className='submenu shadow'>
                                    <Link><Button>Clothing</Button></Link>
                                    <Link><Button>Footware</Button></Link>
                                    <Link><Button>Watches</Button></Link>
                                </div>
                            </li>
                            <li className='list-inline-item'>
                                <Link to={'/'}><Button>Beauty</Button></Link>
                                <div className='submenu shadow'>
                                    <Link><Button>Clothing</Button></Link>
                                    <Link><Button>Footware</Button></Link>
                                    <Link><Button>Watches</Button></Link>
                                </div>
                            </li>
                            <li className='list-inline-item'>
                                <Link to={'/'}><Button>Watches</Button></Link>
                                <div className='submenu shadow'>
                                    <Link><Button>Clothing</Button></Link>
                                    <Link><Button>Footware</Button></Link>
                                    <Link><Button>Watches</Button></Link>
                                </div>
                            </li>
                            <li className='list-inline-item'>
                                <Link to={'/'}><Button>Kids</Button></Link>
                                <div className='submenu shadow'>
                                    <Link><Button>Clothing</Button></Link>
                                    <Link><Button>Footware</Button></Link>
                                    <Link><Button>Watches</Button></Link>
                                </div>
                            </li>
                            <li className='list-inline-item'><Link to={'/'}><Button>Gifts</Button></Link></li>
                            <li className='list-inline-item'><Link to={'/'}><Button>Blogs</Button></Link></li>
                            <li className='list-inline-item'><Link to={'/'}><Button>Contact Us</Button></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation