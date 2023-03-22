import React from 'react'
import Link from 'next/link'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

export default function Questions() {
 
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
      };

    const partner = ([
        { id: "s1", title: "Who are we?", description: "We helps you make better decisions when buying insurance. That's it. That's all we do." },
        { id: "s1", title: "But what exactly do you do?", description: "We have a host of well-trained advisors who will walk you through any queries you may have and we'll even help you make a purchase. All you have to do is book a call." },
        { id: "s1", title: "Is it free?", description: "Yes, it’s free." },
    ])
    return (
        <div className='popularQue  mx-auto'>
            <div className='row'>
                <div className=' text-center text-xl-start '>
                    <div className='row'>
                        <div className='col-12'>
                                <div className='polyBox border-primary bg-blueLight mb-4 text-primary title16 font-weight-600 '>FAQ</div>

                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-xl-auto'>
                            <div className='commnHeading'>
                                <div className='title48 font-secondary mb-4 text-primary mb-xl-4 mb-3 font-weight-600'>Popular <br></br> Questions</div>
                                <div className='text-primary font-weight-600 title16 mb-5 mb-xl-0'>Our customers trust us.</div>
                            </div>
                            <div className='mt-5 d-none d-xl-block'>
                                <Link className='title20 text-gray text-decoration-none' href="/" >Need more answers? </Link>
                                <div className='d-flex mt-2'>
                                    <a className="btnCommon btnBorder border-primary  text-primary me-2 text-decoration-none" type="submit">  <span> Schedule a call <img className='me-1' src='/icons/calender.svg' width="18px" /> </span></a>
                                </div>
                            </div>
                        </div>
                        <div className='col-xl-8 ms-0 ms-xl-5'>
                        <Swiper
                            pagination={pagination}
                            modules={[Pagination]}
                            className="mySwiper"
                        >
                           
                       
                            <div className='popularQue-list'>
                                
                                 <SwiperSlide>
                                    <div className='popularQue-listBox text-black mb-5'>
                                        <p className='title20 font-weight-600 mb-1 font-primary'>Who are we?</p>
                                        <p className='title20 '>We helps you make better decisions when buying insurance. That's it. That's all we do.</p>
                                    </div>
                                    <div className='popularQue-listBox text-black mb-5'>
                                        <p className='title20 font-weight-600 mb-1 font-primary'>But what exactly do you do?</p>
                                        <p className='title20 '>We have a host of well-trained advisors who will walk you through any queries you may have and we'll even help you make a purchase. All you have to do is book a call.</p>
                                    </div>
                                    <div className='popularQue-listBox text-black mb-5'>
                                        <p className='title20 font-weight-600 mb-1 font-primary'>Is it free?</p>
                                        <p className='title20 '>Yes, it's free.</p>
                                    </div>
                                </SwiperSlide>
                                 <SwiperSlide>
                                    <div className='popularQue-listBox text-black mb-5'>
                                        <p className='title20 font-weight-600 mb-1 font-primary'>Is it free?</p>
                                        <p className='title20 '>Yes, it's free.</p>
                                    </div>
                                    <div className='popularQue-listBox text-black mb-5'>
                                        <p className='title20 font-weight-600 mb-1 font-primary'>Who are we?</p>
                                        <p className='title20 '>We helps you make better decisions when buying insurance. That's it. That's all we do.</p>
                                    </div>
                                    <div className='popularQue-listBox text-black mb-5'>
                                        <p className='title20 font-weight-600 mb-1 font-primary'>But what exactly do you do?</p>
                                        <p className='title20 '>We have a host of well-trained advisors who will walk you through any queries you may have and we'll even help you make a purchase. All you have to do is book a call.</p>
                                    </div>
                                </SwiperSlide>
                                 <SwiperSlide>
                                    <div className='popularQue-listBox text-black mb-5'>
                                        <p className='title20 font-weight-600 mb-1 font-primary'>But what exactly do you do?</p>
                                        <p className='title20 '>We have a host of well-trained advisors who will walk you through any queries you may have and we'll even help you make a purchase. All you have to do is book a call.</p>
                                    </div>
                                    <div className='popularQue-listBox text-black mb-5'>
                                        <p className='title20 font-weight-600 mb-1 font-primary'>Who are we?</p>
                                        <p className='title20 '>We helps you make better decisions when buying insurance. That's it. That's all we do.</p>
                                    </div>
                                    <div className='popularQue-listBox text-black mb-5'>
                                        <p className='title20 font-weight-600 mb-1 font-primary'>Is it free?</p>
                                        <p className='title20 '>Yes, it's free.</p>
                                    </div>
                                </SwiperSlide>
                                 <SwiperSlide>
                                    <div className='popularQue-listBox text-black mb-5'>
                                        <p className='title20 font-weight-600 mb-1 font-primary'>Is it free?</p>
                                        <p className='title20 '>Yes, it's free.</p>
                                    </div>
                                    <div className='popularQue-listBox text-black mb-5'>
                                        <p className='title20 font-weight-600 mb-1 font-primary'>Who are we?</p>
                                        <p className='title20 '>We helps you make better decisions when buying insurance. That's it. That's all we do.</p>
                                    </div>
                                    <div className='popularQue-listBox text-black mb-5'>
                                        <p className='title20 font-weight-600 mb-1 font-primary'>But what exactly do you do?</p>
                                        <p className='title20 '>We have a host of well-trained advisors who will walk you through any queries you may have and we'll even help you make a purchase. All you have to do is book a call.</p>
                                    </div>
                                </SwiperSlide>
                                 <SwiperSlide>
                                    <div className='popularQue-listBox text-black mb-5'>
                                        <p className='title20 font-weight-600 mb-1 font-primary'>But what exactly do you do?</p>
                                        <p className='title20 '>We have a host of well-trained advisors who will walk you through any queries you may have and we'll even help you make a purchase. All you have to do is book a call.</p>
                                    </div>
                                    <div className='popularQue-listBox text-black mb-5'>
                                        <p className='title20 font-weight-600 mb-1 font-primary'>Who are we?</p>
                                        <p className='title20 '>We helps you make better decisions when buying insurance. That's it. That's all we do.</p>
                                    </div>
                                    <div className='popularQue-listBox text-black mb-5'>
                                        <p className='title20 font-weight-600 mb-1 font-primary'>Is it free?</p>
                                        <p className='title20 '>Yes, it's free.</p>
                                    </div>
                                </SwiperSlide>
                          
                                
                               
                            </div>
                        </Swiper>
                        {/* <div className='popularQue-pagination'>
                                    <ul className='d-flex align-items-center justify-content-center justify-content-xl-start p-0'>
                                        <li className='active'><Link href="">1</Link></li>
                                        <li><Link href="">2</Link></li>
                                        <li><Link href="">3</Link></li>
                                        <li><Link href="">4</Link></li>
                                        <li><Link href="">5</Link></li>
                                    </ul>
                                </div> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-none d-md-block" style={{height: "200px"}}></div>
            <div className="d-blok d-md-none" style={{height: "80px"}}></div>
        </div>
    )
}
