import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg'
import CountryDroupdown from '../CountryDropdown/CountryDroupdown';
import Button from '@mui/material/Button';
import { FiUser } from "react-icons/fi";
import { IoBagOutline } from "react-icons/io5";
import SearchBox from './SearchBox/SearchBox';
import Navigation from './Navigation/Navigation';
import { MyContext } from '../../App';
import { useContext } from 'react';

const Header = () =>{

    const context = useContext(MyContext);

    return(
        <>
            <div className="headerWrapper">
                <div className="top-strip bg-blue">
                    <div className="container">
                        <p className="mb-0 mt-0 text-center">Due to <b>Havey Trafic</b>, orders may be processed with a slight delay</p>
                    </div>
                </div>
                <header className="header">
                    <div className="container">
                        <div className="row">
                            <div className="logoWrapper col-sm-2 d-flex align-items-center">
                                <Link to={'/'}><img src={logo} alt='logo' /></Link>
                            </div>
                            <div className='col-sm-10 d-flex align-items-center part2'>
                                {
                                    context.countryList.length!==0 && <CountryDroupdown/>
                                }
                                

                                {/* Header Search Start Here */}

                                <SearchBox/>

                                {/* Header Search End Here */}

                                <div className='part3 d-flex align-items-center ml-auto'>
                                    <Button className='circle mr-3'><FiUser/></Button>
                                    <div className='ml-auto cartTab d-flex align-items-center'>
                                        <span className='price'>$235</span>
                                        <div className='position-relative ml-2'>
                                            <Button className='circle'><IoBagOutline/></Button>
                                            <span className='count d-flex align-items-center justify-content-center'>1</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Navigation Start Here */}
                <Navigation/>
                {/* Navigation End Here */}
            </div>
        </>
    )
}

export default Header;