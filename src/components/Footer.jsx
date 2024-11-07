import React from 'react'
import {Link} from 'react-router-dom';
const title = "About ShopCart"; const desc = "Discover top-tier laptops and powerful desktops at our online store. Shop confidently with our curated selection, expert support, and exclusive deals. Upgrade your tech today!"; const ItemTitle = "Categories"; const quickTitle = "Quick Links"; const tweetTitle = "Recent Tweets";

const addressList = [
  { iconName: "icofont-google-map", text: " Beligaha jnction, Galle." },
  { iconName: "icofont-phone", text: " +947 7128 4323" },
  { iconName: "icofont-envelope", text: " axitacomputer@gmail.com" },
];

const socialList = [
  { iconName: "icofont-facebook", siteLink: "#", className: "facebook" },
  
  
  
  
];

const ItemList = [
  { text: "All Products", link: "/shop" },
  { text: "Laptop", link: "/shop" },
  { text: "Laptop Accessories", link: "/blog" },
  { text: "Desktop", link: "/about" },
  { text: "Desktop Accessories", link: "#" },
  { text: "Other Accessories", link: "/about" },
];

const quickList = [
  { text: "About us", link: "#" },
  { text: "Hotline", link: "#" },
  { text: "Gallery", link: "#" },
  { text: "Forums", link: "#" },
  { text: "Privacy Policy", link: "#" },
  { text: "Terms of Use", link: "#" },
];

const tweetList = [
  {
    iconName: "icofont-twitter",
    desc: "Grab your item, 50% Big Sale Offer !!",
  },
  {
    iconName: "icofont-twitter",
    desc: "Grab your item, 50% Big Sale Offer !!",
  },
];
const footerbottomList = [
  { text: "Faculty", link: "#" },
  { text: "Staff", link: "#" },
  { text: "Students", link: "#" },
  { text: "Alumni", link: "#" },
];

const Footer = () => {
  return <footer className='style-2'>
    <div className="footer-top dark-view padding-tb">
        <div className="container">
            <div className="row gap-4 row-cols-xl-5 row-cols-sm-2 row-cols-1 justify-content-center">
                <div className="col">
                    <div className="footer-item our-address">
                        <div className="footer-inner">
                            <div className="footer-content">
                                <div className="title">
                                    <h4>{title}</h4>
                                    <div className="content">
                                        <p>{desc}</p>
                                        <ul className='lab-ul office-address'>
                                            {
                                                addressList.map((val,i)=>(
                                                    <li key={i}>
                                                        <i className={val.iconName}>{val.text}</i>                  
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                        <ul className='lab-ul social-icons'>
                                            {
                                                socialList.map((val,i)=>(
                                                    <li key={i}>
                                                       <a href="#" className={val.className}><i className={val.iconName}>{val.text}</i> </a>                   
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col">
                    <div className="footer-item our-address">
                        <div className="footer-inner">
                            <div className="footer-content">
                                <div className="title">
                                    <h4>{quickTitle}</h4>
                                    <div className="content">
                                        
                                        <ul className='lab-ul office-address'>
                                            {
                                                quickList.map((val,i)=>(
                                                    <li key={i}>
                                                        <a href="#">{val.text}</a>                  
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col">
                    <div className="footer-item our-address">
                        <div className="footer-inner">
                            <div className="footer-content">
                                <div className="title">
                                    <h4>{ItemTitle}</h4>
                                    <div className="content">
                                        
                                        <ul className='lab-ul office-address'>
                                            {
                                                ItemList.map((val,i)=>(
                                                    <li key={i}>
                                                        <a href="#">{val.text}</a>                  
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col">
                    <div className="footer-item our-address">
                        <div className="footer-inner">
                            <div className="footer-content">
                                <div className="title">
                                    <h4>{tweetTitle}</h4>
                                    <div className="content">
                                        
                                        <ul className='lab-ul office-address'>
                                            {
                                                tweetList.map((val,i)=>(
                                                    <li key={i}>
                                                        <i className={val.iconName}></i> 
                                                        {val.desc}                 
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>

{/*footer bottom */}
  <div className="footer-bottom">
    <div className="container">
        <div className="section-wrapper">
                  <p>All Right Reserved: 2024 <Link to="/">Shop Cart</Link> Designed by <a href="/" target='_blank'>Kalana S Narangoda</a></p>                                  
                  <div className="footer-bottom-list">
                        {
                            footerbottomList.map((val,i)=>(
                                <a href='#' key={i}>{val.text}</a>
                            ))
                        }
                    </div>                          
            </div>
        </div>
    </div>                                          
  </footer>
    
  
}

export default Footer