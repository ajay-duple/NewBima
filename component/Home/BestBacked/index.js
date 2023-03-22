import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/effect-cards";

import Calender from '../../Icons/Calender'
import WhatsApp from '../../Icons/WhatsApp'

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function BestBacked() {
    const best = ([
        { id: "s1", img: "/backBest1.png" },
        { id: "s1", img: "/backBest2.png" },
        { id: "s1", img: "/backBest3.png" },
        { id: "s1", img: "/backBest2.png" },
        { id: "s1", img: "/backBest4.png" },
        { id: "s1", img: "/backBest1.png" },
        { id: "s1", img: "/backBest2.png" },
        { id: "s1", img: "/backBest3.png" },
        { id: "s1", img: "/backBest2.png" },
        { id: "s1", img: "/backBest4.png" },

    ])
    return (
        <>
            <div className="backedBest container bg-red-500">
                <div className={`row text-center`}>
                    <div className={`col-md-8 mx-auto`}>
                        <div className='commnHeading'>
                            <div className='polyBox border-primary bg-blueLight mb-4 text-primary title16 font-weight-600 '>Our Investors</div>
                            <div className='title64 font-secondary mb-4 text-primary font-weight-600'>Backed by the bests</div>
                        </div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-10 mx-auto">
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            arrows={true}
                            // navigation={true}
                            loop={true}
                            className={``}
                            slidesPerView={5}
                            breakpoints={{
                                // when window width is >= 640px
                                1399: {
                                  slidesPerView: 4,
                                  spaceBetween: 50
                                },
                                1200: {
                                  slidesPerView: 4,
                                },
                                992: {
                                  slidesPerView: 1,
                                },
                              0: {
                                  slidesPerView: 2,
                                  spaceBetween: 15
                                },
                              
                              }}
                        autoplay={{
                            delay: 1000,
                            disableOnInteraction: false
                        }}

                        >
                            {best.map((item) =>
                                <SwiperSlide>
                                    <div className='backedBest-card bg-blueExtraLight'>
                                        <img src={item.img} />
                                    </div>
                                </SwiperSlide>
                            )}
                        </Swiper>
                    </div>
                </div>
                <div className="d-none d-md-block" style={{height: "200px"}}></div>
                <div className="d-blok d-md-none" style={{height: "80px"}}></div>
                <div className={`row mt-5 text-center getStarted`}>
                    <div className={`col-xl-6 d-none d-xl-block`}>
                        <div className='bg-gray getStarted-left  overflow-hidden h-100'>
                                <img className="img-fluid h-100 object-fit-cover" src="https://www.theforage.com/blog/wp-content/uploads/2022/11/life-insurance-good-career-path.jpg" />
                        </div>
                    </div>
                    <div className={`col-xl-6`}>
                        <div className='getStarted-right h-100 bg-primary d-flex flex-column justify-content-between'>
                            <div className="">
                                <div className='title24 mb-4 font-weight-400 text-white fst-italic'>How do you get started?</div>
                                <div className='title30  mb-4 text-white font-weight-600 '>Schedule a consultation to see how BimaKavach can reduce your risk.</div>
                            </div>
                            <div className="">
                                <div className="d-flex justify-content-center flex-column flex-md-row pb-2" >
                                                                    
                                    <a className="btnCommon px-4 border-white btnBorder text-white font-weight-400 text-decoration-none" type="submit"> 
                                        <Calender iconColor="white" width="18" height="18"/>
                                        <span className="ms-2"> Schedule a call</span>
                                    </a>
                                    <a className="btnCommon px-4 bg-white d-flex align-items-cet text-primary text-decoration-none ms-md-4 mt-3 mt-md-0" type="submit"> 
                                        <WhatsApp iconColor="primary" width="18" height="18"/>
                                        <span className="ms-2"> WhatsApp us</span>
                                    </a>
                                </div>
                                <p className="title16 text-white mt-4">Say hello to a spam-free zone! We respect your privacy and won't bombard you with unwanted calls.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
