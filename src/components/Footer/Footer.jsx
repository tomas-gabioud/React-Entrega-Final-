import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons"



export default function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="footer-div">Siguenos en nuestras Redes Sociales:
                    <FontAwesomeIcon className="facebook"  icon={faFacebook}  />Facebook
                    <FontAwesomeIcon className="twitter" icon={faTwitter} /> Twitter
                    <FontAwesomeIcon className="whatsapp" icon={faWhatsapp} />WhatsApp
                    <FontAwesomeIcon className="instagram" icon={faInstagram} />Instagram
                </div>
                <div>
                    <p className="footer-p">
                        &copy;{new Date().getFullYear()} Funko Store App - All Rigths Reserved
                    </p>
                </div>
            </footer>
        </>
    )
}