import { useState } from 'react'
import { useParams } from 'react-router-dom'
import List from '../../components/list/List'
import './Products.scss'

const Products = () => {
    const catId = parseInt(useParams().id);
    const [maxPrice, setMaxPrice] = useState(1000);
    const [sort, setSort] = useState(null);
    return (
        <div className='products'>
            <div className="left">
                <div className="filterItem">
                    <h2>Product Categories</h2>
                    <div className="inputItem">
                        <input type="checkbox" name="" id="1" />
                        <label htmlFor="1">Shoes</label>
                    </div>
                    <div className="inputItem">
                        <input type="checkbox" name="" id="2" />
                        <label htmlFor="2">Skirts</label>
                    </div>
                    <div className="inputItem">
                        <input type="checkbox" name="" id="3" />
                        <label htmlFor="3">Coats</label>
                    </div>

                </div>
                <div className="filterItem">
                    <h2>Filter by price</h2>
                    <div className="inputItem">
                        <span>0</span>
                        <input type="range" min={0} max={1000} onChange={(e) => setMaxPrice(e.target.value)} />
                        <span>{maxPrice}</span>
                    </div>
                </div>
                <div className="filterItem">
                    <h2>Sort By</h2>
                    <div className="inputItem">
                        <input type="radio" id='asc' value="asc" name="price" onChange={e => setSort("asc")} />
                        <label htmlFor="asc">Price (Lowest First)</label>
                    </div>
                    <div className="inputItem">
                        <input type="radio" id='desc' value="desc" name="price" onChange={e => setSort("desc")} />
                        <label htmlFor="desc">Price (Highest First)</label>
                    </div>
                </div>
            </div>
            <div className="right">
                <img src="https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className="catImg" />
                <List catId={catId} maxPrice={maxPrice} sort={sort} />
            </div>
        </div>
    )
}

export default Products