import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/css';
function Partner() {

    const partner = ([
        { id: "s1", img: "/partner1.svg" },
        { id: "s1", img: "/partner2.svg" },
        { id: "s1", img: "/partner3.svg" },
        { id: "s1", img: "/partner2.svg" },
        { id: "s1", img: "/partner1.svg" },
        { id: "s1", img: "/partner3.svg" },
        { id: "s1", img: "/partner1.svg" },
        { id: "s1", img: "/partner2.svg" },
        { id: "s1", img: "/partner3.svg" },
        { id: "s1", img: "/partner2.svg" },
        { id: "s1", img: "/partner1.svg" },
        { id: "s1", img: "/partner3.svg" },
    ])

    return (
        <div className={`text-center container partner`}>
            <h2 className='title48 mb-4 text-primary font-secondary font-weight-600'>Partner General Insurance Companies</h2>
            <div className={`row `}>
                <div className={`col-xl-7 mx-auto`}>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, Autoplay]}
                        arrows={true}
                        infinite={true}
                        loop={true}
                        className={``}
                        spaceBetween={50}
                        autoplay={{
                            delay: 1000,
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
                              slidesPerView: 2,
                            },
                          0: {
                              slidesPerView: 2,
                            },
                          
                          }}
                    >
                        {partner.map((item) =>
                            <SwiperSlide>
                                <img
                                    src={item.img}
                                    alt="Bimakavach"
                                />
                            </SwiperSlide>
                        )}
                    </Swiper>
                </div>
            </div>
            <div className="d-none d-md-block" style={{height: "160px"}}></div>
            <div className="d-blok d-md-none" style={{height: "80px"}}></div>
        </div>
    )
}

export default Partner