import React from 'react';
import shoe_1  from "../images/nike1.png"
import shoe_2  from "../images/nike2.png"
import shoe_3  from "../images/nike3.png"
import {Link} from "react-router-dom"



export default function Home(){

    return(
        <main className='home-page'>
            <h1>Boki's Thrift Shop</h1>
            <div className='shoes-section'>
                <img src={shoe_1} alt="shoe"/>
                <img src={shoe_2} alt='shoe'/>
                <img src={shoe_3}  alt='shoe'/>
            </div>
            
            <div className='info-section'>
                <h1>High Quality Shoes for Low Price</h1>
            </div>

            <Link to='/shop'>
                <button className='shop--btn'>Shop Now</button>
            </Link>
        </main>
    )
}