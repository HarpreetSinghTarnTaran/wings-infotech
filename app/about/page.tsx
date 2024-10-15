import React from 'react'
import BreadCrumb from "@/app/breadCrumb/page"
import home_bg from "@/app/assets/images/home_bg.jpg"

const about = () => {
  const text= "About"
  return (
    <div className="">
      <BreadCrumb  text={text}/>
    {/* <main className="flex min-h-screen flex-col items-center justify-between  bg-slate-900">
    <div>
   
    </div>
    
    </main> */}
    <div
    className="  "
    style={{
      backgroundImage: `url(${home_bg.src})`,
      backgroundPosition: "center",
      height: "100%",
      width: "100%",
      backgroundSize: "cover",
      paddingTop: "450px",
      paddingBottom:"400px"
    }}
    // className=' mt-[74px] bg-black px-4 py-4 md:mt-0 '
    ></div></div>

  )
}

export default about