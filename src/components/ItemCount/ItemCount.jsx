import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';



export default function ItemCount({initial, stock ,  onAdd}) {
    const [contador, setContador] = useState (initial)
    
    return(
    <>
        <button className='button-more-less' disabled ={contador >= stock} onClick={()=> setContador(contador + 1)} > + </button>
        <p className='button-amount'> {contador} </p>
        <button className='button-more-less' disabled ={contador <= initial} onClick={()=> setContador(contador - 1)} > - </button>
        <button className='button-add-cart' onClick={()=> onAdd(contador)} > agregar al carrito  </button>
        
    </>
    )
}