import React from 'react';

export default function Cart({bagItems, toggleCart, decrementQuantity, incrementQuantity}){
    const totalAmount = bagItems
    .map(item=>item.price * item.quantity)
    .reduce((curr, prev)=>curr + prev, 0)

    const allItems = bagItems.map(item=>(
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
                        <button type='button'  onClick={()=>decrementQuantity(item.id)}>-</button>
                        <h3 >{item.quantity}</h3>
                        <button type='button'  onClick={()=>incrementQuantity(item.id)}>+</button>    
                    </div>
                    <h3 className='price'>$ {item.price * item.quantity}</h3>
                </div>

            </div>
        ))


    return (
        <div className="cart-container">
        <div className='cart'>
            <div>
            <div className='header-bag'>
                <h1>Shopping Bag</h1>
                <button type='button' onClick={toggleCart} className='back--btn'>X</button>
            </div>
            <div className='products'>
                {allItems.length === 0 ? <h4>Your bag is empty</h4> : allItems}
            </div>
            </div>
            <div className='order-btn'>
                <h1>Total: ${totalAmount}</h1>
                <button type='button'>Make Order</button>
            </div> 
        </div>
        
        </div>
    )



}