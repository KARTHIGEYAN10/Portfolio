import React from 'react'

const Navbar = () => {
  const smoothTransitionHandler=(val)=>{
    document.getElementById(val).scrollIntoView({
      behavior:'smooth'
    })
  }
  return (
    <div className='bg-black text-white'>
      <ul className='flex flex-row p-3'>
        <li className='flex-[45%] text-3xl cursor-pointer text-[#023e8a] font-bold'>PORTFOLIO</li>
        <li className="flex-[10%] group cursor-pointer">
          <p className="text-2xl font-semibold text-[#9d0208] hover:text-red-500" onClick={()=>smoothTransitionHandler("about")}>About</p>
          <span className="block h-[3px] w-0 bg-[#9b2226] transition-all duration-300 group-hover:w-[70px]"></span>
        </li>
        <li className="flex-[10%] group cursor-pointer">
          <p className="text-2xl font-semibold text-[#9d0208] hover:text-red-500" onClick={()=>smoothTransitionHandler("skills")}>Skills</p>
          <span className="block h-[3px] w-0 bg-[#9b2226] transition-all duration-300 group-hover:w-[55px]"></span>
        </li>
        <li className="flex-[10%] group cursor-pointer">
          <p className="text-2xl font-semibold text-[#9d0208] hover:text-red-500" onClick={()=>smoothTransitionHandler("project")}>Project</p>
          <span className="block h-[3px] w-0 bg-[#9b2226] transition-all duration-300 group-hover:w-[80px]"></span>
        </li>
        <li className="flex-[15%] group cursor-pointer">
          <p className="text-2xl font-semibold text-[#9b2226] hover:text-red-500" onClick={()=>smoothTransitionHandler("ProfileandCertification")}>Profile & Certification</p>
          <span className="block h-[3px] w-0 bg-[#9b2226] transition-all duration-300 group-hover:w-[85px]"></span>
        </li>
        <li className="flex-[10%] group cursor-pointer">
          <p className="text-2xl font-semibold text-[#9d0208] hover:text-red-500" onClick={()=>smoothTransitionHandler("contact")}>Contact</p>
          <span className="block h-[3px] w-0 bg-[#9b2226] transition-all duration-300 group-hover:w-[85px]"></span>
        </li>
      </ul>
    </div>
  )
}

export default Navbar