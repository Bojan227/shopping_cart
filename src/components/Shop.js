import React from 'react';
import Card from './Card';


export default function Shop({cards, addToBag}){

    const allCards = cards.map(card=><Card
        key={card.id}
        src={card.src}
        name={card.name}
        price={card.price}
        id={card.id}
        addToBag={()=>addToBag(card.id)}  />)

    return(
        <div className='cards-section'>
            {allCards}
        </div>
    )
}