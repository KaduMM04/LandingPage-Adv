import React, { useState } from 'react';
import "./Form.css";

const Form = () => {

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        cep: '',
        caseDescription: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value});
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        const { name, phone, email, cep, caseDescription} = formData;
    
        if ( !name || !phone || !email  || !cep || !caseDescription) {
          alert("Por favor, preencha todos os campos.");
          return;
        }
    
        const message = `Olá, meu nome é ${name}.\n` +
                        `Telefone: ${phone}\n` +
                        `Email: ${email}\n` +
                        `CEP: ${cep}\n` +
                        `Descrição do caso: ${caseDescription}`;
            
        const whatsappNumber = '5542999130339';
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;  
        
        // Redireciona para o WhatsApp
        window.open(whatsappURL, '_blank');
      };
      
    return (
        <section className="form-section">
        <h2>Entre em contato conosco</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type='text'
              name='name'
              value={formData.name}
              onChange={handleChange}
              placeholder="Seu nome completo"
            />
          </label>
          <label>
            Telefone:
            <input
              type='tel'
              name='phone'
              value={formData.phone}
              onChange={handleChange}
              placeholder="Seu telefone"
            />
          </label>
          <label>
            Email:
            <input
              type='text'
              name='email'
              value={formData.email}
              onChange={handleChange}
              placeholder="Seu email"
            />
          </label>
          <label>
           CEP:
            <input
              type='text'
              name='cep'
              value={formData.cep}
              onChange={handleChange}
              placeholder="Seu CEP"
            />
          </label>
          <label>
            Descrição do Caso:
            <textarea
              name="caseDescription"
              value={formData.caseDescription}
              onChange={handleChange}
              placeholder="Descreva seu caso"
            />
          </label>
          <button type="submit">Enviar via WhatsApp</button>
        </form>
      </section>
    );
};

export default Form;