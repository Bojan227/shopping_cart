import React from 'react';
import Card from './Card';


export default function Shop(props){

    const allCards = props.cards.map(card=>{
        return <Card
        key={card.id}
        src={card.src}
        name={card.name}
        price={card.price}
        id={card.id}
        addToBag={()=>props.addToBag(card.id)}  />
    })

    return(
        <div className='cards-section'>
            {allCards}
        </div>
    )
}