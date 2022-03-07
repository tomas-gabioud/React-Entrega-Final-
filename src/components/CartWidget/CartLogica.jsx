import React, { useContext, useEffect, useState } from "react";
import {  Link } from "react-router-dom"
import {Contexto} from "../../CartProvider";
import trash from "./trash.jpg"



export default function CartLogica() {
    const { contarItems, carrito, removeItem, sumarPrecios, clear, up } = useContext(Contexto);
    const [cant, setCant] = useState();
    const [precioTotal, setPrecioTotal]= useState();
    
    const incr = (number, id) =>{
        number >= 0 && up (id, number + 1 );
    };
    const decr = (number, id) =>{
        number > 1 && up (id, number - 1 ); 
    }


    useEffect(() => {
        setCant(contarItems())
    }, [contarItems]);

    useEffect(()=>{
    setPrecioTotal(sumarPrecios()) 
    },[carrito]);

    return (
        <>
        
            <h2 className="cart-text">Bienvenido al carrito de tienda funkos</h2>
            <div className='cart-item'> <p>Items en el carrito ({cant}) </p> </div>
            {carrito.length > 0 ?( <div className="cart-container">
                {carrito.map((producto) => {
                    return (
                        <>
                            <main className="card-main">
                                <div
                                    className="cart-image"> <img src={producto.item.images} alt="300px" />
                                </div>
                                <div className="change-flex-row">
                                    <h2
                                        className=" cart-tittle ">  {producto.item.Tittle}
                                    </h2>
                                    <h3 className='coleccion-card-detail-dos'> Coleccion: {producto.item.Coleccion}</h3>
                                    <h3 className="coleccion-card-alto">Altura: {producto.item.alto} </h3>
                                    <h3 className="coleccion-card-peso">Peso: {producto.item.peso} </h3>                              
                                    <div ><button  className='button-more-less' disabled ={producto.cantidad >= producto.item.stock}  onClick={()=> incr(producto.cantidad, producto.item.id, )}>+</button></div>
                                    <div  className='button-more-less'>  {producto.cantidad} </div>
                                    <div ><button button  className='button-more-less' onClick={()=> decr(producto.cantidad, producto.item.id)}>-</button></div>
                                </div>
                                <div className="cart-info">
                                    <h3 className="cart-price" > AR$ {producto.item.price} </h3>
                                    <h2 className="cart-cantidad-logic">
                                        Cantidad : {producto.cantidad}
                                    </h2>
                                    <button className="trash-image" onClick={() => { removeItem(producto.item.id) }}><img src={trash} alt=""  /></button>
                                    
                                </div>
                            </main>
                        </>
                    )
                })}
                
                <div className="div-price-total">
                <button className="clean-cart" onClick={() => { clear(setCant) }}>Limpiar Carrito</button>
                <h2 className="cart-price-total">Precio Total: {precioTotal}</h2>
                <div>
                <Link to={"/Formulario"}><button className="buy-cart"> Terminar Compra </button></Link>
                </div>
                </div>
                
            </div>):(
                <div className="return"><Link to={"/Productos"}>Selecciona tus productos</Link></div>
            )}
        </>
    )
}

