import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-black text-white'>
      <ul className='flex flex-row p-3'>
        <li className='flex-[50%] text-3xl cursor-pointer text-[#023e8a] font-bold'>PORTFOLIO</li>
        <li className="flex-[10%] group cursor-pointer">
          <p className="text-2xl font-semibold text-[#9d0208]">About</p>
          <span className="block h-[3px] w-0 bg-[#9b2226] transition-all duration-300 group-hover:w-[70px]"></span>
        </li>
        <li className="flex-[10%] group cursor-pointer">
          <p className="text-2xl font-semibold text-[#9d0208]">Skills</p>
          <span className="block h-[3px] w-0 bg-[#9b2226] transition-all duration-300 group-hover:w-[55px]"></span>
        </li>
        <li className="flex-[10%] group cursor-pointer">
          <p className="text-2xl font-semibold text-[#9d0208]">Project</p>
          <span className="block h-[3px] w-0 bg-[#9b2226] transition-all duration-300 group-hover:w-[80px]"></span>
        </li>
        <li className="flex-[10%] group cursor-pointer">
          <p className="text-2xl font-semibold text-[#9b2226]">Resume</p>
          <span className="block h-[3px] w-0 bg-[#9b2226] transition-all duration-300 group-hover:w-[85px]"></span>
        </li>
        <li className="flex-[10%] group cursor-pointer">
          <p className="text-2xl font-semibold text-[#9d0208]">Contact</p>
          <span className="block h-[3px] w-0 bg-[#9b2226] transition-all duration-300 group-hover:w-[85px]"></span>
        </li>
      </ul>
    </div>
  )
}

export default Navbar