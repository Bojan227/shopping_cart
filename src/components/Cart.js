import React from 'react';

export default function Cart(props){

    return (
        <div className={`cart-container ${props.visible}`}>
        <div className='cart'>
            <div className='header-bag'>
                <h1>Shopping Bag</h1>
                <button onClick={props.toggleCart} className='back--btn'>X</button>
            </div>
            <div className='products'>
                <img 
                src="https://www.thecocktaildb.com/images/media/drink/ssxvww1472669166.jpg"
                width="150px"
                height='150px'
                alt='cocktail'
                />
                <div className='product-info'>
                    <h3>A Furlong Too Late</h3>
                    <div className='add--more'>
                        <button>-</button>
                        <h3>1</h3>
                        <button>+</button>    
                    </div>
                    <h3 className='price'>$299.00</h3>
                </div>

            </div>


        </div>
        </div>
    )



}