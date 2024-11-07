import React from 'react'
import {Link} from 'react-router-dom';

const subTitle = "Choose Any Products";
const title = "Buy Everything with Us";
const btnText = "Get Started Now";

const categoryList = [
{
imgUrl: 'src/assets/images/category/01.jpg',
imgAlt: 'category rajibraj91 rajibraj',
iconName: 'icofont-brand-windows',
title: 'Laptops',
},
{
imgUrl: 'src/assets/images/category/02.jpg',
imgAlt: 'category rajibraj91 rajibraj',
iconName: 'icofont-brand-windows',
title: 'Laptop Accessories',
},
{
imgUrl: 'src/assets/images/category/03.jpg',
imgAlt: 'category rajibraj91 rajibraj',
iconName: 'icofont-brand-windows',
title: 'Desktop',
},
{
imgUrl: 'src/assets/images/category/04.jpg',
imgAlt: 'category rajibraj91 rajibraj',
iconName: 'icofont-brand-windows',
title: 'Desktop Accessories',
},
{
imgUrl: 'src/assets/images/category/05.jpg',
imgAlt: 'category rajibraj91 rajibraj',
iconName: 'icofont-brand-windows',
title: 'Monitors and subwoofers',
},
{
imgUrl: 'src/assets/images/category/06.jpg',
imgAlt: 'category rajibraj91 rajibraj',
iconName: 'icofont-brand-windows',
title: 'Other Accessories',
},
]

const HomeCategory = () => {
  return (
    <div className="category-section style-4 padding-tb">
        <div className="container">
            {/* section header */}
            <div className="section-header text-center">
                <span className="subtitle">{subTitle}</span>
                <h2 className="title">{title}</h2>
            </div>

            {/*section card */}

            <div className="section-wrapper">
                <div className="row g-4 justify-content-center row-cols-md-3 row-cols-sm-2 row-cols-1">
                    {
                        categoryList.map((val,i)=>(<div key={i} className="col">
                            <Link to="/products" className="category-item">
                                <div className="category-inner">

                                    {/*image thumbnails */}
                                    <div className="category-thump">
                                        <img src={val.imgUrl} alt="" />
                                    </div>

                                    {/*content */}
                                    <div className="category-content">
                                        <div className="cate-icon">
                                        <i className={val.iconName}></i>
                                        </div>
                                        <Link to="/products"><h6>{val.title}</h6></Link>
                                    </div>
                                
                                </div>
                            </Link>
                        </div>))
                    }
                </div>
                <div className="text-center mt-5">
                    <Link to="/products" className="lab-btn"><span>{btnText}</span></Link>
                </div>
            </div>

        </div>
    </div>
  )
}

export default HomeCategory