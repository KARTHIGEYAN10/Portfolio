import React, { useState,useEffect } from 'react'
import img from "../assets/portfolioimg.png"
import blackimg from "../assets/Black_colour.jpg"
import postman from "../assets/postman.png"
import vscode from "../assets/vscode.png"
import jenkins from "../assets/jenkins.png"
import figma from "../assets/figma.png"
import git from "../assets/git.png"
const OtherTool = () => {
    const itemWidth=170
                const [curindex,setCurIndex]=useState(0)
                const [itemVisible,setItemsVisible]=useState(1)
                const languageList=[{name:"Git",img:git},{name:"Jenkins",img:jenkins},{name:"postman",img:postman},{name:"vscode",img:vscode},{name:"Figma",img:figma}]
                useEffect(()=>{
                    const updatefn=()=>{
                        if(window.innerWidth >= 1024) setItemsVisible(4);
                        else if(window.innerWidth >= 768) setItemsVisible(3);
                        else if(window.innerWidth >= 640) setItemsVisible(2);
                        else setItemsVisible(1);
                    }
                    updatefn();
                    window.addEventListener("resize",updatefn);
                    return ()=>{
                        window.removeEventListener("resize",updatefn);
                    }
                },[])
                const maxIndex=Math.max(languageList.length-itemVisible,0)
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
            <p className='text-2xl font-semibold mb-5 text-center md:text-left mt-4'>OTHER TOOLS</p>
            <div className='flex justify-center items-center w-full'>
                {/* left */}
                {curindex > 0 ? (
                <div className='w-[10%] flex justify-center items-center'>
                    <span className='text-center hover:bg-slate-500 rounded-full p-3 cursor-pointer'
                    onClick={()=>previndex(curindex)}>&#129128;</span>
                </div>
                ) : (
                <div className='w-[10%] flex justify-center items-center'>
                    <span className='hidden text-center hover:bg-slate-500 rounded-full p-3 cursor-pointer'
                    onClick={()=>previndex(curindex)}>&#129032;</span>
                </div>
                )}
                {/* main */}
                <div className='p-4 overflow-hidden' style={{width:`${itemVisible*itemWidth}px`}}>
                    <div className={`flex gap-5 transition-transform duration-500 ease-in-out`} style={{
                        maxwidth:`${itemVisible*itemWidth}`,transform:`translateX(-${curindex*itemWidth}px)`}}>
                        {languageList && languageList.map((item)=>(
                        <div className='flex-shrink-0 relative group'>
                            <img src={item.img} alt=""  className='h-[150px] w-[150px] rounded-lg group-hover:scale-105 duration-500 cursor-pointer bg-white group-hover:bg-slate-600 z-1'/>
                            <p className='absolute hidden group-hover:block transition-opacity tracking-widest duration-300 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-center text-xl font-semibold cursor-pointer hover:z-0 text-white'>{item.name}</p>
                        </div>
                        ))}
                    </div>
                </div>
                {/* right */}
                {(curindex != maxIndex && languageList.length > itemVisible) ? (
                <div className='w-[10%] flex justify-center items-center'>
                    <span className='text-center hover:bg-slate-500 rounded-full p-3 cursor-pointer'
                    onClick={()=>nextindex(curindex)}>&#129130;</span>
                </div>
                ) : (
                <div className='w-[10%] flex justify-center items-center'>
                    <span className='hidden text-center hover:bg-slate-500 rounded-full p-3 cursor-pointer'
                    onClick={()=>nextindex(curindex)}>&#129034;</span>
                </div>
                )}
            </div>
        </div>
  )
}

export default OtherTool