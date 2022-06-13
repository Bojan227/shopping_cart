import React from 'react';
import { Link } from 'react-router-dom';

export default function Card(props){

return (

    <div className='card'>
        <Link to={`/shop/${props.id}`}>
             <img src={props.src} alt='shoe'/>
        </Link>
        <h3>{props.name}</h3>
        <p>${props.price}</p> 
        <button onClick={props.addToBag}>Add to Cart</button>   
    </div>
)
}
