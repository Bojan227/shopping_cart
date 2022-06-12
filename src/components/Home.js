import React from 'react';
import {Link} from "react-router-dom"



export default function Home(){

    return(
        <main className='home-page'>
            <h1>eBar Liquor Shop</h1>
            <div className='shoes-section'>
                <img src="https://www.thecocktaildb.com/images/media/drink/xtuyqv1472669026.jpg" alt="cocktails"/>
                <img src="https://www.thecocktaildb.com/images/media/drink/wwpyvr1461919316.jpg" alt='cocktails'/>
                <img src="https://www.thecocktaildb.com/images/media/drink/i9suxb1582474926.jpg"  alt='cocktails'/>
            </div>

            <Link to='/shop'>
                <button className='shop--btn'>Shop Now</button>
            </Link>
        </main>
    )
}