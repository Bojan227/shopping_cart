import React from 'react';
import Card from './Card';


export default function Shop(props){

   

    const styles = {
        display: 'grid',
        gridColumn: "1fr 1fr / 1fr 1fr",
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        gap: "20px"

    }


    const allCards = props.cards.map(card=>{
        return <Card src={card.src} name={card.name} info={card.info} />
    })

    return(
        <div style={styles} className='cards-section'>
            {allCards}
        </div>
    )
}