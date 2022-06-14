import React from 'react';
import { Link } from 'react-router-dom';


export default function Card({id, src, name, price, addToBag}){

    
return (

    <div className='card'>
        <Link to={`/shop/${id}`}>
             <img src={src} alt='shoe'/>
        </Link>
        <h3>{name}</h3>
        <p>${price}</p> 
        <button type='button' onClick={addToBag}>Add to Cart</button>   
    </div>
)
}
