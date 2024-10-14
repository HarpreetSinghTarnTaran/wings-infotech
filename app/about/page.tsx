import React from 'react'
import BreadCrumb from "@/app/breadCrumb/page"

const about = () => {
  const text= "About"
  return (
    <div className="">
      <BreadCrumb  text={text}/>
    <main className="flex min-h-screen flex-col items-center justify-between  bg-slate-900">
    <div>about</div>
    
    </main></div>

  )
}

export default about