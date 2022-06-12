import React from 'react';
import {Link} from "react-router-dom"
import cart from '../images/cart.png'

export default function Nav(props){

    return (

        <nav>
            <ul>
                <Link to='/'>
                    <li>Home</li>
                </Link>

                <Link to='/shop'>
                    <li>Shop</li>
                </Link>

                <img src={cart} alt='cart' onClick={props.toggleCart} />
                {props.bagItems.length > 0 && <div className='bag-length'>{props.bagItems.length}</div>}
            </ul>

        </nav>


    )

}