import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import NavBar from "./components/NavBar/NavBar"
import Home from "./components/Home/home"
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartLogica from './components/CartWidget/CartLogica';
import Footer from './components/Footer/Footer';
import  {CartProvider}  from "./CartProvider"
import Form from './components/Form/Form';

function App() {

  return (
    <>
      <CartProvider>
        <BrowserRouter>

          {/* Nav Bar WebPage */}
          <NavBar />

          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>


            <Route exact path="/Productos"> 
              <ItemListContainer/>
            </Route>

            <Route  path="/Productos/:ColeccionId">
              <ItemListContainer />
            </Route>

            <Route path="/itemDetail/:itemDetailId">
              <ItemDetailContainer />
            </Route>


            <Route exact path="/cart">
              <CartLogica />
            </Route>
            
            <Route exact path="/Formulario">
            <Form   />
            </Route>

          </Switch>
          
          <Footer />

        </BrowserRouter>
        </CartProvider>
      </>
      );
}

      export default App;
{/* los warning estan diciendo que los defino pero que no los use todavia */}