import React from 'react'
import Style from '../BlogListCard/style.module.css'
import Link from 'next/link'
import Image from 'next/image'
import ArrowSend from '../Icons/ArrowSend'

function BlogListCard(props) {
    const { title, label, dateTime, blogByName, blogByPosition, linking, handleChildClick } = props;
    return (
        <div className='BlogList-card '>
            <div className='BlogList-cardBox row align-items-center flex-md-column flex-row-reverse gx-3'>
                <div className='col-md-12 col' onClick={handleChildClick}>
                    <div className={`position-relative p-4 pt-4 radius-10 BlogListCardBox ${Style.ListCardBox}`} style={{ background: "url(/blog1.jpg) no-repeat center center/cover" }}>
                        <div className='BlogList-cardOverlay'></div>
                        <div className='polyBox border-primary bg-blueLight text-primary  title16 font-weight-600 '>{label}</div>
                        <Link href={linking} className='text-decoration-none mt-2 title30 d-block BlogList-cardTitle font-secondary text-capitalize text-primarySky font-weight-600 w-75'>{title}</Link>
                        <div className='blogBy position-absolute d-md-flex d-none  align-items-center '>
                            <Image
                                // loader={myLoader}
                                src="/blogBy.png"
                                alt="Picture of the author"
                                width={40}
                                height={40}
                            />
                            <div className='ms-2'>
                                <div className='text-black' style={{ fontSize: "10px" }}>{blogByName}</div>
                                <div className='text-black' style={{ fontSize: "8px" }}>{blogByPosition}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-12 col mt-md-3'>
                    <div className='BlogList-cardBottom '>
                        <div className='row align-items-center'>
                            <div className='col'>
                                <Link href={linking} className='text-decoration-none  BlogList-cardTitle  title24'>{title}</Link>
                                <div className='BlogList-cardDate mt-1 mt-md-0 title14 text-yellow3'>{dateTime}
                                    {/* <Link href="" className='text-uppercase text-decoration-none text-yellow3 ms-1'>Read</Link> */}
                                </div>
                            </div>
                            <div className='BlogList-cardArrow col-auto d-none d-md-block'>
                                <Link href="" className='text-uppercase text-decoration-none text-yellow3 ms-1' onClick={handleChildClick}>
                                    <ArrowSend width="20px" height="20px" iconColor="" />
                                </Link>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='blogBy blogByBottom mt-3 d-md-none d-flex  align-items-center '>
                                <Image
                                    // loader={myLoader}
                                    src="/blogBy.png"
                                    alt="Picture of the author"
                                    width={40}
                                    height={40}
                                />
                                <div className='ms-2'>
                                    <div className='text-black' style={{ fontSize: "10px" }}>{blogByName}</div>
                                    <div className='text-black' style={{ fontSize: "8px" }}>{blogByPosition}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default BlogListCard