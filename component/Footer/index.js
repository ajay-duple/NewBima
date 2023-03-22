import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import Youtube from '../Icons/Youtube'
import Insta from '../Icons/Insta'
import Twitter from '../Icons/Twitter'
import Linkdin from '../Icons/Linkdin'


export default function Footer() {
  return (
    <>
  <Head>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" ></script>  
  </Head>

    <div className="footer  ">
      <div className="container ">
        <div className="row">
          <div className="col-auto d-none d-md-block">
            <div class="polyBox opacity-0 border-primary bg-blueLight text-primary title16 font-weight-600 mt-2">Our Culture</div>
          </div>
          <div className="col-md-10 ">
            <div className='ms-md-5'>
              <div className="row">
                <div className="col-md-4 footerLogo">
                  <Image
                    // loader={myLoader}
                    src="/logo-white.svg"
                    alt="Picture of the author"
                    width={333}
                    height={40}
                  />
                  <div className='d-flex align-items-center mt-4'>
                    <div className=''>
                      <svg width="20" height="18" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.783 1.74609H5.21576C2.88746 1.74609 1 3.63356 1 5.96186V14.5291C1 16.8574 2.88746 18.7448 5.21576 18.7448H13.783C16.1113 18.7448 17.9987 16.8574 17.9987 14.5291V5.96186C17.9987 3.63356 16.1113 1.74609 13.783 1.74609Z" stroke="white" stroke-width="2" stroke-miterlimit="10" />
                        <path d="M9.64743 14.3759C11.9283 14.3759 13.7773 12.5269 13.7773 10.2461C13.7773 7.96521 11.9283 6.11621 9.64743 6.11621C7.36657 6.11621 5.51758 7.96521 5.51758 10.2461C5.51758 12.5269 7.36657 14.3759 9.64743 14.3759Z" stroke="white" stroke-width="2" stroke-miterlimit="10" />
                        <path d="M14.7532 6.2075C15.3234 6.2075 15.7856 5.74525 15.7856 5.17504C15.7856 4.60483 15.3234 4.14258 14.7532 4.14258C14.183 4.14258 13.7207 4.60483 13.7207 5.17504C13.7207 5.74525 14.183 6.2075 14.7532 6.2075Z" fill="white" />
                      </svg>
                    </div>
                    <div className='ms-5'>
                      <Linkdin iconColor="white" width="20" height="20" />

                    </div>
                    <div className='ms-5'>
                      <Twitter iconColor="white" width="20" height="20" />

                    </div>
                    <div className='ms-5'>
                      <Youtube iconColor="white" width="20" height="20" />

                    </div>
                  </div>
                </div>
              </div>
              <div className='d-none d-md-block' style={{ height: "200px" }}></div>
              <div className='d-block d-md-none' style={{ height: "80px" }}></div>
              <div className="row footer-listMenu ">
                <div className="col-md-3">
                  <div className="footer-listMenu-list">
                    <ul class="list-group list-group-borderless bg-transparent ">
                      <li class="list-group-item text-yellow title18">
                        Product
                      </li>
                      <li class="list-group-item">
                        <Link href="" className='title18 font-weight-400'>Liability Insurance</Link>
                      </li>
                      <li class="list-group-item">
                        <Link href="" className='title18 font-weight-400'>Asset Insurance</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="footer-listMenu-list">
                    <ul class="list-group list-group-borderless bg-transparent ">
                      <li class="list-group-item text-yellow title18">
                        Resources
                      </li>
                      <li class="list-group-item">
                        <Link href="/blogs" className='title18 font-weight-400'>Blog</Link>
                      </li>
                      <li class="list-group-item">
                        <Link href="" className='title18 font-weight-400'>Careers</Link>
                      </li>
                      <li class="list-group-item">
                        <Link href="" className='title18 font-weight-400'>Glossary</Link>
                      </li>
                      <li class="list-group-item">
                        <Link href="" className='title18 font-weight-400'>Newsletters</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="footer-listMenu-list">
                    <ul class="list-group list-group-borderless bg-transparent ">
                      <li class="list-group-item text-yellow title18">
                        Company
                      </li>
                      <li class="list-group-item">
                        <Link href="" className='title18 font-weight-400'>About</Link>
                      </li>
                      <li class="list-group-item">
                        <Link href="" className='title18 font-weight-400'>Terms of use</Link>
                      </li>
                      <li class="list-group-item">
                        <Link href="" className='title18 font-weight-400'>Privacy Policy</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="footer-listMenu-list">
                    <ul class="list-group list-group-borderless bg-transparent ">
                      <li class="list-group-item text-yellow title18">
                        Get in touch
                      </li>
                      <li class="list-group-item">
                        <Link href="" className='title18 font-weight-400'>Info@bimakavach.com</Link>
                      </li>
                      <li class="list-group-item">
                        <Link href="" className='title18 font-weight-400'>+91 9876543210</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='d-none d-md-block' style={{ height: "120px" }}></div>
              <div className='d-block d-md-none' style={{ height: "80px" }}></div>
              <div className="row footer-note mt-5">
                <div className="col-md-6">
                  <p className='title14 text-white opacity-50 font-weight-600 mb-1'>
                    Note:
                  </p>
                  <p className='title14 text-white opacity-50 font-light'>
                    BimaKavach is not regulated by the Insurance Regulatory and Development Authority of India (IRDAI) and does not have any alliance or association with any Insurance business.
                  </p>
                </div>
                <div className="col-md-6">
                <div className='d-block d-md-none' style={{ height: "50px" }}></div>
                  <p className='title14 text-white opacity-50 font-weight-600 mb-1'>
                    Disclaimer:
                  </p>
                  <p className='title14 text-white opacity-50 font-light'>
                    The content on the website is purely for information purposes for the public at large, and does not constitute personal financial advice for a specific individual reader.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className='d-none d-md-block' style={{ height: "100px" }}></div>
              <div className='d-block d-md-none' style={{ height: "70px" }}></div>
          <div className="row text-center">
            <div className="col-md-12">
                <div className='divider w-100  opacity-50' style={{backgroundColor: "#0E2B72"}}></div>
            </div>
            <div className="col-md-12 pt-4 pt-md-5">
              <p className='title14 text-light font-weight-400 font-primary opacity-25 m-0'>© 2023 BimaKavach Technologies Pvt. Ltd. All Rights Reserved</p>
            </div>
          </div>
      </div>
    </div>

    </>

  )
}
