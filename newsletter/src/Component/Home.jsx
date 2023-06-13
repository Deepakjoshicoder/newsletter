import React,{useState} from 'react'
import Desk from './../assets/images/illustration-sign-up-desktop.svg'
import iconlist from './../assets/images/icon-list.svg'


const Home = ({setisSubmitted}) => {
	const [emailVal,setEmailVal]=useState("");
	const validate = ()=>{
		setisSubmitted(true)
	}
  return (
    <div className='bg-[#36384D] h-screen  w-screen flex justify-center items-center'>
		<div className=' bg-white w-[50%] h-[70%] rounded-3xl flex justify-between p-5 font-rob'>
			<div className='pt-10 pl-5'>
				<p className='text-[45px] font-bold mb-3'>Stay updated!</p>
				<p className='text-sm mb-3'>Join 60,000+ product managers receiving monthly <br /> updates on:</p>
				<p className='flex text-sm mb-3 '><img src={iconlist} alt="" /><p className='ml-2'>Product discovery and building what matters</p></p>
				<p className='flex text-sm mb-3'><img src={iconlist} alt="" /> <p className='ml-2'>Measuring to ensure updates are a success</p></p>
				<p className='flex text-sm mb-8'><img src={iconlist} alt="" /> <p className='ml-2'>Add much more!</p> </p>
				<p className='text-[11px] font-bold mb-2'>Email address</p>
				<input className='border border-slate-800 rounded-md h-10 w-[100%] p-5 mb-5' placeholder='Enter Email Address' type="text" value={emailVal} onChange={e=>setEmailVal(e.target.value)} />
				<br />
				<button className='bg-[#232742] border-b-slate-800 rounded-md h-10 w-[100%] text-white text-sm' onClick={validate}>Subscribe to monthly newsletter</button>
			</div>
			<img className="" src={Desk} alt="" />
		</div>
		
    </div>
  )
}

export default Home
