import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/css';

function Business() {

    const businessInsurance = ([
        {
            id: "s1", title: "Apply in 10 minutes or less", checkBoxData: [
                {
                    isCheckbox: true
                },
                {
                    isCheckbox: true
                },
                {
                    isCheckbox: true
                }
            ]
        },
        {
            id: "s2", title: "Same day policy delivery", checkBoxData: [
                {
                    isCheckbox: false
                },
                {
                    isCheckbox: true
                },
                {
                    isCheckbox: true
                }
            ]
        },
        {
            id: "s2", title: "Exclusive coverages tailored for your business", checkBoxData: [
                {
                    isCheckbox: false
                },
                {
                    isCheckbox: false
                },
                {
                    isCheckbox: true
                }
            ]
        },
        {
            id: "s2", title: "AM Best rating of A (Excellent)", checkBoxData: [
                {
                    isCheckbox: false
                },
                {
                    isCheckbox: false
                },
                {
                    isCheckbox: true
                }
            ]
        },
        {
            id: "s5", title: "One on one claim support", checkBoxData: [
                {
                    isCheckbox: false
                },
                {
                    isCheckbox: false
                },
                {
                    isCheckbox: true
                }
            ]
        },

    ])

    return (
        <div className={`businessInsurance container `}>
            <div className={`row text-center`}>
                <div className={`col-md-8 mx-auto`}>
                    <div className='commnHeading'>
                        <div className='polyBox border-primary bg-blueLight mb-4 text-primary title16 font-weight-600 '>Compare</div>
                        <div className='title64 font-secondary mb-3 text-primary font-weight-600'>Why Business Insurance from BimaKavach</div>
                        <p className='title24 font-weight-600 text-primary px-0 px-lg-5 mb-5'>Our competitors are nowhere near us.</p>
                    </div>
                </div>
            </div>
            <div className={`row mt-5 d-none d-md-block`}>
                <div className='border-primary businessInsurance-box radius-15' style={{border: "2px solid"}}>
                    <table class="table table-borderless align-middle">
                        <thead>
                            <tr>
                                <th  style={{ width: "27%" }} className='title30 font-weight-600 text-primary text-center' scope="col"></th>
                                <th  style={{ width: "28%" }} className='title30 font-weight-600 text-primary text-center' scope="col">Other insurance bazaar</th>
                                <th  style={{ width: "20%" }} className='title30 font-weight-600 text-primary text-center' scope="col">Digital brokers</th>
                                <th  style={{ width: "25%" }} className='title30 font-weight-600 text-primary text-center' scope="col"><img width="195px" src='/logo-white.svg' /></th>
                            </tr>
                        </thead>
                        <tbody>
                            {businessInsurance.map((item) => (
                                <tr>
                                    <td>  
                                        <div className='businessInsurance-colBox title25 font-weight-600'>
                                            {item.title}
                                        </div>
                                    </td>
                                        {item.checkBoxData.map((obj) => (
                                            <>
                                                <td className='text-center businessInsurance-col'>
                                                    <div className='businessInsurance-colBox'>
                                                        <img src={obj.isCheckbox ? "/tick.svg" : "/cross.svg"} />
                                                    </div>
                                                </td>
                                            </>
                                        ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                  
            </div>
            <div className='d-block d-md-none'>
            <div className={`row  text-center`}>
                <div className='col-6 mb-5'>
                    <img src='/industry-traditional.svg' />
                    <p className='title14 font-weight-600 mt-2'>Apply in 10 minutes or less</p>
                </div>
                <div className='col-6 mb-5'>
                    <img src='/industry-traditional.svg' />
                    <p className='title14 font-weight-600 mt-2'>Same day policy delivery</p>
                </div>
                <div className='col-6 mb-5'>
                    <img src='/industry-traditional.svg' />
                    <p className='title14 font-weight-600 mt-2'>Exclusive coverages tailored for your business</p>
                </div>
                <div className='col-6 mb-5'>
                    <img src='/industry-traditional.svg' />
                    <p className='title14 font-weight-600 mt-2'>AM Best rating of A (Excellent)</p>
                </div>
                <div className='col-6 mb-5'>
                    <img src='/industry-traditional.svg' />
                    <p className='title14 font-weight-600 mt-2'>One on one claim support</p>
                </div>
            </div>
            </div>
            <div className="d-none d-md-block" style={{height: "300px"}}></div> 
            <div className="d-blok d-md-none" style={{height: "80px"}}></div>
        </div>
    )
}

export default Business