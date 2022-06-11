
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

  const [cards, setCard] = React.useState(
    [
    {
    src:	"https://www.thecocktaildb.com/images/media/drink/yyrwty1468877498.jpg",
    name: 'Air Force 1',
    info: "Waterproof shoes",
    id: nanoid()
    },
    {
    src: 	"https://www.thecocktaildb.com/images/media/drink/yyrwty1468877498.jpg",
    name: 'Air Force 2',
    info: "Bulletproof shoes",
    id: nanoid()    

    },
])

  function toggleCart(){
    setOpenCart(prevState=>!prevState)
  }



  return (
    <div className="App">
      <BrowserRouter>
        <Nav toggleCart={toggleCart} />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/shop' element={<Shop cards={cards} />}></Route>

        </Routes>
      </BrowserRouter>  

      {openCart && <Cart visible={"visible"} toggleCart={toggleCart} />}
    </div>
  );
}

export default App;
