import Link from 'next/link'
import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import breadcrum from "@/app/assets/images/Bread_Crum.jpg"

const breadCrumb = (props: any) => {
  return (
    <div
    className="  "
    style={{
      backgroundImage: `url(${breadcrum.src})`,
      backgroundPosition: "center",
      height: "100%",
      width: "100%",
      backgroundSize: "cover",
      paddingTop: "150px",
      paddingBottom:"100px"
    }}
    // className=' mt-[74px] bg-black px-4 py-4 md:mt-0 '
    >
    <div className='container mx-auto py-1 '>
      <div className='  flex items-center justify-center gap-2'>
        <Link href='/'>
          <p className='hover:text[#FFB902] cursor-pointer	 font-bold uppercase tracking-widest text-white hover:text-yellow-200 cursor-pointer'>
            Homepage
          </p>
        </Link>
        <BsArrowRight size={20} className='text-white' />
        {/* <Link href={`/category?categoryId=${props?.categoryId}`}>
        </Link> */}
        <p className=' font-bold uppercase	 tracking-widest text-white '>
          {props?.text}
        </p>
      </div>

      {/* <div className='mt-4 text-[26px] font-bold capitalize italic text-white'>
        {props?.text?.split('/').pop()}
      </div> */}
    </div>
  </div>
  )
}

export default breadCrumb