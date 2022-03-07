import React, { useContext, useEffect, useState } from 'react'
import Cart from "./cart.jpg"
import { Link} from "react-router-dom"
import {Contexto} from "../../CartProvider";


const CartWidget = ({}) => {
    const {contarItems} = useContext (Contexto); 
    const [cant, setCant] = useState ();
    useEffect(()=>{
        setCant(contarItems())
    },[contarItems]) 
    
    return (
        <div className='cart' >
            <Link to="/Cart"  ><img  src={Cart}  alt=''/> <div className='carrito'> {cant} </div> </Link>
        </div>
    )
}


export default CartWidget

