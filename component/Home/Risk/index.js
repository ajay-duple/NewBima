import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/css';
import "swiper/css/pagination";
function BusinessRisk() {

    const businessSituations = ([
        { id: "s1", title: "Corruption" },
        { id: "s1", title: "Theft" },
        { id: "s1", title: "Money Laundering" },
        { id: "s1", title: "Cyber Fraud" },
        { id: "s1", title: "Phishing" },
        { id: "s1", title: "Counterfeit" },
        { id: "s1", title: "Ransomware" },
        { id: "s1", title: "Money Laundering" },
        { id: "s1", title: "Cyber Fraud" },
        { id: "s1", title: "Phishing" },

    ])
    const businessConsequences = ([
        { id: "s1", title: "Business Insolvency" , img:"/industry-traditional-white.svg" },
        { id: "s1", title: "Business Closure" , img:"/industry-traditional-white.svg"},
        { id: "s1", title: "Personal Bankruptcy" , img:"/industry-traditional-white.svg"},
        { id: "s1", title: "Unsustainable Legal Fees" , img:"/industry-traditional-white.svg"},
        { id: "s1", title: "Large Fines" , img:"/industry-traditional-white.svg"},
        { id: "s1", title: "Business Closure" , img:"/industry-traditional-white.svg"},
        { id: "s1", title: "Unsustainable Legal Fees" , img:"/industry-traditional-white.svg"},
        { id: "s1", title: "Personal Bankruptcy" , img:"/industry-traditional-white.svg"},

    ])

    return (
        <div className={`business-risk container`}>
            <div className={`row text-center`}>
                <div className={`col-md-8 mx-auto`}>
                    <div className='polyBox border-primary bg-blueLight mb-4 text-primary title16 font-weight-600 '>The Problems</div>
                    <h2 className='title48 font-secondary mb-0 text-primary font-secondary font-weight-600'>Every business has <i>risks</i></h2>
                    <p className='title24 font-weight-600 text-primary px-0 px-lg-5 mb-3'>
                        Running a business without insurance is like driving a 
                        <span className="d-none d-xl-block">car without seat belts: Accidents happen.</span> 
                        <span className="d-inline d-xl-none">car without seat belts: Accidents happen. </span> 
                    </p>
                </div>
            </div>
            <div className={`row mt-5`}>
                <div className={`col`}>
                    <div className='bg-primary business-riskBlue'>
                        <div className='bg-primary '>
                            <div className={`row mb-5`}>
                                <div className={`col-md-12`}>
                                    <div className={`row`}>
                                        <div className={`col-md-8 mx-auto text-sm-start text-center`}>
                                            <div className='title32 text-white font-weight-600 mb-4'><i>Situations</i></div>
                                        </div>
                                    </div>
                                    <Swiper
                                        modules={[Navigation, Pagination, Scrollbar, Autoplay]}   
                                                                      
                                        navigation={false}
                                        // slidesPerView={"5"}
                                        infinite={true}
                                        className={`businessRisk-slider my-2`}
                                        itemClass="mx-5"
                                        loop={true}
                                        spaceBetween={20}
                                        autoplay={{
                                            delay: 2000,
                                            disableOnInteraction: false
                                        }}
                                        centeredSlides={true}
                                        breakpoints={{
                                            // when window width is >= 640px
                                            1399: {
                                              slidesPerView: 5,
                                            },
                                            1200: {
                                              slidesPerView: 4,
                                            },
                                            992: {
                                              slidesPerView: 3,
                                            },
                                          0: {
                                              slidesPerView: 2,
                                            },
                                        }}

                                    >
                                        {businessSituations.map((item) =>
                                            <SwiperSlide>
                                                <div className='businessRisk-sliderItem font-secondary@ font-weight-400 title24 p-2 text-center text-white'>
                                                    <span>{item.title}</span> 
                                                </div>
                                            </SwiperSlide>
                                        )}
                                    </Swiper>
                                </div>
                            </div>
                            <div className={`row pt-4`}>
                                <div className={`col-md-12`}>
                                    <div className={`row`}>
                                        <div className={`col-md-8 mx-auto text-sm-start text-center`}>
                                            <div className='title32 text-white font-weight-600 mb-4'><i>Consequences</i></div>
                                        </div>
                                    </div>
                                    <Swiper
                                        modules={[Navigation, Pagination, Scrollbar, Autoplay]}
                                        dir="rtl"
                                        infinite={true}
                                        loop={true}
                                        className={`businessRisk-slider my-2 `}
                                        itemClass="mx-5"
                                        spaceBetween={20}
                                        
                                        // slidesPerView={5}
                                        centeredSlides={true}
                                        autoplay={{
                                            delay: 2000,
                                            disableOnInteraction: false
                                        }}
                                        breakpoints={{
                                            // when window width is >= 640px
                                            1399: {
                                              slidesPerView: 4,
                                            },
                                            1200: {
                                              slidesPerView: 4,
                                            },
                                            992: {
                                              slidesPerView: 3,
                                            },
                                          0: {
                                              slidesPerView: 2,
                                            },
                                        }}
                                    >
                                        {businessConsequences.map((item) =>
                                            <SwiperSlide className="text-start">
                                                <div className='title22 font-weight-500 businessRisk-sliderItem p-2  text-white'>
                                                    <img src={item.img} className="text-start"/>
                                                    <span className='text-center'>{item.title}</span> 
                                                </div>
                                            </SwiperSlide>
                                        )}
                                    </Swiper>
                                </div>
                            </div>
                        
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-none d-md-block" style={{height: "300px"}}></div>
            <div className="d-blok d-md-none" style={{height: "80px"}}></div>
        </div>
    )
}

export default BusinessRisk