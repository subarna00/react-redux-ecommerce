import React, { useState } from 'react'
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';
import './Slider.scss';
const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
        'https://images.pexels.com/photos/14840714/pexels-photo-14840714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=1000&dpr=2',
        'https://images.pexels.com/photos/14642654/pexels-photo-14642654.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
        'https://images.pexels.com/photos/12216251/pexels-photo-12216251.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load'

    ]
    const previousSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
    };
    const nextSlide = () => {
        setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
    };

    return (
        <div className='slider'>
            <div className="container">
                <img src={data[currentSlide]} alt="" />

            </div>
            <div className="icons">
                <div className="icon" onClick={previousSlide}>
                    <WestOutlinedIcon />
                </div>
                <div className="icon" onClick={nextSlide}>
                    <EastOutlinedIcon />
                </div>
            </div>
        </div>
    )
}

export default Slider