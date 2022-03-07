import React, { useContext, useState } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount";
import { Contexto } from "../../CartProvider";


export default function ItemDetail({ item }) {
    const { addItem } = useContext(Contexto);
    const [cantidadAgregada, setCantidadAgregada] = useState(true);
    const [carrito, setCarrito] = useState(false);

    function onAdd(cantidad) {
        setCarrito(true);
        setCantidadAgregada(false);
        addItem(item, cantidad);
    }

    return (
        <>
            <div className="funko-detail">
                <div className="funko-detailDos">
                    <img className='image-card-detail' src={item.images} alt="" />
                    <h1 className='tittle-card-detail'> {item.Tittle}</h1>
                    <h3 className='coleccion-card-detail'> Coleccion: {item.Coleccion}</h3>
                    <p className="alto-card-detail">{item.alto} </p>
                    <p className="peso-card-detail">{item.peso} </p>
                    <p className='precio-card-detail'> Precio: AR$ {item.price}</p>
                    {carrito
                        ?
                        <button className="button-detail-cart"><Link to={'/Cart'}> Ver Carrito </Link></button>
                        :
                        <ItemCount initial={1} stock={item.stock} onAdd={onAdd} />
                    }
                </div>
            </div>
        </>
    )
}
