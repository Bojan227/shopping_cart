import React from 'react'
import Card from './Card'

export default function Shop({ cards, addToBag }) {
    const allCards = cards.map((card) => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <Card key={card.id} {...card} addToBag={() => addToBag(card.id)} />
    ))

    return <div className="cards-section">{allCards}</div>
}
