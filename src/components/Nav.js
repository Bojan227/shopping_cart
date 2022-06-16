import React from 'react';
import {Link} from "react-router-dom"
import cart from '../images/cart.png'

export default function Nav({toggleCart, bagItems}){

    return (

        <nav>
            <ul>
                <Link to='/shopping_cart'>
                    <li>Home</li>
                </Link>

                <Link to='/shop'>
                    <li>Shop</li>
                </Link>

                <img src={cart} alt='cart' onClick={toggleCart} />
                {bagItems.length > 0 && <div data-testid='count-items' className='bag-length'>{bagItems.length}</div>}
            </ul>

        </nav>


    )

}