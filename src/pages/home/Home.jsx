import React from 'react'
import FeaturedProducts from '../../components/featuredProducts/FeaturedProducts'
import Slider from '../../components/slider/Slider'
import './Home.scss'
const Home = () => {
    return (
        <div className='home'>
            <Slider />
            <FeaturedProducts type="featured" />
            <FeaturedProducts type="trending" />
        </div>
    )
}

export default Home