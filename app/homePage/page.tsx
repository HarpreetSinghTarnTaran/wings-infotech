// import React from 'react'
"use client";
import React, { useState } from "react";
import HomeService from "@/app/homeService/page";
import BackImg from "@/app/assets/images/home.jpg";
import LaunchBull from "@/app/assets/images/LaunchBull.jpeg";
import Jangbaj from "@/app/assets/images/Jangbaj.jpeg";
import Jangbaj2 from "@/app/assets/images/Jangbaj2.jpeg";
import Jangbaj3 from "@/app/assets/images/Jangbaj3.jpeg";
import { motion, AnimatePresence } from "framer-motion";

import Image from "next/image";
// import { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

// Import Swiper styles
// import 'swiper/swiper-bundle.min.css';
// import 'swiper/components/navigation/navigation.min.css';

const home = () => {
  // const [count, setCount] = useState(0);
  // console.log("count",count)
  const recentWork = [
    {
      id: "1",
      image: "1",
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium odio consequuntur repudiandae saepe ipsam quaerat hic neque voluptate sint tempora perferendis optio quam temporibus beatae doloribus animi, officiis distinctio suscipit.",
      img: BackImg,
    },
    {
      id: "2",
      image: "2",
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium odio consequuntur repudiandae saepe ipsam quaerat hic neque voluptate sint tempora perferendis optio quam temporibus beatae doloribus animi, officiis distinctio suscipit.",
    },
    {
      id: "3",
      image: "3",
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium odio consequuntur repudiandae saepe ipsam quaerat hic neque voluptate sint tempora perferendis optio quam temporibus beatae doloribus animi, officiis distinctio suscipit.",
    },
    {
      id: "4",
      image: "4",
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium odio consequuntur repudiandae saepe ipsam quaerat hic neque voluptate sint tempora perferendis optio quam temporibus beatae doloribus animi, officiis distinctio suscipit.",
    },
  ];
  
  return (
    <main className=" w-full ">
      <div
        className="text-white  md:mt-16 text-center pt-2  "
        style={{
          backgroundImage: `url(${BackImg.src})`,
          backgroundPosition: "center",
          // height: "100%",
          // width: "100%",
          backgroundSize: "cover",
          paddingTop: "150px",
          paddingBottom: "200px",
        }}
      >
        <p className="text-black z-50">
          <AnimatePresence>
            <motion.div
              className="heading-wrapper"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <h1 className=" text-2xl md:text-6xl flex justify-center text-yellow-300">
                ALL ABOUT WINGSINFO
              </h1>
              <h1
                data-w-id="fdf7e1a5-1851-0602-6c6c-60738886b8ae"
                className="heading-4"
              >
                <div className="Ttext-xl md:text-2xl bold-text">
                  GET A RAPID & SAFE SOLUTION
                </div>
              </h1>
            </motion.div>{" "}
          </AnimatePresence>
        </p>
      </div>
      {/* { ------------------------- Recent SWork -------------------------------} */}


      <div>
    

{/* <Swiper {...params}>
      <SwiperSlide>
         <Image src={Jangbaj} alt="Slide 1" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={LaunchBull} alt="Slide 2" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={Jangbaj} alt="Slide 3" />
      </SwiperSlide>
      
    </Swiper> */}
    </div>
      <div className="bg-gray-100 text-center py-10">
        <p className="text-2xl font-semibold translate text-slate-400">
          Recent Work 
        </p>
        <h3 className="md:text-4xl md:font-bold">
          Check out some of our recent work.
        </h3>
        {/* <div className="grid  grid-cols-1 py-10 gap-4">
          {recentWork.map((item) => (
            <>
              {" "}
              <div className="flex justify-center gap-x-10 pt-8">
                <div className=" bg-slate-500  border h-[350px] w-[450px] rounded-3xl">
                  {item?.image}
                  <img
                  src={item?.img}
                  // src={item?.img}

                  className="h-[70px] w-[100px]"

                  // height={1000}
                />
                </div>
                <div className="h-[350px] w-[450px] pt-10"> {item?.text}</div>
                
              </div>
            </>
          ))}
        </div> */}{" "}
        <div className=" md:py-10 px-2 ">
          <div className="md:flex justify-center md:gap-x-10 pt-8 ">
          <Swiper
          className="  md:h-[350px] md:w-[450px] h-[300px] w-[320px]    rounded-3xl"
        // modules={[Autoplay, Navigation]}
        modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 4000 }}
        loop
        // spaceBetween={50}
    
        // navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        // breakpoints={{
        //   0: {
        //     slidesPerView: 1,
        //     spaceBetween: 20,
        //   },
        //   480: {
        //     slidesPerView: 2,
        //     spaceBetween: 20,
        //   },
        //   768: {
        //     slidesPerView: 3,
        //     spaceBetween: 20,
        //   },
        //   1024: {
        //     slidesPerView: 3,
        //     spaceBetween: 20,
        //   },
        //   1280: {
        //     slidesPerView: 3,
        //     spaceBetween: 20,
        //   },
        // }}
      >
        <SwiperSlide>
      
        <div className="my-4  bg-slate-500 hover:border-l hover:border-t hover:border-4 border-yellow-400 md:h-[350px] md:w-[450px] h-[300px] w-[320px]    rounded-3xl">
            <a href="https://www.jangbajsingh.com/"> <div
                className="rounded-3xl"
                style={{
                  backgroundImage: `url(${Jangbaj.src})`,
                  backgroundPosition: "center",
                  height: "100%",
                  width: "100%",
                  backgroundSize: "cover",
                  // backgroundSize: "cover",
                  // paddingBottom:"200px"
                }}
              ></div></a>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="my-4  bg-slate-500 hover:border-l hover:border-t hover:border-4 border-yellow-400 md:h-[350px] md:w-[450px] h-[300px] w-[320px]    rounded-3xl">
            <a href="https://www.jangbajsingh.com/"> <div
                className="rounded-3xl"
                style={{
                  backgroundImage: `url(${Jangbaj2.src})`,
                  backgroundPosition: "center",
                  height: "100%",
                  width: "100%",
                  backgroundSize: "cover",
                  // backgroundSize: "cover",
                  // paddingBottom:"200px"
                }}
              ></div></a>
            </div>
    
        </SwiperSlide>
        <SwiperSlide>
        <div className="my-4  bg-slate-500 hover:border-l hover:border-t hover:border-4 border-yellow-400 md:h-[350px] md:w-[450px] h-[300px] w-[320px]    rounded-3xl">
            <a href="https://www.jangbajsingh.com/"> <div
                className="rounded-3xl"
                style={{
                  backgroundImage: `url(${Jangbaj3.src})`,
                  backgroundPosition: "center",
                  height: "100%",
                  width: "100%",
                  backgroundSize: "cover",
                  // backgroundSize: "cover",
                  // paddingBottom:"200px"
                }}
              ></div></a>
            </div>
        </SwiperSlide>
      </Swiper>
            <div className="md:h-[350px] md:w-[450px] w-fit md:pt-10">
              <p className="text-xl font-semibold translate text-slate-400">
                Jangbaj Singh
              </p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea enim
              quidem quos temporibus hic, recusandae deserunt eaque. Maiores
              laboriosam blanditiis atque architecto eius molestias molestiae
              cupiditate, suscipit in quaerat officia?
            </div>
          </div>
          <div className="border-2 mt-10 mx-6 md:hidden"></div>
          <div className="md:flex justify-center md:gap-x-10 md:pt-8">
            <div className="md:h-[350px] md:w-[450px] pt-10">
              <p className="text-xl font-semibold translate text-slate-400">
                LaunchBull
              </p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea enim
              quidem quos temporibus hic, recusandae deserunt eaque. Maiores
              laboriosam blanditiis atque architecto eius molestias molestiae
              cupiditate, suscipit in quaerat officia?
            </div>
          <div
             className="my-4 bg-yellow-400 hover:border-l hover:border-t hover:border-4 border-yellow-400 md:h-[350px] md:w-[450px] h-[300px] w-[300px] rounded-3xl">
              <a href="https://launchbulls.com/"> <div
                className="rounded-3xl"
                style={{
                  backgroundImage: `url(${LaunchBull.src})`,
                  backgroundPosition: "center",
                  height: "100%",
                  width: "100%",
                  backgroundSize: "cover",
                  paddingBottom:"200px"
                  
                }}
              ></div></a> 
            </div>
          </div>
          <div className="md:flex justify-center md:gap-x-10 pt-8 ">
            <div className="my-4  bg-slate-500 hover:border-l hover:border-t hover:border-4 border-yellow-400 md:h-[350px] md:w-[450px] h-[300px] w-[320px]    rounded-3xl">
              <div
                className="rounded-3xl"
                style={{
                  backgroundImage: `url(${Jangbaj.src})`,
                  backgroundPosition: "center",
                  height: "100%",
                  width: "100%",
                  backgroundSize: "cover",
                  // backgroundSize: "cover",
                  // paddingBottom:"200px"
                }}
              ></div>
            </div>
            <div className="md:h-[350px] md:w-[450px] w-fit md:pt-10">
              <p className="text-xl font-semibold translate text-slate-400">
                HighnSky
              </p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea enim
              quidem quos temporibus hic, recusandae deserunt eaque. Maiores
              laboriosam blanditiis atque architecto eius molestias molestiae
              cupiditate, suscipit in quaerat officia?
            </div>
          </div>
          <div className="border-2 mt-10 mx-6 md:hidden"></div>
        </div>
      </div>
      {/* ---------------------service section --------------------------------- */}
      <div className="bg-white text-center">
        <HomeService />
      </div>
      {/* ---------------------about section --------------------------------- */}
      <div className="text-center"> About</div>
    </main>
  );
};

export default home;
