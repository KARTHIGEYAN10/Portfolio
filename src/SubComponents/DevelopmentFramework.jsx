import React,{useState} from 'react'
import blackimg from "../assets/Black_colour.jpg"
import html from "../assets/html.png"
import css from "../assets/css.png"
import reactjs from "../assets/react.png"
import nodejs from "../assets/nodejs.png"
import express from "../assets/express.png"
import tailwind from "../assets/tailwindcss.png"
import spring from "../assets/springboot.png"
const DevelopmentFramework = () => {
    const itemVisible=6
        const itemWidth=170
        const [curindex,setCurIndex]=useState(0)
        const languageList=[{name:"ReactJs",img:reactjs},{name:"NodeJs",img:nodejs},{name:"ExpressJs",img:express},{name:"SpringBoot",img:spring},{name:"Tailwindcss",img:tailwind},{name:"Html",img:html},{name:"Css",img:css}]
        const maxIndex=languageList.length-itemVisible
        const previndex=(val)=>{
            if(val != 0){
                setCurIndex(val-1);
            }
            console.log(curindex)
        }
        const nextindex=(val)=>{
            if(val != maxIndex){
                setCurIndex(val+1)
            }
            console.log(curindex);
        }
  return (
    <div>
            <p className='text-2xl font-semibold mb-5'>DEVELOPMENT FRAMEWORK KNOWN</p>
            <div className='flex flex-row w-full mx-auto'>
                {/* left */}
                {curindex > 0 ? (
                <div className='w-[10%] flex justify-center items-center'>
                    <span className='text-center hover:bg-slate-500 rounded-full p-6 cursor-pointer'
                    onClick={()=>previndex(curindex)}>&#129032;</span>
                </div>
                ) : (
                <div className='w-[10%] flex justify-center items-center'>
                    <span className='hidden text-center hover:bg-slate-500 rounded-full p-6 cursor-pointer'
                    onClick={()=>previndex(curindex)}>&#129032;</span>
                </div>
                )}
                {/* main */}
                <div className='p-4 overflow-hidden' style={{width:`${itemVisible*itemWidth}px`}}>
                    <div className={`flex gap-5 transition-transform duration-500 ease-in-out`} style={{
                        maxwidth:`${itemVisible*itemWidth}`,transform:`translateX(-${curindex*itemWidth}px)`}}>
                        {languageList && languageList.map((item)=>(
                        <div className='flex-shrink-0 relative group'>
                            <img src={item.img} alt=""  className='h-[150px] w-[150px] rounded-lg group-hover:scale-105 duration-500 cursor-pointer bg-white group-hover:bg-slate-600'/>
                            <p className='absolute opacity-0 group-hover:opacity-100 transition-opacity tracking-widest duration-300 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-center text-xl font-semibold cursor-pointer text-white '>{item.name}</p>
                        </div>
                        ))}
                    </div>
                </div>
                {/* right */}
                {(curindex != maxIndex && languageList.length > itemVisible) ? (
                <div className='w-[10%] flex justify-center items-center'>
                    <span className='text-center hover:bg-slate-500 rounded-full p-6 cursor-pointer'
                    onClick={()=>nextindex(curindex)}>&#129034;</span>
                </div>
                ) : (
                <div className='w-[10%] flex justify-center items-center'>
                    <span className='hidden text-center hover:bg-slate-500 rounded-full p-6 cursor-pointer'
                    onClick={()=>nextindex(curindex)}>&#129034;</span>
                </div>
                )}
            </div>
        </div>
  )
}

export default DevelopmentFramework