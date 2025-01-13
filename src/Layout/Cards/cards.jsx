import React, { useState } from "react";
import "./cards.css";

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
    },
    {
      title: "Direito Civil",
      frontText: "Direito Civil",
      backText: "Soluções para contratos, família e outros casos civis.",
    },
    {
      title: "Direito Previdenciário",
      frontText: "Direito Previdenciário",
      backText: "Questões previdenciárias como aposentadoria, pensões e auxílios.",
    },
  ];

  return (
    <section className="cards-section">
      <h2>Nossas Áreas de Atuação</h2>
      <div className="cards">
        {cardsData.map((area, index) => (
          <div
            key={index}
            className={`card ${flippedCards[index] ? "flipped" : ""}`}
            onClick={() => toggleFlip(index)}
          >
            <div className="card-front">
              <h3>{area.frontText}</h3>
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
