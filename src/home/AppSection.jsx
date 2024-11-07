import React from 'react'
import {Link} from 'react-router-dom';

const btnText="Sign up Now";
const title="Shop Anytime, Anywhere";
const desc="If you want to upgrade your own laptop or desktop, join now with our online experiences";

const AppSection = () => {
  return (
    <div className='app-section padding-tb'>
        <div className="container">
            <div className="section-header text-center">
                <Link to="/sign-up" className='lab-btn mb-4'>{btnText}</Link>
                <h2 className="title">{title}</h2>
                <p>{desc}</p>
            </div>
        </div>
    </div>
  )
}

export default AppSection