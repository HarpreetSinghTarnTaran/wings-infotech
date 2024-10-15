// import React from 'react'
"use client";
import { useState, useEffect } from "react";
import { useAtom } from "jotai";
import { changeNavColor } from "@/app/store/navBar";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { RiContactsLine } from "react-icons/ri";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import home from "../homePage/page";

const Header = () => {
  const [sideBar, setSideBar]: any = useState(false);
  const [color, setColor] = useAtom(changeNavColor);
  const [mobileView, setMobileView] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  
  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(color));
  }, [color]);
  
  return (
    <main className=" border-b relative ">
      <div className="w-full fixed">
        <div className=" py-2 bg-[#9cbfd2] hidden md:block">
          <div className=" flex   pt-4     ">
            <div className=" w-[30%] text-yellow-100 md:pl-10 font-serif pl-2">
              {" "}
              <a href="/" className="">
                {/* <span className="pl-10">logo</span> */}
                <p className="md:text-4xl  text-xl font-semiboldbold hover:text-yellow-400">
                  Wings{" "}
                  <span className="text-yellow-400 hover:text-yellow-100">
                    InfoTech
                  </span>
                </p>
              </a>
            </div>
            <div className="w-[70%] flex justify-end xl:pr-10 md:pr-4 ">
              <div className="flex xl:space-x-20  md:space-x-10 text-xl font-serif">
                <a
                  href="/"
                  onClick={() => {
                    setColor({
                      home: true,
                      about: false,
                      service: false,
                      contact: false,
                    });
                  }}
                  className={`${
                    color?.home ? "text-[#1d7297a4] " : "text-[#1d7297] "
                  }  hover:text-yellow-200 cursor-pointer hover:border-b `}
                  //  className={(color === true ?"text-red-500":"")}
                  // className={` text-xl ${
                  //   color === true ? "text-[#E0B34E]" : "text-white"}`}
                >
                  Home
                </a>
                <a
                  href="about"
                  onClick={() => {
                    setColor({
                      home: false,
                      about: true,
                      service: false,
                      contact: false,
                    });
                  }}
                  className={`${
                    color?.about ? "text-[#1d7297a4] " : "text-[#1d7297] "
                  } hover:text-yellow-200 cursor-pointer hover:border-b`}
                >
                  About
                </a>
                <a
                  href="servicePage"
                  onClick={() => {
                    setColor({
                      home: false,
                      about: false,
                      service: true,
                      contact: false,
                    });
                  }}
                  className={`${
                    color?.service ? "text-[#1d7297a4] " : "text-[#1d7297]  "
                  }  hover:text-yellow-200 cursor-pointer hover:border-b`}
                >
                  Service
                </a>
                <a
                  href="contactUs"
                  onClick={() => {
                    setColor({
                      home: false,
                      about: false,
                      service: false,
                      contact: true,
                    });
                  }}
                  className={`${
                    color?.contact ? "text-[#1d7297a4]" : "text-[#1d7297] "
                  }  hover:text-yellow-200 cursor-pointer hover:border-b`}
                >
                  Contact Us
                </a>
                <div
                  className="text-yellow-100"
                  onClick={() => setSideBar(true)}
                >
                  {/* <RiContactsLine /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
            {/*-------------------- Small Screen ---------------------*/}
            <div className=" py-2  w-[100%] relative top-0  md:hidden  bg-[#9cbfd2] ">
            <div className=" flex justify-between px-4  py-4   ">
            <div className="  text-yellow-100  font-serif ">
              {" "}
              <a href="/" className="">
                {/* <span className="pl-10">logo</span> */}
                <p className="text-2xl font-semiboldbold hover:text-yellow-400">
                  Wings{" "}
                  <span className="text-yellow-400 hover:text-yellow-100">
                    InfoTech
                  </span>
                </p>
              </a>
            </div>
            <div className=" flex justify-end xl:pr-10 md:pr-4 ">
            
             {mobileView ? <RxCross1 size={30}  onClick={()=>{setMobileView(false),setMenuOpen(false)}}  />:<AiOutlineMenu size={30} onClick={()=>{setMobileView(true),setMenuOpen(true)}} /> }  
              {/* <div className="   text-xl font-serif">
                <a
                  href="/"
                  onClick={() => {
                    setColor({
                      home: true,
                      about: false,
                      service: false,
                      contact: false,
                    });
                  }}
                  className={`${
                    color?.home ? "text-red-500 " : "text-[#1d7297] "
                  }  hover:text-yellow-200 cursor-pointer hover:border-b `}
                  //  className={(color === true ?"text-red-500":"")}
                  // className={` text-xl ${
                  //   color === true ? "text-[#E0B34E]" : "text-white"}`}
                >
                  Home
                </a>
                <a
                  href="about"
                  onClick={() => {
                    setColor({
                      home: false,
                      about: true,
                      service: false,
                      contact: false,
                    });
                  }}
                  className={`${
                    color?.about ? "text-red-500 " : "text-[#1d7297] "
                  } hover:text-yellow-200 cursor-pointer hover:border-b`}
                >
                  About
                </a>
                <a
                  href="servicePage"
                  onClick={() => {
                    setColor({
                      home: false,
                      about: false,
                      service: true,
                      contact: false,
                    });
                  }}
                  className={`${
                    color?.service ? "text-red-500 " : "text-[#1d7297]  "
                  }  hover:text-yellow-200 cursor-pointer hover:border-b`}
                >
                  Service
                </a>
                <a
                  href="/contactUs"
                  onClick={() => {
                    setColor({
                      home: false,
                      about: false,
                      service: false,
                      contact: true,
                    });
                  }}
                  className={`${
                    color?.contact ? "text-red-500 " : "text-[#1d7297] "
                  }  hover:text-yellow-200 cursor-pointer hover:border-b`}
                >
                  Contact Us
                </a>
                <div
                  className="text-yellow-100"
                  onClick={() => setSideBar(true)}
                >
                </div>
              </div> */}
              
            </div>
          </div>
            </div>

        {/* <div className=" w-full  h-fit sidebar   absolute   z-[999]  bg-white text-black  ">
 dfvdvrgfdv
  </div> */}
        {/* {sideBar && (
          <div className="animate-pulse  bg-blue-500 z-50">
            <div className="absolute right-0 top-0  h-full w-96   ">
              <p
                onClick={() => setSideBar(false)}
                className="flex justify-end pt-8 pr-4"
              >
                {" "}
                <IoIosCloseCircleOutline size={30} />
              </p>
              jhjh
            </div>{" "}
          </div>
        )} */}
      </div>
      {menuOpen && (
          <div className="z-50 bg-[#87bfdd] text-yellow-100 text-lg p-4 pl-6 pt-16 ">
            <a
              href="/"
              onClick={() => { setColor({ home: true, about: false, service: false, contact: false }); setMenuOpen(false); }}
              className={`${color?.home ? "text-[#1d7297a4]" : "text-[#1d7297]"} block py-1 pt-4 hover:text-yellow-200 cursor-pointer hover:border-b`}
            >
              Home
            </a>
            <a
              href="about"
              onClick={() => { setColor({ home: false, about: true, service: false, contact: false }); setMenuOpen(false); }}
              className={`${color?.about ? "text-[#1d7297a4]" : "text-[#1d7297]"} block py-1 hover:text-yellow-200 cursor-pointer hover:border-b`}
            >
              About
            </a>
            <a
              href="servicePage"
              onClick={() => { setColor({ home: false, about: false, service: true, contact: false }); setMenuOpen(false); }}
              className={`${color?.service ? "text-[#1d7297a4]" : "text-[#1d7297]"} block py-1 hover:text-yellow-200 cursor-pointer hover:border-b`}
            >
              Service
            </a>
            <a
              href="contactUs"
              onClick={() => { setColor({ home: false, about: false, service: false, contact: true }); setMenuOpen(false); }}
              className={`${color?.contact ? "text-[#1d7297a4]" : "text-[#1d7297]"} block py-1 hover:text-yellow-200 cursor-pointer hover:border-b`}
            >
              Contact Us
            </a>
          </div>
        )}

    </main>
  );
};

export default Header;
