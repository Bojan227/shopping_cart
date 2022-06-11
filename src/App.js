
import './App.css';
import React from 'react';
import Nav from './components/Nav';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Shop from './components/Shop';
import Cart from './components/Cart';
import { nanoid } from 'nanoid';

function App() {

  const [openCart, setOpenCart] = React.useState(false)
  const [bagItems, setBagItems] = React.useState([])
  const [cards, setCards] = React.useState([])

  console.log(bagItems)
React.useEffect(()=>{
  let randomNum = Math.floor(Math.random() * 84)

  fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic")
  .then(res=>res.json())
  .then(data=>{
    const allDrinks = data.drinks.slice(randomNum, randomNum + 8).map(drink=>{
      return {
        name: drink.strDrink,
        src: drink.strDrinkThumb,
        price: `$${Math.floor(Math.random() * 84) + 16}`,
        id: nanoid()
      }
    })
    setCards([...allDrinks])
  })


}, [])

function addToBag(id){
 
  setBagItems(prevState=>{
    let findItem = cards.find(card=> card.id === id)
    return [...prevState, findItem]
  })
}


  function toggleCart(){
    setOpenCart(prevState=>!prevState)
  }



  return (
    <div className="App">
      <BrowserRouter>
        <Nav toggleCart={toggleCart} />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/shop' element={<Shop cards={cards} addToBag={addToBag} />}></Route>

        </Routes>
      </BrowserRouter>  

      {openCart && <Cart visible={"visible"} toggleCart={toggleCart} cartItems={bagItems} />}
    </div>
  );
}

export default App;
