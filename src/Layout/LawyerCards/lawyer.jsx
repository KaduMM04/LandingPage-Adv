import React from "react";
import './lawyer.css';

const Lawyers = () => {

    const lawyersData = [
        {
          name: "Dr. Dirlei Miranda",
          description: "CEO, Pós-Graduado em Direito do Trabalho pela UniDomBosco-SP, MBA - PADE pela Fundação Dom Cabral-MG, possui vasta experiência em gestão comercial e estratégias de negociações atuante na area civil e familia.",
          image:  "/Imgs/Dr.Dirlei.jpg",
        },
        {
          name: "Dra. Priscilla K. Mendes Miranda",
          description: "CEO, Pós-Graduada em Direito Previdenciario pela PUC-PR, atuou por 12 anos como tabeliã-substituta em cartorio de tabelionato e registro civil, possuindo grande experiencia nas questoes extras judiciais atuante na area civil e familia.",
          image: "/Imgs/DrPriscilla.jpg",
        },
    ];

    return( 
        <section className="Lawyer-section">
                 <div className="lawyers-carousel">
                 {lawyersData.map((lawyer, index) => (
                   <div className="lawyer-card" key={index}>
                     <img src={lawyer.image} alt={lawyer.name} />
                     <h3>{lawyer.name}</h3>
                     <p>{lawyer.description}</p>
                   </div>
                 ))}
               </div> 
        </section>
    );
};

export default Lawyers;