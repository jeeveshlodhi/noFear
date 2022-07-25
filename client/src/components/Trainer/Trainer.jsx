import React from 'react'
import './Trainer.css'
import banner from '../../assets/trainer-poster.jpg'
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

import trainer1 from '../../assets/trainer1.jpg'
import trainer2 from '../../assets/trainer2.jpg'
import trainer3 from '../../assets/trainer3.jpg'
import trainer4 from '../../assets/trainer4.jpg'
import trainer5 from '../../assets/trainer5.jpg'
import trainer6 from '../../assets/trainer6.jpg'
import trainer7 from '../../assets/trainer7.jpg'
import trainer8 from '../../assets/trainer8.jpg'
import trainer9 from '../../assets/trainer9.jpg'
import trainer10 from '../../assets/trainer10.jpg'


const Trainer = () => {

    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return (
        <div className='trainerWrapper'>
            <div  className='trainerBanner'>
                <img src={banner} alt="" />
            </div>
            
            <div className='bannerWrapper'>
                <div className='bannerHeading'>Online Training</div>
                <div className='bannerSubHeading'>Train at your home with our trainers</div>
                <div className='topTrainerWrapper'>
                    <div className='heading'>Top Trainers</div>
                    <div className='trainerSliderWrapper'>
                        <Carousel responsive={responsive}   >
                            <div className='carouselItem'><div>1 <span className='trainerName'>Jhon Doe</span></div><img src={trainer1} alt="" /></div>
                            <div className='carouselItem'><div>2 <span className='trainerName'>Jhon Doe</span></div><img src={trainer2} alt="" /></div>
                            <div className='carouselItem'><div>3 <span className='trainerName'>Jhon Doe</span></div><img src={trainer3} alt="" /></div>
                            <div className='carouselItem'><div>4 <span className='trainerName'>Jhon Doe</span></div><img src={trainer4} alt="" /></div>
                            <div className='carouselItem'><div>5 <span className='trainerName'>Jhon Doe</span></div><img src={trainer5} alt="" /></div>
                            <div className='carouselItem'><div>6 <span className='trainerName'>Jhon Doe</span></div><img src={trainer6} alt="" /></div>
                            <div className='carouselItem'><div>7 <span className='trainerName'>Jhon Doe</span></div><img src={trainer7} alt="" /></div>
                            <div className='carouselItem'><div>8 <span className='trainerName'>Jhon Doe</span></div><img src={trainer8} alt="" /></div>
                            <div className='carouselItem'><div>9 <span className='trainerName'>Jhon Doe</span></div><img src={trainer9} alt="" /></div>
                            <div className='carouselItem'><div>10 <span className='trainerName'>Jhon Doe</span></div><img src={trainer10} alt="" /></div>
                        </Carousel>
                    </div>
                </div>
            </div>
            <div className='group'>
                <div className='heading'>Our Trainers</div>
            </div>
            
        </div>
    )
}

export default Trainer