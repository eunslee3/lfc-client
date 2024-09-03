import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar';
import Carousel from 'react-bootstrap/Carousel'

const Homepage = () => {
  const [index, setIndex] = useState(0);
  const [height, setHeight] = useState(document.documentElement.clientHeight)
  const [width, setWidth] = useState(document.documentElement.clientWidth)
  const heroImages = [
    '/intro_mma.jpg',
    '/boxing.jpg',
    'core-workout.jpg'
  ];

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  console.log(
    document.documentElement.clientWidth
  )

  useEffect(() => {
    setHeight(document.documentElement.clientHeight)
    setWidth(document.documentElement.clientWidth)
  }, [document.documentElement.clientHeight, document.documentElement.clientWidth])

  return (
    <div className='container-fluid p-0'>
      <Navbar />
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item interval={5000}>
          <img className='hero-image' src={process.env.PUBLIC_URL + '/hero_images/intro_mma.jpg'} alt='mma' />
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img className='hero-image' src={process.env.PUBLIC_URL + '/hero_images/boxing.jpg'} alt='boxing' />
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img className='hero-image' src={process.env.PUBLIC_URL + '/hero_images/core-workout.jpg'} alt='core workout' />
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Homepage