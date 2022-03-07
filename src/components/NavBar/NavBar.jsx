import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom"

export default function NavBar() {
    return (
        <div className="NavBar">
            <ul>
                <li><Link to={"/"}>Home</Link> </li>
                <li><Link to={"/Productos"}>Productos</Link></li>
                <li><Link to={"/Productos/Marvel"}>Marvel</Link></li>
                <li><Link to={"/Productos/Harry Potter"}> Harry Potter</Link></li>
                <li><Link to={"/Productos/Star Wars"}> Star Wars</Link></li>
            </ul>
            <CartWidget />
        </div>
    );
}