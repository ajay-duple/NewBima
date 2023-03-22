import React  from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import HeroBanner from '../component/Home/HeroBanner'
import TrustedBusiness from '../component/Home/TrustedBusiness'
import Startup from '../component/Home/Startup'
import Partner from '../component/Home/Partner'
import BusinessRisk from '../component/Home/Risk'
import BusinessInsurance from '../component/Home/BusinessInsurance'
import HowDo from '../component/Home/HowDo'
import IndustryList from '../component/Home/IndustryList'
import CompaniesReview from '../component/Home/CompaniesReview'
import BestBacked from '../component/Home/BestBacked'
import RecentActivity from '../component/Home/RecentActivity'
import Questions from '../component/Home/Questions'
import { useEffect } from 'react'


export default function Home() {

  // let homeBody = document.querySelector("body").classList.add("homePage")
  useEffect(() => {
    // document.body.classList.add = "homePage";
    document.querySelector("body").classList.add("homePage")
    document.body.classList.add("homePageBody")
  },[]);

  return (
    <>
      <Head>
        <title>Bimakavach | Home</title>
        <meta name="description" content="BimaKavach" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
        {/* <link href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css' rel='stylesheet' /> */}
        {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" ></script> */}
                
      </Head>
      <main>
          <div className=''>
                <HeroBanner 
                  title="Ubharte Bharat ka
                  naya Kavach" 
                  description="Get business insurance recommendations, now ridiculously easy."
                />
                <TrustedBusiness />
                <Startup />
                <Partner />
                <BusinessRisk />
                <BusinessInsurance />
                <HowDo/>
                <IndustryList/>                
                <CompaniesReview/>                
                <Questions/>               
                <BestBacked/>                
                <RecentActivity/>
            </div>
      </main>
    </>
  )
}
