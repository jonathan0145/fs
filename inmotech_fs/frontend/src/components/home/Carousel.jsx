import React, { useState } from 'react';
import { Carousel as BootstrapCarousel } from 'react-bootstrap';
import '../../styles/carousel.css';

const Carousel = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    // Datos del carrusel con imágenes de placeholder
    const carouselItems = [
        {
            id: 1,
            title: "Bienvenido a INMOTECH",
            description: "Sistema integral de gestión inmobiliaria",
            image: "https://via.placeholder.com/1200x400/007bff/ffffff?text=INMOTECH+Slide+1"
        },
        {
            id: 2,
            title: "Gestiona tus propiedades",
            description: "Administra todas tus propiedades desde un solo lugar",
            image: "https://via.placeholder.com/1200x400/28a745/ffffff?text=INMOTECH+Slide+2"
        },
        {
            id: 3,
            title: "Control total de tus clientes",
            description: "Mantén un registro detallado de todos tus clientes",
            image: "https://via.placeholder.com/1200x400/dc3545/ffffff?text=INMOTECH+Slide+3"
        }
    ];

    return (
        <div className="carousel-container">
            <BootstrapCarousel 
                activeIndex={index} 
                onSelect={handleSelect}
                interval={5000}
                pause="hover"
                className="home-carousel"
            >
                {carouselItems.map((item) => (
                    <BootstrapCarousel.Item key={item.id}>
                        <div 
                            className="carousel-slide"
                            style={{ 
                                backgroundImage: `url(${item.image})`,
                                backgroundColor: '#007bff' // Color de fondo por defecto
                            }}
                        >
                            <div className="carousel-content">
                                <h2 className="carousel-title">{item.title}</h2>
                                <p className="carousel-description">{item.description}</p>
                            </div>
                        </div>
                    </BootstrapCarousel.Item>
                ))}
            </BootstrapCarousel>
        </div>
    );
};

export default Carousel; 