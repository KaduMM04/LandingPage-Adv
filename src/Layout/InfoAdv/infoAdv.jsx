import React from "react";
import "./infoAdv.css";
import { FaMapMarkerAlt, FaWhatsapp, FaInstagram } from "react-icons/fa";


function Info() {
    const handleRedirect = (url) => {
        window.open(url, " _blank");
    };

    return(
        <div className="info">
            <h2>Informações para Contato</h2>
            <div className="contact-item" onClick={() => handleRedirect("https://www.google.com/maps/place/Rua Rezala Simão, n° 1415, Santa Quitéria - Curitiba - PR.")}>
                <FaMapMarkerAlt className="icon" />
                <span>Rua Rezala Simão, n° 1415, sala 02 Sobreloja. Santa Quitéria - Curitiba - PR"</span>
            </div>
            <div className="contact-item" onClick={() => handleRedirect("https://wa.me/5542999130339")}>
                <FaWhatsapp className="icon" />
                <span>(42) 99913-0339</span>
            </div>
            <div className="contact-item" onClick={() => handleRedirect("https://www.instagram.com/mendesmiranda_adv.associados")}>
                <FaInstagram className="icon" />
                <span>@mendesmiranda_adv.associados</span>
            </div>
        </div>
    )
}

export default Info;