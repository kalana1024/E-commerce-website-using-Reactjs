import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {Autoplay} from "swiper/modules"


const SingleProduct = () => {

    const [product,setProduct]=useState([]);
    const {id}=useParams();
    //console.log(id)
    useEffect(()=>{
      fetch("/src/product.json").then(res =>res.json()).then(data=>setProduct(data))
    }, [])

    const result=product.filter((p)=>p.id===id);
    console.log(result)


  return (
    <div>
      <PageHeader title={"Our Shop Single"} curPage={"Shop / Single Products"}/>
    
      <div className='shop-single padding-tb aside-bg'>
          <div className="container">
            <div className="row justify-content-center">
              
              {/* left side*/}
              <div className='col-lg-8 col-12'>
                  <article>
                    <div className="product-details">
                        <div className='row align-items-center'>
                            <div className='col-md-6 col-12'>
                              <div className="product-thumb">
                                  <div className='swiper-container pro-single-top'>
                                  <Swiper className="mySwiper">
                                    {
                                      result.map((item, i)=>(
                                        <SwiperSlide key={i}>
                                          <div className="single-thumb">
                                          <img src={item.img} alt=""/>
                                          </div>
                                        </SwiperSlide>
                                      ))
                                    }
                                  </Swiper>
                                  </div>
                              </div>
                            </div>
                            <div className='col-md-6 col-12'>Detail</div>
                        </div>
                    </div>

                    {/*review*/}
                    <div className='review'>
                      Review
                    </div>
                  </article>
              </div>

              {/* right side*/}
              <div className='col-lg-4 col-12'>Right side</div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default SingleProduct