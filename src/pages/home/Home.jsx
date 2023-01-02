import React from 'react'
import Category from '../../components/categories/Category'
import Contact from '../../components/contact/Contact'
import FeaturedProducts from '../../components/featuredProducts/FeaturedProducts'
import Slider from '../../components/slider/Slider'
import './Home.scss'
const Home = () => {
    return (
        <div className='home'>
            <Slider />
            <FeaturedProducts type="featured" />
            <Category />
            <FeaturedProducts type="trending" />
            <Contact />
        </div>
    )
}

export default Home