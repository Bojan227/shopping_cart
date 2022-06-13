
import './App.css';
import React from 'react';
import Nav from './components/Nav';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Shop from './components/Shop';
import Cart from './components/Cart';
import { nanoid } from 'nanoid';
import ProductInfo from './components/ProductInfo';

function App() {

  const [openCart, setOpenCart] = React.useState(false)
  const [bagItems, setBagItems] = React.useState([])
  const [cards, setCards] = React.useState([])

React.useEffect(()=>{
  let randomNum = Math.floor(Math.random() * 84)

  fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic")
  .then(res=>res.json())
  .then(data=>{
    const allDrinks = data.drinks.slice(randomNum, randomNum + 8).map(drink=>{
      return {
        name: drink.strDrink,
        src: drink.strDrinkThumb,
        price: Math.floor(Math.random() * 84) + 10,
        quantity: 1,
        id: nanoid()
      }
    })
    setCards([...allDrinks])
  })


}, [])

function incrementQuantity(id){
  setBagItems(prevItems=>{
    return prevItems.map(item=>{
      if(item.id === id){
        return {
          ...item,
          quantity: item.quantity + 1,
          
        }
      }else{
        return item
      }
    })
  })
}

function decrementQuantity(id){
  setBagItems(prevItems=>{
    return prevItems.map(item=>{
      if(item.id === id){
        return {
          ...item,
          quantity: item.quantity - 1,
          
        }
      }else{
        return item
      }
    }).filter(item=>item.quantity !== 0)
  })
}

function addToBag(id){
  setBagItems(prevState=>{
    let findItem = cards.find(card=> card.id === id)
    let alreadyInTheBag = bagItems.find(item=>item.id === findItem.id)
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
          <Route path='/' element={<Home />}></Route>
          <Route path='/shop' element={<Shop cards={cards} addToBag={addToBag} />} />
          <Route path='/shop/:id' element={<ProductInfo cards={cards} addToBag={addToBag} />} />

        </Routes>
      </BrowserRouter>  

      {openCart && <Cart
       visible={"visible"} 
       toggleCart={toggleCart}
       bagItems={bagItems} 
       incrementQuantity={incrementQuantity}
       decrementQuantity={decrementQuantity}
       
        />}
    </div>
  );
}

export default App;
