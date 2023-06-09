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
		<div className=' bg-white w-[50%] h-[60%] rounded-xl flex justify-between p-5'>
			<div>
			<p className='text-2xl'>Stay updated!</p>
			<p>Join 60,000+ product managers receiving monthly <br /> updates on:</p>
			<p className='flex'><img src={iconlist} alt="" /> Product discovery and building what matters</p>
			<p className='flex'><img src={iconlist} alt="" /> Measuring to ensure updates are a success</p>
			<p className='flex'><img src={iconlist} alt="" /> Add much more!</p>
			<p>Email address</p>
			<input type="text" value={emailVal} onChange={e=>setEmailVal(e.target.value)} />
			<button onClick={validate}>Submit</button>
			</div>
			<img src={Desk} alt="" />
		</div>
		
    </div>
  )
}

export default Home
