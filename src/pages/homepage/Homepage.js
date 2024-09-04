import { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar';
// In case they want a hero carousel
import HeroCarousel from './HeroCarousel';
import ProgramsSpan from './ProgramsSpan';


const Homepage = () => {

  return (
    <div>
      <Navbar />
      <div className='d-flex align-items-center justify-content-center'>
        {/* <HeroCarousel />   */}
        <img className='d-block w-100 hero-overlay' style={{ height: '100vh', objectFit: 'cover', opacity: 0.7 }} src={process.env.PUBLIC_URL + '/hero_images/intro_mma.jpg'} alt='mma' />
        <div className='hero-captions'>
          <div className='d-flex flex-column align-items-center justify-content-center w-50'>
            <h1 style={{ fontSize: '5em'}} className='text-white text-center my-4'>Lawrence Fight Club - Resurrected</h1>
            <p style={{ fontSize: '1.3em' }} className='text-center text-white font-monospace'>
              The ultimate destination for top-tier martial arts training. Whether you're a seasoned fighter or just starting your journey, our gym offers expert instruction in MMA, kickboxing, and jiu-jitsu.
            </p>
          </div>
        </div>
      </div>
      <ProgramsSpan />
    </div>
  )
}

export default Homepage