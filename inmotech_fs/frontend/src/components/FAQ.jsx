import React, { useState } from 'react';
import '../styles/FAQ.css';

const faqData = [
  {
    id: 1,
    question: '¿Que es INMOTECH?',
    answer: 'INMOTECH es una plataforma tecnológica especializada en el mercado inmobiliario...'
  },
  {
    id: 2,
    question: '¿En donde opera INMOTECH?',
    answer: 'INMOTECH opera en las principales ciudades de Colombia...'
  },
  {
    id: 3,
    question: '¿Por que confiar en INMOTECH?',
    answer: 'INMOTECH cuenta con un equipo de expertos en el mercado inmobiliario...'
  },
  {
    id: 4,
    question: '¿Donde funciona INMOTECH?',
    answer: 'INMOTECH funciona en toda Colombia a través de nuestra plataforma digital...'
  }
];

const FAQ = () => {
  const [activeId, setActiveId] = useState(null);

  const toggleAnswer = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="faq-section">
      <h2>RESOLVEMOS TUS DUDAS</h2>
      <div className="faq-container">
        {faqData.map((faq) => (
          <div key={faq.id} className="faq-item">
            <button 
              className={`faq-question ${activeId === faq.id ? 'active' : ''}`}
              onClick={() => toggleAnswer(faq.id)}
            >
              {faq.question}
            </button>
            <div className={`faq-answer ${activeId === faq.id ? 'active' : ''}`}>
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;