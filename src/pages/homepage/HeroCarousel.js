import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './homepage.css'

// Use React Bootstrap to create a hero image carousel
const HeroCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item interval={5000}>
        <img className='d-block w-100' style={{ height: '100vh', objectFit: 'cover', opacity: 0.7 }} src={process.env.PUBLIC_URL + '/hero_images/intro_mma.jpg'} alt='mma' />
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img className='d-block w-100' style={{ height: '100vh', objectFit: 'cover', opacity: 0.7 }} src={process.env.PUBLIC_URL + '/hero_images/boxing.jpg'} alt='boxing' />
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img className='d-block w-100' style={{ height: '100vh', objectFit: 'cover', opacity: 0.7 }} src={process.env.PUBLIC_URL + '/hero_images/core-workout.jpg'} alt='core workout' />
      </Carousel.Item>
    </Carousel>
    </>
  )
}

export default HeroCarousel