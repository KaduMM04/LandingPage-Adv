import React, { useState } from 'react';
import './App.css';

import Banner from './layout/banner/Banner.jsx';
import Cards from './layout/cards/Cards.jsx';
import Info from './layout/info/InfoAdv.jsx';
import AboutUs from './layout/aboutUs/AboutUs.jsx';
import Lawyers from './layout/lawyerCards/Lawyer.jsx';
import Form from './layout/form/Form.jsx';

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
