import React from 'react'
import karthigeyanimg from "../assets/portfolioimg.png"
const About = () => {
  return (
    <div className="min-h-screen w-full flex items-center px-10">
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
    
        <p className="text-xl mt-3 max-w-xl leading-relaxed">
          As an Information Technology student, I am passionate about learning and
          applying software engineering principles. I thrive in challenging
          situations, adapt quickly, and always strive to grow both personally and
          professionally.
        </p>
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