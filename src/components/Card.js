import React from 'react';

export default function Card(props){

return (
    <div className='card'>
        <img src={props.src} alt='shoe'/>
        <h3>{props.name}</h3>
        <p>${props.price}</p> 
        <button onClick={props.addToBag}>Add to Cart</button>   
    </div>
)
}
