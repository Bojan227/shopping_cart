import React from 'react';

export default function Cart(props){

    const allItems = props.bagItems.map(item=>{

        return (
            <div className='product' key={item.id}>
                <img 
                src={item.src}
                width="150px"
                height='150px'
                alt='cocktail'
                />
                <div className='product-info'>
                    <h3>{item.name}</h3>
                    <div className='add--more'>
                        <button onClick={()=>props.decrementQuantity(item.id)}>-</button>
                        <h3>{item.quantity}</h3>
                        <button onClick={()=>props.incrementQuantity(item.id)}>+</button>    
                    </div>
                    <h3 className='price'>$ {item.price * item.quantity}</h3>
                </div>

            </div>
        )
    })


    return (
        <div className={`cart-container ${props.visible}`}>
        <div className='cart'>
            <div className='header-bag'>
                <h1>Shopping Bag</h1>
                <button onClick={props.toggleCart} className='back--btn'>X</button>
            </div>
            <div className='products'>
                {allItems.length === 0 ? <h4>Your bag is empty</h4> : allItems}
            </div>


        </div>
        </div>
    )



}