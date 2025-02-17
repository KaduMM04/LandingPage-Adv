import React, { useState } from "react";
import "./Cards.css";


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
      frontText: "Direito do Trabalho",
      backText: "Proteção dos direitos dos trabalhadores e empregadores.",
      backgroundImage: "/Imgs/CardsImgs/trabalhista.jpg",
    },
    {
      title: "Direito Civil",
      frontText: "Direito Civil",
      backText: "Soluções para contratos, família, usucapião, inventários, divórcios e outros casos cíveis.",
      backgroundImage: "/Imgs/CardsImgs/civil.jpg",
    },
    {
      title: "Direito Previdenciário",
      frontText: "Direito Previdenciário",
      backText: "Solucões Previdenciárias como aposentadorias, pensão por morte, auxílio doença e Bpc/Loas.",
      backgroundImage: "/Imgs/CardsImgs/prev.webp",
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
