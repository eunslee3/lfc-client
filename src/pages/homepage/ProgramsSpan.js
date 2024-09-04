import React from 'react'
import './homepage.css'

const ProgramsSpan = () => {
  return (
    <div style={{ backgroundColor: '#f9f9f9' }} className='w-100 d-flex align-items-center justify-content-center'>
      <div className='program-card'>
        <img className='program-card-img my-3' src={process.env.PUBLIC_URL + '/homepage/jiu-jitsu.jpg'} alt="jiu jitsu" />
        <p className='program-card-header mb-2'>Brazilian Jiu Jitsu</p>
        <p className='text-center'>A self-defence martial art and combat sport based on grappling, ground fighting, and submission holds</p>
      </div>
      <div className='program-card'>
        <img className='program-card-img my-3' src={process.env.PUBLIC_URL + '/homepage/kickboxing.jpg'} alt="jiu jitsu" />
        <p className='program-card-header mb-2'>Kick Boxing</p>
        <p className='text-center'>Kickboxing is a full-contact hybrid martial art and boxing type based on punching and kicking.</p>
      </div>
      <div className='program-card'>
        <img className='program-card-img my-3' src={process.env.PUBLIC_URL + '/homepage/mma.jpg'} alt="jiu jitsu" />
        <p className='program-card-header mb-2'>MMA</p>
        <p className='text-center'>A full-contact combat sport based on striking, grappling and ground fighting, incorporating techniques from various combat sports.</p>

      </div>
    </div>
  )
}

export default ProgramsSpan