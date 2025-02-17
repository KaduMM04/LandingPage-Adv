import React, { useState } from 'react';
import './App.css';

import Banner from './Layout/Banner/Banner.jsx';
import Cards from './Layout/Cards/Cards.jsx';
import Info from './Layout/Info/InfoAdv.jsx';
import AboutUs from './Layout/AboutUs/AboutUs.jsx';
import Lawyers from './Layout/LawyerCards/Lawyer.jsx';
import Form from './Layout/Form/Form.jsx';

function App() {
  const [activeTab, setActiveTab] = useState("about");

  const renderContent = () => {
    switch (activeTab) {
      case "about":
        return <AboutUs />;
      case "lawyers":
        return <Lawyers />;
      case "areas":
        return <Cards />;
      default:
        return <AboutUs />;
    }
  };
  return (
    <div className="landing-page">

      {/* Banner */}
      <Banner/>

      <div className="tab-container">
        {/* Botões centrais */}
        <div className="tab-buttons">
          <button
            className={`tab-button ${activeTab === "about" ? "active" : ""}`}
            onClick={() => setActiveTab("about")}
          >
            Sobre Nós
          </button>
          <button
            className={`tab-button ${activeTab === "lawyers" ? "active" : ""}`}
            onClick={() => setActiveTab("lawyers")}
          >
            Advogados
          </button>
          <button
            className={`tab-button ${activeTab === "areas" ? "active" : ""}`}
            onClick={() => setActiveTab("areas")}
          >
            Áreas de Atuação
          </button>
        </div>

      {/* Conteúdo */}
      <div className="tab-content">{renderContent()}</div>
    </div>
      
     <Info/>
       
     <Form/>
      <footer className='footer'>
          <p>&copy; 2024 Mendes Miranda Advogados e Associados - Todos os direitos reservados.</p>
        </footer>
      </div>
  )
}

export default App;
