import React, { useState, useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import {Contexto} from "../../CartProvider";


export default function Item({ item }) {
  const {addItem}  = useContext(Contexto);
  const [cantidadAgregada, setCantidadAgregada]= useState(true);
  const [carritoItem, setCarritoItem]= useState(false);

  function onAdd(cantidad){
      setCarritoItem(true);
      setCantidadAgregada(false);
      addItem(item, cantidad);
  }
  return (
    <>
    
      
      <div className='funko-card'>
        <div className='funko-cardDos'>
          <img className='image-card' src={item.images}></img>
          <h1 className='tittle-card'>{item.Tittle}</h1>
          <h3 className='coleccion-card'>Coleccion: {item.Coleccion}</h3>
          <p className='precio-card'> Precio: AR$ {item.price}</p>
          <button className='button-detail'><Link className='button-detail-link' to={'/itemDetail/' + item.id}> Ver detalle </Link></button>
          {carritoItem 
                ? 
                <button className='button-ver-carrito'><Link className='button-ver-carrito-link' to={'/Cart'}> Ver Carrito </Link></button>
                :
          <ItemCount initial={1} stock={item.stock} onAdd={onAdd} />
          }
        </div>
      </div>
    </>
  )
}
