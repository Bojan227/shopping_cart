import React from 'react';
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom"; 
import { BrowserRouter } from 'react-router-dom';
import Home from '../components/Home';

describe('testing Home component', ()=>{
    it('renders correct heading', ()=>{
    render(
    <BrowserRouter>
        <Home />
    </BrowserRouter>
    )

       const header = screen.getByRole('heading') 

       expect(header.textContent).toBe('eBar Liquor Shop')

     
    })

    it('testing correct src for images', ()=>{
        render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>
            )

            const image1 = screen.getByAltText('cocktail 1')
            const image2 = screen.getByAltText('cocktail 2')
            const image3 = screen.getByAltText('cocktail 3')

            expect(image1.src).toMatch("https://www.thecocktaildb.com/images/media/drink/xtuyqv1472669026.jpg")
            expect(image2.src).toMatch("https://www.thecocktaildb.com/images/media/drink/wwpyvr1461919316.jpg")
            expect(image3.src).toMatch("https://www.thecocktaildb.com/images/media/drink/i9suxb1582474926.jpg")

    })



})