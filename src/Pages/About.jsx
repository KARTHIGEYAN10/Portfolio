import React from 'react'
import karthigeyanimg from "../assets/portfolioimg.png"
const About = () => {
  return (
    <div className="min-h-screen w-full flex items-center px-10" id='about'>
            {/* writing part */}
            <div className="w-1/2 flex flex-col gap-5">
                <p className="text-[#6f2dbd] font-semibold text-xl">
                    Hey there, my name is
                </p>
                <h1 className="text-4xl md:text-5xl font-extrabold">
                    Karthigeyan B
                </h1>
    
                <p className="text-2xl font-serif">
                  A passionate Software Developer
                </p>
    
                <p className="text-xl mt-3 max-w-xl leading-relaxed mb-5">
                  As an Information Technology student, I am passionate about learning and
                  applying software engineering principles. I thrive in challenging
                  situations, adapt quickly, and always strive to grow both personally and
                  professionally.
                </p>
                <div className=''>
                  <span className='p-5 text-xl font-bold border-black border-2 text-amber-950 rounded-2xl cursor-pointer hover:bg-zinc-500 hover:text-white duration-500'><a href='https://drive.google.com/uc?id=1xErDlp-91By-aoRdq_UV1Lsl3QzME2-K' target='_blank'>VIEW RESUME &#129133;</a></span>
                </div>
              </div>
    
              {/* image part */}
              <div className="w-1/2 flex justify-center">
                <img
                  src={karthigeyanimg}
                  alt="Karthigeyan"
                  className="
                    h-[300px] w-[300px] rounded-full
                    ring-4 ring-black ring-offset-4
                    hover:ring-8 hover:scale-105
                    transition-all duration-500
                    cursor-pointer
                  "
                />
              </div>
  
    </div>
  )
}

export default About