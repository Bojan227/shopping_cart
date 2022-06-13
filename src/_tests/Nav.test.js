import React from 'react';
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom"; 
import { BrowserRouter } from 'react-router-dom';
import Nav from '../components/Nav';


describe('testing Nav bar', ()=>{
    it('if length of shopping by goes up by 1', ()=>{    
        render(
            <BrowserRouter>
                <Nav bagItems={['1', '2']}/>
            </BrowserRouter>
        )

        expect(screen.getByTestId('count-items').textContent).toMatch('2')
    })

    it('if Nav section renders correctly', ()=>{    
       render(
            <BrowserRouter>
                <Nav bagItems={['1', '2']}/>
            </BrowserRouter>
        )

        expect(<Nav />).toMatchSnapshot()
    })
    



})