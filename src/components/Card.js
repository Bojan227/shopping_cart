import React from 'react'
import { Link } from 'react-router-dom'

export default function Card({ id, src, name, price, addToBag }) {
    const [hover, setHover] = React.useState(false)

    function toggleHover() {
        setHover(true)
    }

    function toggleFalse() {
        setHover(false)
    }

    return (
        <div className="card">
            <Link to={`/shop/${id}`}>
                <img
                    onMouseEnter={toggleHover}
                    onMouseLeave={toggleFalse}
                    src={src}
                    alt="cocktail"
                />

                <div className={`text ${hover ? 'active' : ''}`}>
                    <h2>Click to see more!</h2>
                </div>
            </Link>
            <h3>{name}</h3>
            <p>${price}</p>
            <button type="button" onClick={addToBag}>
                Add to Cart
            </button>
        </div>
    )
}
