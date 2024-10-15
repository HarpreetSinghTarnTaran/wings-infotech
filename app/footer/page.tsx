// import React from 'react'
import Link from 'next/dist/client/link';
import React, { useState } from 'react';
import { BsInstagram } from 'react-icons/bs';
import { CgFacebook } from 'react-icons/cg';
import footer from "@/app/assets/images/footer_bg.png";

const Footer = () => {
  // const [count, setCount] = useState(0);
  return (
    <main className="   border-b">
    <div
        className="  "
        style={{
          backgroundImage: `url(${footer.src})`,
          backgroundPosition: "center",
          height: "100%",
          width: "100%",
          backgroundSize: "cover",
          paddingTop: "70px",
          paddingBottom:"50px"
        }}
      >
        <div className="  w-container   ">
          {/* <Link href="/" className=" ">
            
            <Image
              src={logo}
              loading="lazy"
              alt="img"
              className="xxxs:w-[100%] xs:w-[50%] sm:w-[30%] xl:w-[20%] xs:mx-auto"
            />
          </Link> */}
          <div className="pb-8 lg:ml-[7rem]   xl:mx-[5rem] grid sm:grid-cols-2 gap-10 sm:gap-14 md:grid-cols-3 lg:grid-cols-4 px-2">
            {/* <div
              id="w-node-_6e965b4c-a72d-e35f-24f8-0924edf57488-91406018"
              className=""
            >
              <h1 className="text-yellow-50 text-2xl font-serif  text-start ">
                Contact Details
              </h1>
              <div className="footer-desc mt-2 text-[#13ddfa]">
                If you have any questions or need help. feel free contact us.
              </div>
            </div> */}
            <div className="  text-yellow-100  font-serif"> <a
          href="/" 
          className="">
            {/* <span className="pl-10">logo</span> */}
          <p className="text-4xl font-semiboldbold hover:text-yellow-400">Wings  <span className="text-yellow-400 hover:text-yellow-100" >InfoTech</span></p> 
          </a>
          </div>
            <div className="  ">
              <h1 className="text-yellow-50 text-2xl font-serif ">Links</h1>
              <div className="ft-link-blocks ">
                <Link href="/" className="flb-link">
                  <span 
                  className=" font-semibold 
                  text-[#13ddfa] hover:text-yellow-200"
                  
                 
                      >Home</span>
                </Link><br></br>
                <Link href="/about" className="flb-link">
                <span
                className=" font-semibold 
                text-[#13ddfa]  hover:text-yellow-200"
                      >About</span> 
                </Link><br></br>
                <Link
                  href="/contactUs"
                  aria-current="page"
                  className="flb-link w--current"
                >
                 <span
                 className=" font-semibold 
                 text-[#13ddfa]  hover:text-yellow-200"
                      >Contact</span>
                  
                </Link><br></br>
                {/* <Link
                  href="cars/SelectCars/TermsNCondition"
                  className="flb-link"
                >
                  Terms &amp; Conditions Car Rental Agreement
                </Link> */}
              </div>
            </div>
            <div className=" ">
              <h1 className="text-yellow-50 text-2xl font-serif text-start  ">
                Locations
              </h1>
              <div className="ft-link-blocks text-white">
                <Link
                  href="tel:+61475261278"
                  className="phone-block w-inline-block"
                >
                  {/* <Image
                    src={phone}
                    loading="lazy"
                    alt="phone symbol"
                    className="image"
                  /> */}
                  <div className=" text-[#13ddfa] hover:text-yellow-200">
                    {/* +61 */}
                     9876262108
                    <br />
                  </div>
                </Link>
                <Link
                  href="mailto:highnsky2020@gmail.com?subject=highnsky2020%40gmail.com"
                  className="email-block w-inline-block"
                >
                  {/* <Image src={email} loading="lazy" alt="Email symbol" /> */}
                  <div className="email-text text-[#13ddfa] hover:text-yellow-200">singhharpreet7931@gmail.com</div>
                </Link>
                <div className="address-block">
                  {/* <Image src={location} loading="lazy" alt="location symbol" /> */}
                  <div className="address-text text-[#13ddfa]">
                    Tarn Taran
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="footer-four">
              <h1 className="footer-head text-yellow-50">Helpful Links</h1>
              <div className="ft-link-blocks text-[#13ddfa]">
                <Link href="#" className="flb-link">
                  Privacy Policy
                </Link>
                <Link href="#" className="flb-link">
                  Terms &amp; Condition
                </Link>
                <Link href="#" className="flb-link">
                  Corporate Open Account Autorization PDF Form
                </Link>
              </div>
            </div> */}
            <div className=" ">
              <h1 className="text-yellow-50 text-2xl  font-serif text-start ">
                Follow Us
              </h1>
              <div className=" flex mt-2">
                <Link
                  href=""
                  target="_blank"
                  className="social-icon w-inline-block "
                >
                  <CgFacebook className="text-[#aeaeae] text-4xl hover:text-yellow-200" />
                </Link>
                <Link
                  href=""
                  target="_blank"
                  className="social-icon l w-inline-block"
                >
                  <BsInstagram className="text-[#aeaeae] text-3xl mt-1  hover:text-yellow-200" />
                </Link>
              </div>
            </div>
          </div>

          {/* <div className="border-block"></div> */}
        </div>
        <div className=" pt-2 flex justify-center copyright-section border-t border-black place-self-center">
          <div className="cs-right ">
            <div className="csl-text text-white">© 2024 Copyright 
. All Rights Reserved.</div>
          </div>
        </div>
      </div></main>

  )
}

export default Footer