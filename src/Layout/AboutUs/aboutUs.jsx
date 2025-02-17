import React from "react";
import "./aboutUs.css";

const AboutUs = () => {
  return (
    <section className="aboutUs-section">
      <div className="about-card">
        {/* Texto na esquerda */}
        <div className="about-text">
          <h2>Sobre Nós</h2>
          <p>
            Fundado em 2015, o escritório Mendes Miranda Advogados Associados tem em seu DNA o comprometimento com a excelência e a defesa dos direitos de seus clientes. Com atuação especializada nas áreas Previdenciária, Trabalhista e Cível, buscamos soluções jurídicas eficientes e personalizadas para cada caso.
          </p>
          <p>
            Nossa equipe é formada por advogados experientes, que prezam pela ética, transparência e dedicação em cada atendimento. Seja na busca por benefícios previdenciários, na defesa dos direitos do trabalhador ou na resolução de demandas cíveis, estamos preparados para representar seus interesses com profissionalismo.
          </p>

          <h2>Missão</h2>
          <p>
            Prover serviços jurídicos inovadores a todos os cidadãos que buscam equidade e justiça, transformando vidas e proporcionando acesso a direitos fundamentais.
          </p>

          <h2>Visão</h2>
          <p>
            Ser referência em inovação na resolução de conflitos, consolidando nossa marca como sinônimo de qualidade, eficiência e ética, tanto em processos judiciais quanto extrajudiciais.
          </p>

          <h2>Valores</h2>
          <ul>
            <li><strong>Excelência:</strong> Busca constante pelo melhor conhecimento técnico para entregar resultados eficazes com total transparência.</li>
            <li><strong>Integridade e Ética:</strong> Compromisso com a verdade, dignidade e boa-fé, sempre pautados pela transparência.</li>
            <li><strong>Empatia:</strong> Respeito e compromisso com cada cliente, tratando cada caso com a atenção que merece.</li>
          </ul>
        </div>

        {/* Imagem na direita */}
        <div className="about-image">
          <img src="/Imgs/AboutUS.jpg" alt="Sobre Nós"/>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
