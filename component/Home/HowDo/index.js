import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import Card from "../ThreeD/Card";
// import Carousel from "../ThreeD/Carousel";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import "swiper/css/navigation";
import "swiper/css/effect-cards";
import { Pagination, EffectCards } from 'swiper';


import { useSpring, animated } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'

export default function HowDo() {
  
    
  
    // Bind it to a component
    
  
  // let cards = [
  //   {
  //     key: 1,
  //     content: (
  //       <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/convertplus_thumbnail.jpg" />
  //     )
  //   },
  //   {
  //     key: 2,
  //     content: (
  //       <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/acf_pro.png" />
  //     )
  //   },
  //   {
  //     key: 3,
  //     content: (
  //       <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/layer_slider_plugin_thumb.png" />
  //     )
  //   },
  //   {
  //     key: 4,
  //     content: (
  //       <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2016/08/slider_revolution-1.png" />
  //     )
  //   },
  //   {
  //     key: 5,
  //     content: (
  //       <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2019/01/pwa_880_660.jpg" />
  //     )
  //   }
  // ];

  return (
    <>
    
      <div className="howDo ">
        <div className={`row text-center`}>
          <div className={`col-md-12 mx-auto`}>
            <div className='commnHeading'>
              <div className='polyBox border-primary bg-blueLight mb-4 text-primary title16 font-weight-600 '>We are hassle free</div>
              <div className='title64 font-secondary mb-4 text-primary font-weight-600'>How do we do it</div>
              <p className='title20 font-weight-500 mb-4'>Insurance for your startup/SME should be easy to set up so that you can focus on what’s important - growing!</p>
            </div>
          </div>
        </div>

        <div className="row my-5">
          <div className="">
            {/* <Carousel
              cards={cards}
              height="500px"
              width="30%"
              margin="0 auto"
              offset={2}
              showArrows={false}
            /> */}
          </div>
          {/* <Carousel slides={slides} autoplay={true} interval={3000} onSlideChange={callback} /> */}
          <div className="howDo-slider mx-auto d-none@">

            <Swiper
              // modules={[Navigation, Pagination, Scrollbar, Autoplay]}
              // direction={"vertical"}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination, EffectCards]}
              className="howDo-swiper px-5"
              autoplay={{
                delay: 1000,
                // disableOnInteraction: false
              }}
              breakpoints={{                
                1200: {
                },
                0: {
                  // modules:[Pagination, EffectCards],
                  // effect: "cards",
                  // spaceBetween: 20,
                  // modules: [Pagination],
                  // centeredSlides: true, 
                  // effect: "fade",
                },
              
              }}

              // navigation={true}
              // modules={[Pagination]}
              effect={"cards"}
            //  grabCursor={true}
            //  modules={[EffectCards]}
            >
              <SwiperSlide>
                <>
                  <div className="bg-primary howDo-sliderBox radius-15 position-relative d-flex flex-column justify-content-md-between">
                    <img className="howDo-sliderBoxImg position-absolute" src="/howdo.png" />
                    <div className="row mb-5">
                      <div className="col-md-4">
                        <div className="howDo-sliderBoxText text-white">
                          <div className="howDo-sliderBox-index d-flex align-items-center justify-content-center title16 mb-4 mb-md-0">01</div>
                          <div className="title64 font-secondary font-weight-500">Simple</div>
                          <div className="title20 font-weight-500 mt-2 mt-md-0">Answer a few simple questions to get instant recommendations.</div>
                        </div>
                      </div>
                    </div>
                    <div className='d-flex text-white howDo-sliderBox-btn'>
                      <a className='btnCommon ps-0 text-decoration-none'>
                        <span className="me-2 font-weight-500 d-none d-md-inline">  Next: Digital  </span>
                        <img src="/icons/arrowRight-white.svg" />
                      </a>
                    </div>
                  </div>

                </>
              </SwiperSlide>
              <SwiperSlide>
                <>
                  <div className="bg-primary howDo-sliderBox radius-15 position-relative d-flex flex-column justify-content-md-between">
                    <img className="howDo-sliderBoxImg position-absolute" src="/howdo.png" />
                    <div className="row mb-5">
                      <div className="col-md-4">
                        <div className="howDo-sliderBoxText text-white">
                          <div className="howDo-sliderBox-index d-flex align-items-center justify-content-center title16 mb-4 mb-md-0">02</div>
                          <div className="title64 font-secondary font-weight-500">Simple2</div>
                          <div className="title20 font-weight-500 mt-2 mt-md-0">Answer a few simple questions to get instant recommendations.</div>
                        </div>
                      </div>
                    </div>
                    <div className='d-flex text-white howDo-sliderBox-btn'>
                      <a className='btnCommon ps-0 text-decoration-none'>
                        <span className="me-2 font-weight-500 d-none d-md-inline">  Next: Digital  </span>
                        <img src="/icons/arrowRight-white.svg" />
                      </a>
                    </div>
                  </div>

                </>
              </SwiperSlide>
              <SwiperSlide>
                <>
                  <div className="bg-primary howDo-sliderBox radius-15 position-relative d-flex flex-column justify-content-md-between">
                    <img className="howDo-sliderBoxImg position-absolute" src="/howdo.png" />
                    <div className="row mb-5">
                      <div className="col-md-4">
                        <div className="howDo-sliderBoxText text-white">
                          <div className="howDo-sliderBox-index d-flex align-items-center justify-content-center title16 mb-4 mb-md-0">03</div>
                          <div className="title64 font-secondary font-weight-500">Simple3</div>
                          <div className="title20 font-weight-500 mt-2 mt-md-0">Answer a few simple questions to get instant recommendations.</div>
                        </div>
                      </div>
                    </div>
                    <div className='d-flex text-white howDo-sliderBox-btn'>
                      <a className='btnCommon ps-0 text-decoration-none'>
                        <span className="me-2 font-weight-500 d-none d-md-inline">  Next: Digital  </span>
                        <img src="/icons/arrowRight-white.svg" />
                      </a>
                    </div>
                  </div>

                </>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="d-none d-md-block" style={{height: "400px"}}></div>
        <div className="d-blok d-md-none" style={{height: "80px"}}></div>
      </div>
    </>
  );
}
