import React, { useState } from 'react'
import Toggle from '../Icons/Toggle'
import styles from "./Navbar.module.css";
import Link from 'next/link'
import Image from 'next/image'

function Navbar() {
  const [menuToggle, setMenuToggle] = useState(false)
  const [menuToggleList, setMenuToggleList] = useState("")
  const menuToggleHandle = () => {
    // alert("hdjasbh1111")
    setMenuToggle(!menuToggle)
    menuToggleList == "" ? setMenuToggleList("menuActive") : setMenuToggleList("")
  }
  console.log(menuToggle)

  const subMenu1 = ([
    { id: "s1", img: "/startup1.svg", title: "Directors & Officers Insurance" },
    { id: "s1", img: "/startup2.svg", title: "Errors & Omissions Insurance" },
    { id: "s1", img: "/startup3.svg", title: "Cyber Crime Insurance" },
    { id: "s1", img: "/startup4.svg", title: "General Liability Insurance" },
    { id: "s1", img: "/startup5.svg", title: "Crime/Fidelty Insurance" },
    { id: "s1", img: "/startup6.svg", title: "Product Liability Insurance" },
  ])
  const subMenu2 = ([
    { id: "s1", img: "/startup2.svg", title: "Errors & Omissions Insurance" },
    { id: "s1", img: "/startup1.svg", title: "Directors & Officers Insurance" },
    { id: "s1", img: "/startup4.svg", title: "General Liability Insurance" },
    { id: "s1", img: "/startup3.svg", title: "Cyber Crime Insurance" },
    { id: "s1", img: "/startup6.svg", title: "Product Liability Insurance" },
    { id: "s1", img: "/startup5.svg", title: "Crime/Fidelty Insurance" },
  ])
  const handleMouseEnter = () => {
    document.body.classList.add('DropdownOverlay');
  }
  const handleMouseLeave = () => {
    document.body.classList.remove('DropdownOverlay');
  }
  return (

    <>
      <style jsx scope>
        {`
              @media (min-width:1600px) {
                .container {
                  max-width: 1620px;
                }
            }
          `}
      </style>
      <div className={`navbar-main bg-yellowLight`}>
        <nav className={`navbar  mainMenu  navbar-expand-xl bg-body-tertiary ${styles.homeNavbar}`}>
          <div className="container nabbarStrip">

            <a className="navbar-brand me-3" href="#"><img src='logo-main.svg' /></a>
            <button className="navbar-toggler p-0" type="button" onClick={menuToggleHandle}>
              <span className="navbar-toggler-icon"><Toggle /></span>
            </button>

            <div className={`collapse navbar-collapse ${menuToggleList}`}>
              <ul className="navbar-nav mb-2 mt-4 m-lg-0 menu-container">
                <li className="nav-item menu-containerList"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <a className="nav-link menu-trigger arrowHide" href="#" >
                    Products <img src='/dropdown.svg' />
                  </a>
                  <div className='mega-menu'>
                    <div className='mega-menuBox'>
                      <div className='container'>
                        <div className='row'>
                          <div className='col-md-4'>
                            <img src='https://bimakavach.com/assets/ayraProfile.c4e4bcda.png' />
                          </div>
                          <div className='col-8'>
                            <div className='row'>
                              {subMenu1.map((item) =>
                                <div className='col-4 startupCols-cardCol'>
                                  <div className='startupCols-cardBox pe-md-3 mb-5'>
                                    <Image
                                      // loader={myLoader}
                                      src={item.img}
                                      alt="Bimakavach"
                                      width={77}
                                      height={64}
                                    />
                                    <div className='startupCols-cardBoxTitle title16 text-primary mt-3 font-weight-600'>{item.title}</div>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item menu-containerList">
                  <a className="nav-link menu-trigger arrowHide" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Industries <img src='/dropdown.svg' />
                  </a>
                  <div className='mega-menu'>
                    <div className='mega-menuBox'>
                      <div className='container'>
                        <div className='row'>
                          <div className='col-md-4'>
                            <img src='/dummyHeader.webp' />
                          </div>
                          <div className='col-8'>
                            <div className='row'>
                              {subMenu2.map((item) =>
                                <div className='col-md-4 startupCols-cardCol'>
                                  <div className='startupCols-cardBox pe-md-3 mb-5'>
                                    <Image
                                      // loader={myLoader}
                                      src={item.img}
                                      alt="Bimakavach"
                                      width={77}
                                      height={64}
                                    />
                                    <div className='startupCols-cardBoxTitle title16 text-primary mt-3 font-weight-600'>{item.title}</div>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle menu-trigger arrowHide" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Resources <img src='/dropdown.svg' />
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Resources 1</a></li>
                    <li><a className="dropdown-item" href="#">Resources 2</a></li>
                    <li><a className="dropdown-item" href="#">Resources 3</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">About Us</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Sign In</a>
                </li>
              </ul>
              <div className="d-flex flex-sm-row flex-column ms-auto" >
                <a className="btnCommon btnBorder border-primary  text-primary me-md-3 mb-2 mb-md-0 text-decoration-none" type="submit"> <img className='me-1' src='/icons/calender.svg' width="18px" /> <span> Schedule a call </span></a>
                <a className="btnCommon yellowBtn  text-decoration-none " type="submit"> <img className='me-1' src='/icons/whatsapp.svg' width="18px" /> <span> WhatsApp us </span></a>
              </div>
            </div>

          </div>
        </nav>
      </div>
    </>
  )
}

export default Navbar