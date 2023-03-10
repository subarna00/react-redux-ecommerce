
import React from 'react'
import Card from '../card/Card'
import './FeaturedProducts.scss'
const FeaturedProducts = ({ type }) => {
    const data = [
        {
            id: 1,
            img: 'https://images.pexels.com/photos/991509/pexels-photo-991509.jpeg?auto=compress&cs=tinysrgb&w=800',
            img2: 'https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            title: "Long Sleeve Graphic T-shirt",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 2,
            img: 'https://images.pexels.com/photos/1206873/pexels-photo-1206873.jpeg?auto=compress&cs=tinysrgb&w=800',
            img2: 'https://images.pexels.com/photos/1643025/pexels-photo-1643025.jpeg?auto=compress&cs=tinysrgb&w=800',
            title: "Coat",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 3,
            img: 'https://images.pexels.com/photos/991509/pexels-photo-991509.jpeg?auto=compress&cs=tinysrgb&w=800',
            img2: 'https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            title: "Long Sleeve Graphic T-shirt",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 4,
            img: 'https://images.pexels.com/photos/1206873/pexels-photo-1206873.jpeg?auto=compress&cs=tinysrgb&w=800',
            img2: 'https://images.pexels.com/photos/1643025/pexels-photo-1643025.jpeg?auto=compress&cs=tinysrgb&w=800',
            title: "Coat",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
    ]
    return (
        <div className='featuredProducts'>
            <div className="top">
                <h1>{type} products</h1>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore atque expedita a explicabo consectetur voluptates veniam suscipit ex? Sequi saepe laboriosam laborum iure. Dolorem, repudiandae vero. Est sed ipsam exercitationem.
                </p>
            </div>
            <div className="bottom">
                {
                    data.map((card) => {
                        return <Card item={card} key={card.id} />
                    })
                }
            </div>
        </div>
    )
}

export default FeaturedProducts