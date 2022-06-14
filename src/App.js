
import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { nanoid } from 'nanoid';
import { useTransition, animated } from 'react-spring';
import Nav from './components/Nav';
import Home from './components/Home';
import Shop from './components/Shop';

import ProductInfo from './components/ProductInfo';
import Cart from './components/Cart';


function App() {

  const [openCart, setOpenCart] = React.useState(false)
  const [bagItems, setBagItems] = React.useState([])
  const [cards, setCards] = React.useState([])

  const transition = useTransition(openCart, {
    from: { opacity: 0, x: 100},
    enter: { opacity: 1, x: 0},
    leave: {x: -100, opacity: 0},
})


React.useEffect(()=>{
  const randomNum = Math.floor(Math.random() * 84)

  fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic")
  .then(res=>res.json())
  .then(data=>{
    const allDrinks = data.drinks.slice(randomNum, randomNum + 8).map(drink=>({
        name: drink.strDrink,
        src: drink.strDrinkThumb,
        price: Math.floor(Math.random() * 84) + 10,
        quantity: 1,
        id: nanoid()
      }))
    setCards([...allDrinks])
  })


}, [])

function incrementQuantity(id){
  setBagItems(prevItems=>prevItems.map(item=>{
      if(item.id === id){
        return {
          ...item,
          quantity: item.quantity + 1,
          
        }
      }
        return item
      
    }))
}

function decrementQuantity(id){
  setBagItems(prevItems=>prevItems.map(item=>{
      if(item.id === id){
        return {
          ...item,
          quantity: item.quantity - 1,
          
        }
      }
        return item
      
    }).filter(item=>item.quantity !== 0))
}

function addToBag(id){
  setBagItems(prevState=>{
    const findItem = cards.find(card=> card.id === id)
    const alreadyInTheBag = bagItems.find(item=>item.id === findItem.id)
    return alreadyInTheBag ? [...prevState] : [...prevState, findItem]
  })
}


  function toggleCart(){
    setOpenCart(prevState=>!prevState)
  }



  return (
    <div className="App">
      <BrowserRouter>
        <Nav toggleCart={toggleCart} bagItems={bagItems} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop cards={cards} addToBag={addToBag} />} />
          <Route path='/shop/:id' element={<ProductInfo cards={cards} addToBag={addToBag} />} />

        </Routes>
      </BrowserRouter>  

      {transition((style, item)=>{
        if(item){
          return <animated.div className="cart-container-ani" style={style}>
          <Cart
          visible={openCart} 
          toggleCart={toggleCart}
          bagItems={bagItems} 
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
           
           />
           </animated.div>
        }
          
        
         
      }) }
    </div>
  );
}

export default App;
