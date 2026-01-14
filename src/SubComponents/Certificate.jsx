import React from 'react'
import blackimg from "../assets/Black_colour.jpg"
import udemy from "../assets/udemy.jpg"
const Certificate = () => {
  const certificateList=[{img:udemy,name:"Java OOP",issuedDate:"Aug 8, 2025",link:"https://www.udemy.com/certificate/UC-314653f3-faf7-45c6-bf8f-41958b60fde2/"},
                          {img:udemy,name:"Master Python Programming",issuedDate:"Mar 2, 2025",link:"https://www.udemy.com/certificate/UC-2c0046d7-20b7-4e60-be34-d5a2dded4046/"},
                          {img:udemy,name:"Mysql management and sql Queries",issuedDate:"May 5, 2025",link:"https://www.udemy.com/certificate/UC-0de509c8-b1b3-43f7-a06b-d07194def47a/"},
                        ]
  return (
    <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4'>
      {certificateList.map((item)=>(
        <div className='flex flex-col items-center text-center bg-white hover:shadow-md p-4 rounded-xl'>
          <div>
            <img src={item.img} alt="" className='h-24 w-24 object-contain rounded-full mb-4'/>
          </div>
          <div>
            <p className='text-lg font-semibold'>{item.name}</p>
            <p className='text-sm text-gray-600'>Issued on</p>
            <p className='text-md mb-3'>{item.issuedDate}</p>
            <a href={item.link} target='_blank' rel='noopener noreferrer' className='text-blue-600 font-medium'>View Certificate →</a>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Certificate