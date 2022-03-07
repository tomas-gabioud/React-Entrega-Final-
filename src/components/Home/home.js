import React from 'react'
import Hulk from "./img/HulkLoki.jpg"
import Harry from "./img/harry potter.jpg"
import StarWars from "./img/Star Wars.jpg"
import maarvel from "./img/maarvel.jpg"
import { Link } from "react-router-dom"
import basilisco from "./img/basilisco.jpg"
import drake from "./img/drake.jpg"
import fenix from "./img/Fenix.jpg"
import hulkBuster from "./img/HulkBuster.jpg"



function home() {
    return (
        <>
        <main className='container-home'>
        <div className='div-homeUno'><h1 className='text-home'>Bienvenidos a tienda Funko</h1>
        <h3 className='div-homeHTres'> ¡Busca tus Funkos favoritos en nuestra tienda y colecciónalos todos para completar tu elenco de personajes favoritos! </h3></div>
        <Link className='div-homeDos' to="/Productos"><div className='div-homeDos'><button className='button-home'>Ir a Productos</button></div></Link>
        <Link className='image-home' to="/Productos"  ><img className='image-home' src={Hulk}></img></Link>
        </main>
        <section className='section-home'>
            <div className='section-div-home'>
                <ul className='ul-home'>
                    <Link className='marcas-home' to="/Productos/Marvel"><li ><img src={maarvel} ></img></li></Link>
                    <Link className='marcas-home' to="/Productos/Star Wars"><li><img src={StarWars}></img></li></Link>
                    <Link className='marcas-home' to="/Productos/Harry Potter"><li><img src={Harry}></img></li></Link>
                </ul>
            </div>
        </section>
        <section className='home-section'>
            <div className='home-section-div'>
            <div className='basilisco'><img src={basilisco} ></img></div>
            <div className='drake'><img src={drake}  ></img></div>
            <div className='fenix'><img src={fenix}  ></img></div>
            <div className='hulk'><img src={hulkBuster}  ></img></div>
            </div>
        </section>
        </>
    )
}

export default home