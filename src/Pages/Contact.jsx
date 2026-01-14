import React, { useState } from 'react'
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {Link} from "react-router-dom"


import karthigeyanimg from "../assets/portfolioimg.png"
const Contact = () => {
  const [formData,setFormData]=useState({
    name:"",
    email:"",
    phonenumber:"",
    comment:""
  })
  function handleFormSubmit(e){
    e.preventDefault();
    console.log(formData)
    setFormData({
      name:"",
      email:"",
      phonenumber:"",
      comment:""
    })
    console.log(formData);
  }
  return (
    <div className="min-h-screen max-h-fit w-full flex flex-col md:flex-row items-center py-10 md:px-10 gap-5 md:gap-0" id='contact'>
                {/* writing part */}
        <div className="w-full md:w-1/2 flex flex-col gap-5">
            <p className="text-[#6f2dbd] font-semibold text-5xl mb-5">
                        CONTACT ME
            </p>
            <p className="text-xl mt-3 max-w-xl leading-relaxed">
              Have an idea or just want to connect? I’d love to hear from you. Feel free to reach out anytime, and let’s build something meaningful together.
            </p>
            <div className='flex flex-row gap-5 justify-center md:justify-start'>
                <a href="https://www.linkedin.com/in/karthigeyan-b-3654b731b/" target='_blank' className="cursor-pointer"><FaLinkedin className='text-blue-400 text-2xl'/></a>
                <a href="https://github.com/KARTHIGEYAN10" target='_blank' className='cursor-pointer'><FaGithub className='text-2xl'/></a>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=karthigeyanb.it@gmail.com" target="_blank" rel="noopener noreferrer">
                  <MdEmail className="text-white text-2xl hover:scale-110 transition" />
                </a>

            </div>
          </div>
        
          {/* image part */}
          <div className="w-full md:w-1/2 flex flex-col">
            <form  className='w-full' onSubmit={handleFormSubmit}>
              <div className='w-full p-3 md:p-0 mx-auto'>
                <input type="text" placeholder='NAME' className='font-serif text-lg p-3  w-full mb-4 active:border-none focus:outline-none required'
                onChange={(e)=>setFormData({...formData,name:e.target.value})} value={formData.name}/>
                <input type="email" name="email" placeholder='EMAIL' className='font-serif text-lg p-3 w-full mb-4 border-none focus:outline-none required'
                onChange={(e)=>setFormData({...formData,email:e.target.value})} value={formData.email}/>
                <input type="tel" name="phoneumber" placeholder='PHONE NUMBER' className='font-serif text-lg p-3 w-full mb-4 border-none focus:outline-none required'
                onChange={(e)=>setFormData({...formData,phonenumber:e.target.value})} value={formData.phonenumber}/>
                <textarea type="text" name="comment" placeholder='COMMENT' className='font-serif h-[130px] text-lg p-3  w-full resize-none focus:outline-none border-none'
                onChange={(e)=>setFormData({...formData,comment:e.target.value})} value={formData.comment}/>
            </div>
            <div className='mt-5 text-center'>
              <button className='border-none bg-purple-700 text-white text-lg pt-4 pb-4 pl-5 pr-5 rounded-md active:scale-95' type='submit'>SEND MESSAGE</button>
            </div>
            </form>
          </div>
        </div>
  )
}

export default Contact