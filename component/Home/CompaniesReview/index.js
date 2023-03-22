import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";



export default function Companies() {
  const review = ([
    { id: "s1", text: `"BimaKavach saved us thousands by replacing our policy from a traditional insurer with one designed for a startup like ours."`, name: "Akash Agarwal", position: "CEO & Founder, Finbox", img: "/backBest1.png" },
    { id: "s1", text: `"BimaKavach saved us thousands by replacing our policy from a traditional insurer with one designed for a startup like ours."`, name: "Pankaj Sharma", position: "Developer, Finbox", img: "/backBest2.png" },
    { id: "s1", text: `"BimaKavach saved us thousands by replacing our policy from a traditional insurer with one designed for a startup like ours."`, name: "Kuldeep Thakur", position: "Advisor, Finbox", img: "/backBest3.png" },
    { id: "s1", text: `"BimaKavach saved us thousands by replacing our policy from a traditional insurer with one designed for a startup like ours."`, name: "Deepak Mali", position: "Area Manager, Finbox", img: "/backBest2.png" },
    { id: "s1", text: `"BimaKavach saved us thousands by replacing our policy from a traditional insurer with one designed for a startup like ours."`, name: "Saksham", position: "Sale Officer, Finbox", img: "/backBest3.png" },
    { id: "s1", text: `"BimaKavach saved us thousands by replacing our policy from a traditional insurer with one designed for a startup like ours."`, name: "Pankaj Sharma", position: "Developer, Finbox", img: "/backBest2.png" },
    { id: "s1", text: `"BimaKavach saved us thousands by replacing our policy from a traditional insurer with one designed for a startup like ours."`, name: "Kuldeep Thakur", position: "Advisor, Finbox", img: "/backBest3.png" },
    { id: "s1", text: `"BimaKavach saved us thousands by replacing our policy from a traditional insurer with one designed for a startup like ours."`, name: "Deepak Mali", position: "Area Manager, Finbox", img: "/backBest2.png" },
    { id: "s1", text: `"BimaKavach saved us thousands by replacing our policy from a traditional insurer with one designed for a startup like ours."`, name: "Saksham", position: "Sale Officer, Finbox", img: "/backBest3.png" },

  ])
  const reviewImg = ([
    { id: "s1", img: "/backBest1.png" },
    { id: "s1", img: "/backBest2.png" },
    { id: "s1", img: "/backBest3.png" },
    { id: "s1", img: "/backBest4.png" },

  ])

  return (
    <div className='companyReview'>
      <div className='container'>
        <div className={`row text-center`}>
          <div className={`col-md-9 mx-auto`}>
            <div className='commnHeading'>
            <div className='polyBox border-primary bg-blueLight mb-4 text-primary title16 font-weight-600 '>The Trust</div>
              <div className='title64 font-secondary mb-4 text-primary font-weight-600'>Trusted <i>by</i> the most innovative companies in India</div>
              <div className=' text-primary font-weight-600 title16' >Our customers trust us.</div>
            </div>
          </div>
        </div>
      </div>

      <div className={`row my-5`}>
        <div className={`col-md-8 mx-auto text-center pb-5 pb-md-0`}>

          <Swiper
            modules={[Navigation, Pagination, Scrollbar, Autoplay]}
            arrows={true}
            navigation={true}
            // navigation={{
            //   nextEl: ".image-swiper-button-next",
            //   prevEl: ".image-swiper-button-prev",
            //   disabledClass: "swiper-button-disabled"
            // }}
            loop={true}
            className={``}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false
            }}

          >
            {review.map((item) =>
              <SwiperSlide>
                  <div className='companyReview-card mx-5 px-md-5'>
                  <p className='title24 companyReview-cardText font-weight-400 mb-4'>{item.text}</p>
                  <p className='title24 companyReview-cardName text-yellow font-weight-600 pt-2 mb-2'>{item.name}</p>
                  <p className='title24 companyReview-cardPosition text-primary font-weight-600 mb-md-0 mb-4'>{item.position}</p>
                  </div>
              </SwiperSlide>
            )}
          </Swiper>
        </div>
      </div>

      <div className={`row my-5 d-none d-md-block`}>
        <div className={`col-md-12 mx-auto text-center`}>
          <Swiper
             modules={[Navigation, Pagination, Scrollbar, Autoplay]}
             arrows={true}
            //  navigation={true}
             // navigation={{
             //   nextEl: ".image-swiper-button-next",
             //   prevEl: ".image-swiper-button-prev",
             //   disabledClass: "swiper-button-disabled"
             // }}
             loop={true}
             className={``}
             spaceBetween={50}
            //  slidesPerView={1}
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
            
            0: {
                slidesPerView: 1,
              },
            }}

          >
            {review.map((item) =>
              <SwiperSlide>
                <div className='companyReview-img border-primary p-3'>
                  <img src={item.img} />
                </div>
              </SwiperSlide>
            )}
          </Swiper>
        </div>
      </div>
      <div className="d-none d-md-block" style={{height: "300px"}}></div>
      <div className="d-blok d-md-none" style={{height: "80px"}}></div>
    </div>
  )
}
