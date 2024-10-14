import React from "react";
import BreadCrumb from "@/app/breadCrumb/page";
import Home from "../page";
import About from "../../app/about/page";
import { MdPermPhoneMsg } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { BsGlobe2 } from "react-icons/bs";

const contactUs = () => {
  const text = "ContactUs";
  return (
    <div className="">
      <BreadCrumb text={text} />
      <main className="flex justify-center    bg-[#e1eff6] py-32">
        <div className="grid  lg:grid-cols-2 ">
          <div className="">
            <p className="text-xl font-semibold text-slate-500">
              Getting Touch
            </p>
            <h6 className="md:text-4xl text-xl font-semibold">
              Do you have a project<br></br> in your mind?
            </h6>
            <p className="flex pt-2">
              <MdPermPhoneMsg size={20} />
              <span className="text-black pl-2">9876262108 </span>
            </p>
            <p className="pt-2">
              <BsGlobe2 size={20} />
            </p>
            <p className="flex py-4">
              {" "}
              <FaLocationDot size={20} />
              <span className="text-black pl-2">Goindwal Road Tarn Taran</span>
            </p>
          </div>
          <div className=" place-self-center items-center ">
            <div className="grid md:gap-6 md:grid-cols-2 md:grid-rows-2 ">
              <div className="">
                <label className="py-2 ">Name</label>
                <br></br>
                <input className="  rounded-[10px] p-2 border-[aqua] focus:border-sky-500 focus:ring-1 focus:ring-sky-500  py-3 w-[100%] " />
              </div>
              <div className="">
                <label className="py-2 ">Email</label>
                <br></br>
                <input className="rounded-[10px] p-2 border-[aqua] focus:border-sky-500 focus:ring-1 focus:ring-sky-500  py-3 w-[100%] " />
              </div>

              <div className="">
                <label className="py-2 ">Project Type</label>
                <br></br>
                <input className="rounded-[10px] p-2 border-[aqua] focus:border-sky-500 focus:ring-1 focus:ring-sky-500  py-3 w-[100%] " />
              </div>
              <div className="">
                <label className="py-2 ">Mobile</label>
                <br></br>
                <input className="rounded-[10px] p-2 border-[aqua] focus:border-sky-500 focus:ring-1 focus:ring-sky-500  py-3 w-[100%] " />
              </div>
            </div>

            <div className="pt-4 grid grid-cols-1 grid-rows-1">
              <div>
              <label>Write Project Details*</label>
              <br></br>
              <textarea className="rounded-[10px] p-2 border-[aqua] focus:border-sky-500 focus:ring-1 focus:ring-sky-500  py-3 w-[100%] " /></div>
            </div>
            <div className="pt-4">
              <button className="py-2 px-4 border bg-slate-400   border-black  rounded-md text-white hover:text-black hover:bg-yellow-100">
                Send message{" "}
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default contactUs;
