import React from 'react';
import { screen, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom"; 
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import Cart from '../components/Cart';
import Nav from '../components/Nav'
import Shop from '../components/Shop'


describe('testing shopping bag section', ()=>{

    it('if quantity goes up', async()=>{
        
        const onClickMock = jest.fn()

        const bagItemsMock = [{
            name: 'Mochito',
            src: './logo.png',
            price: 50,
            quantity: 1,
            id: 1
          }]


       const onFakeClick = jest.fn()
      
       render(
        <BrowserRouter>
            <Shop addToBag={onClickMock} cards={bagItemsMock} />
        </BrowserRouter>
        )

        
        render(
            <BrowserRouter>
                <Nav toggleCart={onClickMock} bagItems={bagItemsMock}  />
            </BrowserRouter>
            )

        render(
        <BrowserRouter>
            <Cart  incrementQuantity={onFakeClick} bagItems={bagItemsMock} />
        </BrowserRouter>
        )
       
        
        const incrementBtn =  screen.getByTestId('increment')

        userEvent.click(incrementBtn)
       
        expect(onFakeClick).toHaveBeenCalledTimes(1)

         expect(screen.getByTestId('quantity').textContent).toMatch('1')

    })



})