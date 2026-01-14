import React from 'react'
import ProgrammingLanguage from '../SubComponents/ProgrammingLanguage'
import DevelopmentFramework from '../SubComponents/DevelopmentFramework'
import DataBase from '../SubComponents/DataBase'
import OtherTool from '../SubComponents/OtherTool'

const Skill = () => {
  return (
    <div className='min-h-screen w-full' id='skills'>
      {/* Programming Lang */}
      <div className=''>
        <ProgrammingLanguage />
      </div>
      {/* Web Development */}
      <div>
        <DevelopmentFramework />
      </div>
      {/* Database */}
      <div>
        <DataBase />
      </div>
      {/* Tools */}
      <div>
        <OtherTool />
      </div>
    </div>
  )
}

export default Skill