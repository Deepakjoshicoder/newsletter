import React  from 'react'
import success from "../assets/images/icon-success.svg"

const Thanks = () => {
	

  return (
    <>
    <div className='bg-[#36384D] h-screen  w-screen flex justify-center items-center'>
      <div className=' bg-white w-[27%] h-[57%] rounded-3xl  p-10 font-rob'>
        <img src={success} alt="" className='h-14 w-14 mb-8'/>
        <p className='text-[hsl(234, 29%, 20%)] leading-10 text-[40px] font-bold mb-7'>Thanks for subscribing!</p>
        <p className='text-sm mb-8'>A confirmation email has been sent to ash@loremcompany.com. Please open it click the button inside to confirm your subscription.</p>
        <button className='bg-[#232742] border-b-slate-800 rounded-md h-10 w-[100%] text-white text-sm' x >Dismiss message</button>
      </div>
      
    </div>
    </>
  )
}

export default Thanks
