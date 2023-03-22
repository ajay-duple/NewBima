import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/css';
import styles from "./trustedBusiness.module.css";
function TrustedBusiness() {
  const params = {
    // direction: 'horizontal',
    // loop: true,
    // speed: 1000,
    // spaceBetween: 30,
    
  };
  return (
    <div className='container'>
      <div className={`text-center py-2 py-md-5 trusted-business ${styles.trustedBusiness}`}>
          <h2 className='title20 mb-3 mb-md-5 mt-5 font-weight-600 text-primary px-sm-0 px-5'>Trusted by the 400+  businesses across India</h2>
          <div className=''>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, Autoplay]}            
                // arrows={true}
                navigation            
                className={`${styles.fadeSlider} ${styles.fadeSliderLeft} ${styles.fadeSliderRight}`}
                spaceBetween={50}
                infinite={true}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false
                }}
                breakpoints={{                
                  1399: {
                    slidesPerView: 7,
                  },
                  1200: {
                    slidesPerView: 6,
                  },
                  992: {
                    slidesPerView: 5,
                  },
                0: {
                    slidesPerView: 2,
                  },
                
                }}
                >
                <SwiperSlide><img src='/trusted1.png' /></SwiperSlide>           
                <SwiperSlide><img src='/trusted2.png' /></SwiperSlide>           
                <SwiperSlide><img src='/trusted3.png' /></SwiperSlide>           
                <SwiperSlide><img src='/trusted2.png' /></SwiperSlide>           
                <SwiperSlide><img src='/trusted1.png' /></SwiperSlide>            
                <SwiperSlide><img src='/trusted2.png' /></SwiperSlide>           
                <SwiperSlide><img src='/trusted3.png' /></SwiperSlide>           
                <SwiperSlide><img src='/trusted2.png' /></SwiperSlide>           
                <SwiperSlide><img src='/trusted1.png' /></SwiperSlide>           
            </Swiper>
          </div>
          <div className='d-block d-md-none mt-3'>
            
            <Swiper
                // {...params}
                modules={[Navigation, Pagination, Scrollbar, Autoplay]}            
                                         
                className={``}
                spaceBetween={50}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false
                }}
                breakpoints={{                
                  1399: {
                    slidesPerView: 7,
                  },
                  1200: {
                    slidesPerView: 6,
                  },
                  992: {
                    slidesPerView: 5,
                  },
                0: {
                    slidesPerView: 2,
                  },
                
                }}
                >
                      
                <SwiperSlide><img src='/trusted3.png' /></SwiperSlide>           
                <SwiperSlide><img src='/trusted2.png' /></SwiperSlide>           
                <SwiperSlide><img src='/trusted1.png' /></SwiperSlide>            
                <SwiperSlide><img src='/trusted2.png' /></SwiperSlide>           
                <SwiperSlide><img src='/trusted3.png' /></SwiperSlide>           
                <SwiperSlide><img src='/trusted2.png' /></SwiperSlide>           
                <SwiperSlide><img src='/trusted1.png' /></SwiperSlide>           
            </Swiper>
          </div>
      </div>

      <div className="d-none d-md-block" style={{height: "240px"}}></div>
      <div className="d-blok d-md-none" style={{height: "80px"}}></div>
    </div>
  )
}

export default TrustedBusiness