import React from 'react'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/css';

export default function IndustryList() {
  return (
    <>

      <div className="IndustryList container @d-none">
        <div className="row">
          <div className="col-md-3 ">
            <div className="title60  text-primary font-secondary">Insurance by <i>Industry</i></div>
            <p className='title24 text-primary font-weight-400'>Business risk management can vary significantly depending on the type of company.</p>
            <div className='d-flex mt-5'>
              <a className='btnCommon btnBorder border-primary text-primary text-decoration-none'>
                <span className='me-2 '>Explore all Industries</span>
                <svg className='mt-1' width="29" height="14" viewBox="0 0 29 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 6.93994H27.83" stroke="#0E2B72 " stroke-width="1.6" stroke-linejoin="bevel" />
                  <path d="M21.6211 0.569824L28.0011 6.93982L22.0011 12.9398" stroke="#0E2B72 " stroke-width="1.6" stroke-linejoin="bevel" />
                </svg>
              </a>
            </div>
          </div>
          <div className='col-md-9 mt-5 mt-md-0 ps-md-5'>
            <div className='ms-md-5'>
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, Autoplay]}

                spaceBetween={50}
                // autoplay={{
                //   delay: 1000,
                //   disableOnInteraction: false
                // }}
                breakpoints={{
                  1399: {
                    slidesPerView: 3,
                  },
                  992: {
                    slidesPerView: 3,
                  },
                  0: {
                    slidesPerView: 1,
                  },

                }}
              >
                <SwiperSlide>
                  <div className='IndustryList-card'>
                    <img className='d-none d-md-block' src='industry-technology.svg' />
                    <img className='d-block d-md-none' src='industry-traditional-white.svg' />
                    <ul class="list-group mt-4">
                      <li class="list-group-item">
                        <div className='IndustryList-cardTitle title25 text-primary font-primary font-weight-600'>Technology</div>
                      </li>
                      <li class="list-group-item">
                        <Link href="" className='text-primary title20 font-weight-400'>SaaS</Link>
                      </li>
                      <li class="list-group-item">
                        <Link href="" className='text-primary title20 font-weight-400'>Fintech</Link>
                      </li>
                      <li class="list-group-item">
                        <Link href="" className='text-primary title20 font-weight-400'>Startups</Link>
                      </li>
                      <li class="list-group-item">
                        <Link href="" className='text-primary title20 font-weight-400'>E-Commerce</Link>
                      </li>
                    </ul>
                    <li class="IndustryList-card-seeMore  d-block d-md-none list-group-item title20 font-weight-600"><Link href="">See More</Link></li>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='IndustryList-card'>
                    <img className='d-none d-md-block' src='industry-emerging.svg' />
                    <img className='d-block d-md-none' src='industry-traditional-white.svg' />
                    <ul class="list-group mt-4">
                      <li class="list-group-item">
                        <div className='IndustryList-cardTitle title25 text-primary font-primary font-weight-600'>Emerging Industries</div>
                      </li>
                      <li class="list-group-item">
                        <Link href="" className='text-primary title20 font-weight-400'>BioTech</Link>
                      </li>
                      <li class="list-group-item">
                        <Link href="" className='text-primary title20 font-weight-400'>HealthTech</Link>
                      </li>
                      <li class="list-group-item">
                        <Link href="" className='text-primary title20 font-weight-400'>Pharmaceutical</Link>
                      </li>
                      <li class="list-group-item">
                        <Link href="" className='text-primary title20 font-weight-400'>Telemedicine</Link>
                      </li>
                    </ul>
                    <li class="IndustryList-card-seeMore d-block d-md-none list-group-item title20 font-weight-600"><Link href="">See More</Link></li>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='IndustryList-card'>
                    <img className='d-none d-md-block' src='industry-traditional.svg' />
                    <img className='d-block d-md-none' src='industry-traditional-white.svg' />
                    <ul class="list-group mt-4">
                      <li class="list-group-item">
                        <div className='IndustryList-cardTitle title25 text-primary font-primary font-weight-600'>Traditional</div>
                      </li>
                      <li class="list-group-item">
                        <Link href="" className='text-primary title20 font-weight-400'>Manufacturing</Link>
                      </li>
                      <li class="list-group-item">
                        <Link href="" className='text-primary title20 font-weight-400'>Financial Services</Link>
                      </li>
                      <li class="list-group-item">
                        <Link href="" className='text-primary title20 font-weight-400'>Professional Services</Link>
                      </li>
                      <li class="list-group-item">
                        <Link href="" className='text-primary title20 font-weight-400'>Media & Advertising</Link>
                      </li>
                    </ul>
                    <li className="IndustryList-card-seeMore  d-block d-md-none list-group-item title20 font-weight-600"><Link className='' href="">See More</Link></li>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>


        </div>
      </div>
      <div className="d-none d-md-block"  style={{height: "400px"}}></div>
      <div className="d-blok d-md-none" style={{height: "80px"}}></div>
    </>

  )
}
