import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';


export default function RecentActivity() {
    const recentActivity = ([
        { id: "s1", img: "/dummy.jpg", title: "CII Event in Nashik", date: "21 January 2023" },
        { id: "s1", img: "/dummy.jpg", title: "CII Event in Nashik", date: "21 January 2023" },
        { id: "s1", img: "/dummy.jpg", title: "CII Event in Nashik", date: "21 January 2023" },
        { id: "s1", img: "/dummy.jpg", title: "CII Event in Nashik", date: "21 January 2023" },
        { id: "s1", img: "/dummy.jpg", title: "CII Event in Nashik", date: "21 January 2023" },
        { id: "s1", img: "/dummy.jpg", title: "CII Event in Nashik", date: "21 January 2023" },
    ])

    return (
        <div className='RecentActivity @container'>
            <div className="d-none d-md-block" style={{ height: "200px" }}></div>
            <div className="d-blok d-md-none" style={{ height: "80px" }}></div>
            <div className={`row `}>
                <div className={`col-xl-1  `}></div>
                <div className={`col-xl-11 text-center text-xl-start`}>
                    <div className={`row `}>
                        <div className={`col-md-2`}>
                            <div className='commnHeading mt-3'>
                                <div className='polyBox border-primary bg-blueLight text-primary title16 font-weight-600 '>Our Culture</div>
                            </div>
                        </div>
                        <div className={`col-md-10 ms-5@ align-justify-end ps-xl-5@ mt-4 mt-md-0`}>
                            <div className='commnHeading'>
                                <div className='title64 font-secondary  text-primary font-weight-600'>Recent activities at <br></br> Bimakavach </div>
                                <p className='px-5 mx-4 d-block d-md-none text-primary font-weight-600 mt-3' style={{fontSize: "15px"}}>Keep updated with all our activities we do PAN India</p>
                            </div>
                            <div className='RecentActivity-yellow mt-md-5 py-5@ mt-4@ pe-xl-2'>
                                <div className='row align-items-end pb-'>
                                    <div className='col-lg-2 mt-2 d-none d-lg-block position-relative'>
                                        <div className=' d-none d-lg-block' style={{ height: "20px" }}></div>
                                        <div className="d-flex justify-content-center RecentActivity-yellow-arrow">
                                            <div className='image-swiper-button-prev ' style={{ transform: "rotate(180deg)", marginTop: "5px" }}>
                                                <svg width="42" height="20" viewBox="0 0 29 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0 6.93994H27.83" stroke="#0E2B72" stroke-width="1.6" stroke-linejoin="bevel" />
                                                    <path d="M21.6211 0.569824L28.0011 6.93982L22.0011 12.9398" stroke="#0E2B72" stroke-width="1.6" stroke-linejoin="bevel" />
                                                </svg>

                                            </div>
                                            <div className='image-swiper-button-next ms-4'>
                                                <svg width="42" height="20" viewBox="0 0 29 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0 6.93994H27.83" stroke="#0E2B72" stroke-width="1.6" stroke-linejoin="bevel" />
                                                    <path d="M21.6211 0.569824L28.0011 6.93982L22.0011 12.9398" stroke="#0E2B72" stroke-width="1.6" stroke-linejoin="bevel" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-10'>

                                        <Swiper
                                            modules={[Navigation, Pagination, Autoplay]}
                                            // navigation={true}
                                            navigation={{
                                                nextEl: ".image-swiper-button-next",
                                                prevEl: ".image-swiper-button-prev",
                                                disabledClass: "swiper-button-disabled"
                                            }}
                                            loop={true}
                                            className={``}
                                            spaceBetween={5}
                                            autoplay={{
                                                delay: 2000,
                                                disableOnInteraction: false
                                            }}
                                            breakpoints={{
                                                // when window width is >= 640px
                                                1399: {
                                                    slidesPerView: 3,
                                                },
                                                1200: {
                                                    slidesPerView: 3,
                                                },
                                                992: {
                                                    slidesPerView: 2,
                                                },
                                                0: {
                                                    slidesPerView: 1,
                                                },

                                            }}

                                        >
                                            {recentActivity.map((item) =>
                                                <SwiperSlide>
                                                    <div className='RecentActivity-card border-primary p-4 p-xl-2'>
                                                        <img className='img-fluid' src={item.img} />
                                                        <p className='title24 RecentActivity-cardTitle font-weight-600 mb-1 mt-2 text-primary '>{item.title}</p>
                                                        <p className='title16 RecentActivity-cardDate text-yellow3 '>{item.date}</p>
                                                    </div>
                                                </SwiperSlide>
                                            )}
                                        </Swiper>
                                        <div className='divider d-none d-lg-block bg-yellow2 w-75'></div>
                                    </div>
                                    <div className='col-lg-12 mt-2 d-block d-lg-none'>
                                        <div className="d-flex justify-content-center">
                                            <div className='image-swiper-button-prev ' style={{ transform: "rotate(180deg)", marginTop: "5px" }}>
                                               {/* <ArrowSlider /> */}
                                               <svg width="42" height="20" viewBox="0 0 29 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0 6.93994H27.83" stroke="#0E2B72" stroke-width="1.6" stroke-linejoin="bevel" />
                                                    <path d="M21.6211 0.569824L28.0011 6.93982L22.0011 12.9398" stroke="#0E2B72" stroke-width="1.6" stroke-linejoin="bevel" />
                                                </svg>
                                            </div>
                                            <div className='image-swiper-button-next ms-4'>
                                                <svg width="42" height="20" viewBox="0 0 29 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0 6.93994H27.83" stroke="#0E2B72" stroke-width="1.6" stroke-linejoin="bevel" />
                                                    <path d="M21.6211 0.569824L28.0011 6.93982L22.0011 12.9398" stroke="#0E2B72" stroke-width="1.6" stroke-linejoin="bevel" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
