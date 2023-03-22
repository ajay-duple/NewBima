import React from 'react'
import Image from 'next/image'

function Startup() {
    const liabilityInsurance =  ([
        {id:"s1", img: "/startup1.svg", title:"Directors & Officers Insurance"},        
        {id:"s1", img: "/startup2.svg", title:"Errors & Omissions Insurance"},       
        {id:"s1", img: "/startup3.svg", title:"Cyber Crime Insurance"},       
        {id:"s1", img: "/startup4.svg", title:"General Liability Insurance"},       
        {id:"s1", img: "/startup5.svg", title:"Crime/Fidelty Insurance"},       
        {id:"s1", img: "/startup6.svg", title:"Product Liability Insurance"},       
     ])
    const assetInsurance =  ([
        {id:"s1", img: "/startup1.svg", title:"Fire Insurance"},        
        {id:"s1", img: "/startup2.svg", title:"Marine Insurance"},       
        {id:"s1", img: "/startup3.svg", title:"Machine Breakdown"},       
        {id:"s1", img: "/startup4.svg", title:"Contractors All Risk"},       
        {id:"s1", img: "/startup5.svg", title:"Erection All Risk"},               
     ])
     
     const startupDivider = {
        flex: "0 0 90px",
        maxWidth: "90px"
    };
  return (
    <div className={`startup `}>
        <div className={`container `}>
        <div className={``}>
            <div className={`row `}>
                <div className={`text-center`}>
                    <h3 className='title48 font-secondary text-primary font-weight-600'>Business Protection for Startups & SMEs</h3>
                    <p className='title20  text-primary font-weight-600'> Secure the business & stakeholders against lawsuit <span className='d-none d-md-inline'> <br></br></span> expenses - Legal + Settlement</p>                                                
                </div>
            </div>
            <div className={`row mt-5 startupCols`}>
                <div className={`col-sm pt-1`}>
                    <div className='startupTitle text-center text-sm-start'>
                        <a className='title20 text-primary  text-decoration-none font-weight-600'>
                            <i>Liability Insurance</i>
                        </a>
                    </div>
                    <div className='bg-primary divider mt-1 mb-2 mx-auto mx-sm-0'></div>
                    <div className='row pt-4'>
                        {liabilityInsurance.map((item)=>           
                            <div className='col-4 startupCols-cardCol onhoverAnimation'>
                                <div className='startupCols-cardBox pe-md-3 mb-5'>
                                <Image
                                    // loader={myLoader}
                                    src={item.img}
                                    alt="Bimakavach"
                                    width={77}
                                    height={64} 
                                />                  
                                    <div className='startupCols-cardBoxTitle title16 text-primary  mt-3 font-weight-600'>{item.title}</div>
                                </div>
                            </div>
                        )}
                        
                        
                    </div>
                    
                </div>
                <div className={`col-auto d-none d-sm-block`} style={startupDivider}>
                    <div className=' h-100'>
                        <div className='bg-black startupDivider h-100' style={{width: "1px"}} ></div>
                    </div>
                </div>
                <div className={`col-sm pt-1`}>
                    <div className='startupTitle text-center text-sm-start'>
                        <a className='title20 text-primary text-decoration-none font-weight-600'>
                            <i>Asset Insurance</i>
                        </a>
                    </div>
                        <div className='bg-primary divider mx-auto mx-sm-0 mt-1 mb-2'></div>
                        <div className='row pt-4'>
                        {assetInsurance.map((item)=>           
                                <div className='col-4 startupCols-cardCol onhoverAnimation'>
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
            <div className={`row mt-sm-5 pt-sm-3 mt-3`}>
                <div className={`col text-center`}>
                    <div className="d-flex justify-content-center flex-column flex-sm-row" >
                        <a className="btnCommon btnBorder border-primary  text-primary me-sm-3 text-decoration-none" type="submit"> <img className='me-1' src='/icons/calender.svg' width="22px"/> <span> Schedule a call </span> </a>
                        <a className="btnCommon yellowBtn text-decoration-none mt-4 mt-sm-0" type="submit"> <img className='me-1' src='/icons/whatsapp.svg' width="22px"/><span> WhatsApp us</span></a>
                    </div>
                    <p className='title16 mt-4 text-primary '> Say hello to a spam-free zone! We respect your privacy and <span className='d-sm-inline d-none'> <br></br></span> won't bombard you with unwanted calls. </p>                                                
                </div>
            </div>
        </div>
        </div>
        <div className="d-none d-md-block" style={{height: "190px"}}></div>
        <div className="d-blok d-md-none" style={{height: "80px"}}></div>
    </div>
  )
}




export default Startup