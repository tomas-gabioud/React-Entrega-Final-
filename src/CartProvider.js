import React, { createContext, useState } from "react";


export const Contexto = createContext();



export  function CartProvider({ children }) {
    const [carrito, setCarrito] = useState([]);

    const addItem = (producto, cantidad) => 
    {
        if (isInCart(producto.id)) {
            const indexItem = carrito.findIndex(index => index.item.id == producto.id)
            carrito[indexItem].cantidad = carrito[indexItem].cantidad + cantidad
            setCarrito([...carrito])
        } else {
            setCarrito([...carrito, { item: producto, cantidad: cantidad }])
        }
    }

    const isInCart = (id) => 
    {
        return (
            carrito.some(element => element.item.id == id)
        )
    }
    


    const removeItem = (id) => 
    {
        const nuevoCarrito = carrito.filter((item) => item.item.id != id)
        setCarrito(nuevoCarrito)
    }

    const clear = () => {
        setCarrito([]);
    }


    const sumarPrecios = () => { 
        return  carrito.reduce(((acc, cur) =>(acc + (cur.item.price * cur.cantidad))), 0) 

    } 
        
    const contarItems = () => carrito.reduce((acc, cur) => acc + cur.cantidad, 0) 

function up (id, number) {
    const newCart = carrito.map((e)=>{ 
        if (id === e.item.id){
            return {item: e.item, cantidad: number}
        }
        return e;
    })
    setCarrito(newCart) 
}



    return (
        <>
            <Contexto.Provider value={{ carrito, addItem, removeItem, clear,  isInCart, sumarPrecios, contarItems, up }}>
                {children}
            </Contexto.Provider>
        </>
    )
}