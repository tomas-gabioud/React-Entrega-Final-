import React, { useState, useRef, useContext } from "react";
import firebase from "firebase";
import { getFirestore } from '../../Firebase/Firebase'
import { Contexto } from "../../CartProvider";
import { Link } from "react-router-dom"

export default function TestForm() {
    const { carrito, sumarPrecios, clear } = useContext(Contexto)
    const [orderId, setOrderId] = useState('');
    const [finalizarCompra, setFinalizarCompra] = useState(true);
    const [name, setName] = useState("");

    const nameRef = useRef();
    const addressRef = useRef();
    const cityRef = useRef();
    const stateRef = useRef();
    const emailRef = useRef();
    const mobileRef = useRef();

    function onNameChange(evt) {
        setName(evt.target.value);
    }

    function end() {
        setFinalizarCompra(false);
    }


    function handleClick(event) {
        event.preventDefault();
        const db = getFirestore();
        const orders = db.collection("Ventas");

        const miOrden = {
            buyer: {
                name: nameRef.current.value,
                address: addressRef.current.value,
                city: cityRef.current.value,
                state: stateRef.current.value,
                email: emailRef.current.value,
                mobile: mobileRef.current.value,
            },
            items: carrito,
            Total: sumarPrecios(),
            date: firebase.firestore.Timestamp.fromDate(new Date())
        }
        orders.add(miOrden)
            .then(({ id }) => {
                setOrderId(id);
            })
            .catch((err) => {
            });
        end();
    }
    return (

        <>
            {finalizarCompra ?

                <form className="formulario-de-compra" onSubmit={handleClick}>
                    <h3 className="formulario-text">INGRESA TUS DATOS:</h3>
                    <input className="formulario-input" type="text" name="name" onChange={evt => onNameChange(evt)} ref={nameRef} placeholder="Nombre y Apelllido" required />
                    <input className="formulario-input" type="number" name="mobile" ref={mobileRef} placeholder="Numero de Celular" required />
                    <input className="formulario-input" type="text" name="email" ref={emailRef} placeholder="Escribi tu Email" required />
                    <input className="formulario-input" type="text" name="state" ref={stateRef} placeholder="Provincia" required />
                    <input className="formulario-input" type="text" name="city" ref={cityRef} placeholder="Ciudad" required />
                    <input className="formulario-input" type="text" name="address" ref={addressRef} placeholder="Direccion" required />
                    <button className="formulario-button" type="submit"> Enviar Formulario </button>
                </form>
                :
                <>
                    <div className="orden">
                        {orderId && (<h1> Gracias {name} por tu compra, tu orden es :{orderId}</h1>)}
                    </div>
                    <div className="goHome">
                        <Link to="/"><button onClick={clear} >Volver a Comprar</button></Link>
                    </div>
                </>
            }
        </>
    );
}
