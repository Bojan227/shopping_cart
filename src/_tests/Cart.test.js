import React from 'react';
import { screen, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom"; 
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import Cart from '../components/Home';
import Nav from '../components/Nav'

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

        
        render(
            <BrowserRouter>
                <Nav toggleCart={onClickMock} bagItems={bagItemsMock} />
            </BrowserRouter>
            )

        render(
        <BrowserRouter>
            <Cart bagItems={bagItemsMock} decrementQuantity={onClickMock} />
        </BrowserRouter>
        )
       
        
        const incrementBtn =  screen.getByTestId('increment')
        userEvent.click(incrementBtn)
          
       await waitFor(()=>expect(screen.getByTestId('quantity').textContent).toMatch('2'))

    })



})