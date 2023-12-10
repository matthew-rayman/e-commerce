import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import data from "../products.json"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {Autoplay} from "swiper/modules"
import Pageheader from '../components/Pageheader';
import ProductDisplay from './ProductDisplay';
import Review from './Review';
import PopularPosts from './PopularPosts';
import Tags from './Tags'


const SingleProduct = () => {
    useEffect(() => {
   window.scrollTo({ top: 0, left: 0 })
}, [])
    const [products,setProducts] = useState(data)
    const {id} = useParams()

    const filteredProduct = products.filter((p)=> p.id == id)
    
  return (
    <div>
         <Pageheader title="Single Product Detail" curPage="Shop / Single Product"/>
     <div className="animate__animated animate__fadeInDown animate__slow shop-single padding-tb aside-bg">
        <div className=" container">
            <div className=" row justify-content-center">
                <div className=" col-lg-8 col-12">
                    <article>
                        <div className=" product-details">
                            <div className=" row align-items-center">
                                <div className=" col-md-6 col-12">
                                    <div className=" product-thumb">
                                        <div className=" swiper-container pro-single-top">
                                            <Swiper 
                                                className="mySwiper"
                                                spaceBetween={30}
                                                slidesPerView={1}
                                                loop={"true"}
                                                autoplay={{
                                                    delay : 2000,
                                                    disableOnInteraction : false
                                                }}
                                                modules={[Autoplay]}
                                                navigation={
                                                    {
                                                        prevEl: ".pro-single-prev",
                                                        nextEl: ".pro-single-next"
                                                    }
                                                }
                                                >
                                                {
                                                    filteredProduct.map((p,i)=>(
                                                        <SwiperSlide key={i}>
                                                            <div className=" pro-thumb">
                                                                <img src={p.img} alt="" />
                                                            </div>
                                                        </SwiperSlide>
                                                    ))
                                                }
                                            </Swiper>
                                            <div className=" pro-single-next">
                                                <i className=" icofont-rounded-left"></i>
                                            </div>
                                            <div className=" pro-single-prev">
                                                <i className=" icofont-rounded-right"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className=" col-md-6 col-12">
                                    <div className=" post-content">
                                        <div className="">
                                            {
                                                filteredProduct.map((p)=>(
                                                   <ProductDisplay key={p.id} product={p}/>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" review">
                                <Review seller={filteredProduct[0].seller} />
                        </div>
                    </article>
                </div>
                <div className=" col-lg-4 col-12">
                    <div className=" ps-lg-4">
                        <PopularPosts/>
                    <Tags/>
                    </div>
                </div>

            </div>
        </div>
     </div>
    </div>
  )
}

export default SingleProduct
