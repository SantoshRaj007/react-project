import React, { useContext, useEffect } from 'react'
import { MyContext } from '../../App';
import logo from '../../assets/images/logo.png'

const SignIn = () => {

    const context = useContext(MyContext);

    useEffect(() => {
        context.setisHeaderFooterShow(false);
    },[context]);

    return (
        <section className='section signInPage'>
            <div className="shape-bottom"> 
                <svg fill="#fff" id="Layer_1" x="0px" y="0px" viewBox="0 0 1921 819.8" style={{enableBackground: 'new 0 0 1921 819.8'}}> 
                    <path className="st0" d="M1921,413.1v406.7H0V0.5h0.4l228.1,598.3c30,74.4,80.8,130.6,152.5,168.6c107.6,57,212.1,40.7,245.7,34.4 c22.4-4.2,54.9-13.1,97.5-26.6L1921,400.5V413.1z"></path> 
                </svg> 
            </div>
            <div className="container">
                <div className="box card p-3 shadow border-0">
                    <div className="text-cente logoWrapper">
                        <img src={logo} alt='logo' />
                    </div>
                    <h2>Sign In</h2>
                </div>
            </div>
        </section>
    )
}

export default SignIn