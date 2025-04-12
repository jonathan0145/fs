import React from 'react';
import testimonialImage from '../assets/images/tpersona4.webp';
import '../styles/Testimonials.css';

const testimonialData = [
  {
    id: 1,
    name: 'Felipe y Natalia',
    image: testimonialImage,
    text: '"Calificamos a Habi con 10/10 por la tranquilidad, y eficiencia del proceso, nos hicieron sentir como parte de una familia al acompañarnos en cada paso"'
  },
  {
    id: 2,
    name: 'Felipe y Natalia',
    image: testimonialImage,
    text: '"Calificamos a Habi con 10/10 por la tranquilidad, y eficiencia del proceso, nos hicieron sentir como parte de una familia al acompañarnos en cada paso"'
  },
  {
    id: 3,
    name: 'Felipe y Natalia',
    image: testimonialImage,
    text: '"Calificamos a Habi con 10/10 por la tranquilidad, y eficiencia del proceso, nos hicieron sentir como parte de una familia al acompañarnos en cada paso"'
  },
  {
    id: 4,
    name: 'Felipe y Natalia',
    image: testimonialImage,
    text: '"Calificamos a Habi con 10/10 por la tranquilidad, y eficiencia del proceso, nos hicieron sentir como parte de una familia al acompañarnos en cada paso"'
  },
  {
    id: 5,
    name: 'Felipe y Natalia',
    image: testimonialImage,
    text: '"Calificamos a Habi con 10/10 por la tranquilidad, y eficiencia del proceso, nos hicieron sentir como parte de una familia al acompañarnos en cada paso"'
  },
  {
    id: 6,
    name: 'Felipe y Natalia',
    image: testimonialImage,
    text: '"Calificamos a Habi con 10/10 por la tranquilidad, y eficiencia del proceso, nos hicieron sentir como parte de una familia al acompañarnos en cada paso"'
  },
  {
    id: 7,
    name: 'Felipe y Natalia',
    image: testimonialImage,
    text: '"Calificamos a Habi con 10/10 por la tranquilidad, y eficiencia del proceso, nos hicieron sentir como parte de una familia al acompañarnos en cada paso"'
  },
  {
    id: 8,
    name: 'Felipe y Natalia',
    image: testimonialImage,
    text: '"Calificamos a Habi con 10/10 por la tranquilidad, y eficiencia del proceso, nos hicieron sentir como parte de una familia al acompañarnos en cada paso"'
  },
  {
    id: 9,
    name: 'Felipe y Natalia',
    image: testimonialImage,
    text: '"Calificamos a Habi con 10/10 por la tranquilidad, y eficiencia del proceso, nos hicieron sentir como parte de una familia al acompañarnos en cada paso"'
  }
];

const Testimonials = () => {
  return (
    <div className="testimonials-section">
      <h2>TESTIMONIOS</h2>
      <p className="testimonials-subtitle">
        Testimonios INMOTECH de personas que decidieron confiar y vendernos su vivienda
      </p>
      
      <div className="testimonials-grid">
        {testimonialData.map(testimonial => (
          <div key={testimonial.id} className="testimonial-card">
            <img 
              src={testimonial.image} 
              alt={testimonial.name} 
              className="testimonial-image" 
            />
            <div className="testimonial-content">
              <h3 className="testimonial-name">{testimonial.name}</h3>
              <p className="testimonial-text">{testimonial.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;