import React from 'react';
import { useParams } from 'react-router-dom';
import styles from '../css/productInfo.css'

export default function ProductInfo({cards, addToBag}){

    const {id} = useParams()
   
    const specificProduct = cards.find(card=>card.id === id)

        console.log(specificProduct)

    return (
        <div className='product--info'>
            <h1>{specificProduct.name}</h1>
            <img src={specificProduct.src} alt='product' />
            <div className='buy-section'>
                 <h1>${specificProduct.price}</h1>
                 <button onClick={()=>addToBag(id)}>Add to Cart</button>  
            </div>
              

        </div>
        
    )

}