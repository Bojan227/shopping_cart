import React from 'react';

export default function Card(props){
console.log(props)
return (
    <div className='card'>
        <img src={props.src} alt='shoe'/>
        <h3>{props.name}</h3>
        <p>{props.info}</p> 
        <button>Add to Cart</button>   
    </div>
)


}
