import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import logo_axita from '../assets/images/logo/logo_axita.png'
import './Navbar-new.css'
const Navitem = () => {
    const [menuToggle,setMenuToggle] =useState(false);
    const [socialToggle,setSocialToggle] = useState(false);
    const [headerfixed,setHeaderFixed] = useState(false);

    //addevent listner

    window.addEventListener("scroll",()=>{
        if(window.scrollY>200){
            setHeaderFixed(true);
        }else{
            setHeaderFixed(false)
        }
    })
  return (
    <header className={`header-section style-4 ${headerfixed ? "header-fixed fadeInUp" : ""}`}>
        {/*header top start*/}
        <div className={`header-top d-md-none ${socialToggle ? "open" :""}`}>
            <div className="container">
                <div className="header-top-area">
                    <Link to="/signup" className='lab-btn' me-3><span>Create Account</span></Link>
                    <Link to="/Login"><span>Login</span></Link>
                </div>
            </div>
        </div>

        {/*header bottom start*/}

        <div className="header-bottom">
            <div className="container">
                <div className="header-wrapper">
                    {/*Logo*/}
                    <div className='logo-search-acte'>
                        <div className='logo_axita'>
                            <img src={logo_axita} alt="" />
                            
                        </div>
                        <div className="logo-p">
                            <p>AXITA COMPUTERS</p>
                        </div>
                    </div>
                    {/*menu area*/}
                    <div className='menu-area'>
                        <div className='menu'>
                            <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                                <li><Link to="/">HOME</Link></li>
                                <li><Link to="/allproducts">ALL PRODUCTS</Link></li>
                                <li><Link to="/blog">SERVICES</Link></li>
                                <li><Link to="/payment">PAYMENT METHODS</Link></li>
                                <li><Link to="/about">ABOUT</Link></li>
                                <li><Link to="/contact">CONTACT US</Link></li>
                            </ul>    
                        </div>
                            {/*sign in and log in*/}
                            <Link to="/sign-up" className='lab-btn me-3 d-none d-md-block'>Create Account</Link>
                            <Link to="/login" className='d-none d-md-block'>Logn In</Link>

                            {/*menu toggler*/}
                            <div onClick={()=>setMenuToggle(!menuToggle)} className={`header-bar d-lg-none ${menuToggle ? "active" : ""}`}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>

                            {/*social toggler*/}
                            <div className="ellepsis-bar d-md-none" onClick={()=>setSocialToggle(!socialToggle)}>
                            <i className="icofont-info-square"></i>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Navitem