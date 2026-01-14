import React from 'react'
import Profile from '../SubComponents/Profile'
import Certificate from '../SubComponents/Certificate'

const ProfileAndCertification = () => {
  return (
    <div className='min-h-screen max-h-fit w-full p-10 relative' id='profileandcertification'>
        <div className='mb-5'>
            <p className='text-4xl font-bold'>PROFILES</p>
            <Profile />
        </div>
        <div className=''>
            <p className='text-4xl font-bold'>CERTIFICATIONS</p>
            <Certificate />
        </div>
    </div>
  )
}

export default ProfileAndCertification