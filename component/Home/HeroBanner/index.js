import React from 'react'
import Image from 'next/image'
import styles from "./HeroBanner.module.css";

function HeroBanner(props) {
  const { title, description } = props
  return (
    <>
      <div className='container homeBannerContainer'>
        <img src='/dummyHeader.webp' className='homeBannerImg'/>
        <div className={`homeBanner ${styles.HomeBanner}`} >
          <div className={`${styles.homeBannerText} px-sm-0 px-4`}>
            <h1 className='title64 font-secondary font-weight-600 mb-4'>{title}</h1>
            <p className={`title25 mb-5 font-weight-600 ${styles.BannerDescription}`}>{description}</p>
          </div>
            <div className={`${styles.homeBannerBtn} d-flex`}>
              <a className='btnCommon yellowBtn text-decoration-none'>
                <span> Get Free Recommendations </span>
                <img className='ms-3' src='/icons/arrowRight.svg' />
              </a>

            </div>

          <div className={`d-sm-flex d-none ${styles.heroPlay} d-flex justify-content-center justify-content-sm-start align-items-center `}>
            <Image
              // loader={myLoader}
              src="/icons/hero-play.svg"
              alt="Picture of the author"
              width={108}
              height={108}
            />
            <p className='title25 m-0 ms-4 font-weight-600'>Check how <br></br> it works</p>
          </div>

        </div>
      </div>
    </>

  )
}



export default HeroBanner