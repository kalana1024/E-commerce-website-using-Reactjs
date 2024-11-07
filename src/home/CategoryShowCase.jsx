import React, { useState } from 'react'
import Ratting from '../components/Ratting';
import {Link} from 'react-router-dom';

const title = "Our Products";

const ProductData = [
{
imgUrl: 'src/assets/images/categoryTab/01.jpg',
cate: 'Laptop',
title: 'ASUS ROG',
author: 'assets/images/course/author/01.jpg',
brand: 'ASUS',
price: '$199.00',
id: 1,
},
{
imgUrl: 'src/assets/images/categoryTab/02.jpg',
cate: 'Desktop',
title: 'Casing',
author: 'assets/images/course/author/02.jpg',
brand: 'PowerHog',
price: '$199.00',
id: 2,
},
{
imgUrl: 'src/assets/images/categoryTab/03.jpg',
cate: 'Monitors',
title: 'ASUS Gaming Monitor',
author: 'src/assets/images/categoryTab/brand/apple.png',
brand: 'ASUS',
price: '$199.00',
id: 3,
},
{
imgUrl: 'src/assets/images/categoryTab/04.jpg',
cate: 'Desktop',
title: 'RTX 4060',
author: 'assets/images/course/author/04.jpg',
brand: 'NVIDIA',
price: '$199.00',
id: 4,
},
{
imgUrl: 'src/assets/images/categoryTab/05.jpg',
cate: 'Laptop',
title: 'Lexer 1TB SSD',
author: 'assets/images/course/author/05.jpg',
brand: 'Lexer',
price: '$199.00',
id: 5,
},
{
imgUrl: 'src/assets/images/categoryTab/06.jpg',
cate: 'Others',
title: 'Gaming Combo',
author: 'assets/images/course/author/06.jpg',
brand: 'Zaara',
price: '$199.00',
id: 6,
},
{
imgUrl: 'src/assets/images/categoryTab/07.jpg',
cate: 'Desktop',
title: 'G7 Mother Board ',
author: 'assets/images/course/author/01.jpg',
brand: 'ASUS',
price: '$199.00',
id: 7,
},
{
imgUrl: 'src/assets/images/categoryTab/08.jpg',
cate: 'Laptop',
title: 'Cooling Pad',
author: 'assets/images/course/author/02.jpg',
brand: 'Nojimuro',
price: '$199.00',
id: 8,
},
]

const CategoryShowCase = () => {
    const[items,setItems]=useState(ProductData);

//category based filtering
    const  filterItem=(categItem)=>{
        const updateItems=ProductData.filter((curElem)=>{
            return curElem.cate===categItem;
        });

        setItems(updateItems)
    };
  return (
    <div className="course-section style-3 padding-tb">
            {/*shapes */}
            <div className="course-shape one"><img src="/src/assets/images/shape-img/icon/01.png" alt="" /></div>
            <div className="course-shape two"><img src="/src/assets/images/shape-img/icon/02.png" alt="" /></div>
    
    {/* main section*/}
    <div className="container">
        {/*section header*/}
        <div className="section-header">
            <h2 className="title">{title}</h2>
            <div className="course-filter-group">
                <ul className="lab-ul">
                    <li onClick={()=>setItems(ProductData)}>All</li>
                    <li onClick={()=>filterItem("Laptop")}>Laptops & Accessories</li>
                    <li onClick={()=>filterItem("Desktop")}>Desktop & Accessories </li>
                    <li onClick={()=>filterItem("Monitors")}>Monitors & Speakers</li>
                    <li onClick={()=>filterItem("Others")}>Others</li>
                </ul>
            </div>
        </div>

        {/*section body */}
        <div className="section-wrapper">
            <div className="row g-4 justify-content-center row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1 course-filter">
                {
                    items.map((product)=><div key={product.id} className="col">
                            <div className="course-item" style-4>
                                <div className="course-inner">
                                    <div className="course-thumb">
                                        <img src={product.imgUrl} alt="" />
                                        <div className="course-category">
                                            <div className="course-cate">
                                                <a href="#">{product.cate}</a>
                                            </div>
                                            <div className="course-reiew">
                                                <Ratting/>
                                            </div>
                                        </div>
                                    </div>

                                    {/*content */}
                                    <div className="course-content">
                                        <Link to={`/products/${product.id}`} ><h6>{product.title}</h6></Link>
                                        <div className="course-footer">
                                            <div className="course-author">
                                            <Link to="/" className="ca-name">{product.brand}</Link>
                                            </div>
                                            <div  >
                                                <b>{product.price}</b>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>)
                }
            </div>
        </div>

    </div>
    </div>
  )
}

export default CategoryShowCase