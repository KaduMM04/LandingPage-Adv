import React, { useState } from "react";
import "./cards.css";


import TrabalhistaImg from "C:/temp/LandingPages/mendesmirandaadv/src/Layout/Imgs/CardsImgs/trabalhista.jpg";
import CivilImg from "C:/temp/LandingPages/mendesmirandaadv/src/Layout/Imgs/CardsImgs/civil.jpg";
import PrevImg from "C:/temp/LandingPages/mendesmirandaadv/src/Layout/Imgs/CardsImgs/prev.webp";

const Cards = () => {
  const [flippedCards, setFlippedCards] = useState({});

  const toggleFlip = (index) => {
    setFlippedCards((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const cardsData = [
    {
      title: "Direito Trabalhista",
      frontText: "Direito Trabalhista",
      backText: "Proteção dos direitos dos trabalhadores e empregadores.",
      backgroundImage: TrabalhistaImg,
    },
    {
      title: "Direito Civil",
      frontText: "Direito Civil",
      backText: "Soluções para contratos, família, usucapião, inventários, divórcios e outros casos cíveis.",
      backgroundImage: CivilImg,
    },
    {
      title: "Direito Previdenciário",
      frontText: "Direito Previdenciário",
      backText: "Solucões Previdenciárias como aposentadorias, pensão por morte, auxílio doença e Bpc/Loas.",
      backgroundImage: PrevImg,
    },
  ];

  return (
    <section className="cards-section">
      <div className="cards">
        {cardsData.map((area, index) => (
          <div
            key={index}
            className={`card ${flippedCards[index] ? "flipped" : ""}`}
            onClick={() => toggleFlip(index)}
            style={{
              backgroundImage: `url(${area.backgroundImage})`,
            }}
          >
            <div className="card-front">
              <h3>{area.frontText}</h3>
              <div className="notification">Clique para mais detalhes</div>
            </div>
            <div className="card-back">
              <p>{area.backText}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cards;
