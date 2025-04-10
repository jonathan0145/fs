import React, { useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Carousel from '../components/home/Carousel';
import '../styles/home.css';

const Home = () => {
    // Asegurarse de que el carrusel se cargue correctamente
    useEffect(() => {
        console.log("Componente Home montado");
        // Verificar si el carrusel se está renderizando
        const carouselElement = document.querySelector('.carousel-container');
        if (carouselElement) {
            console.log("Carrusel encontrado en el DOM");
        } else {
            console.error("Carrusel no encontrado en el DOM");
        }
    }, []);

    return (
        <div className="home-container">
            {/* Carrusel */}
            <div className="carousel-wrapper" style={{ width: '100%', overflow: 'hidden',marginTop: '-24px' }}>
                <Carousel />
            </div>
            
            
            {/* Contenido principal */}
            <Container className="home-content">
                <Row className="mb-5">
                    <Col xs={12}>
                        <h1 className="home-title">Bienvenido a INMOTECH</h1>
                        <p className="home-subtitle">Sistema integral de gestión inmobiliaria</p>
                    </Col>
                </Row>
                
                {/* Tarjetas de características */}
                <Row className="features-row">
                    <Col xs={12} md={4} className="mb-4">
                        <Card className="feature-card">
                            <Card.Body>
                                <div className="feature-icon">
                                    <i className="fas fa-home"></i>
                                </div>
                                <Card.Title>Gestión de Propiedades</Card.Title>
                                <Card.Text>
                                    Administra todas tus propiedades desde un solo lugar. 
                                    Mantén un registro detallado de cada inmueble.
                                </Card.Text>
                                <Button variant="outline-primary" className="feature-btn">
                                    Ver propiedades
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    
                    <Col xs={12} md={4} className="mb-4">
                        <Card className="feature-card">
                            <Card.Body>
                                <div className="feature-icon">
                                    <i className="fas fa-users"></i>
                                </div>
                                <Card.Title>Gestión de Clientes</Card.Title>
                                <Card.Text>
                                    Mantén un registro completo de tus clientes y sus preferencias.
                                    Mejora la relación con tus clientes.
                                </Card.Text>
                                <Button variant="outline-primary" className="feature-btn">
                                    Ver clientes
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    
                    <Col xs={12} md={4} className="mb-4">
                        <Card className="feature-card">
                            <Card.Body>
                                <div className="feature-icon">
                                    <i className="fas fa-chart-line"></i>
                                </div>
                                <Card.Title>Reportes y Estadísticas</Card.Title>
                                <Card.Text>
                                    Obtén informes detallados y estadísticas para tomar mejores decisiones.
                                    Visualiza el rendimiento de tu negocio.
                                </Card.Text>
                                <Button variant="outline-primary" className="feature-btn">
                                    Ver reportes
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                
                {/* Sección de acción */}
                <Row className="action-section">
                    <Col xs={12} md={8} className="mx-auto text-center">
                        <h2 className="action-title">¿Listo para mejorar tu gestión inmobiliaria?</h2>
                        <p className="action-text">
                            INMOTECH te ofrece todas las herramientas necesarias para gestionar 
                            eficientemente tu negocio inmobiliario.
                        </p>
                        <Button variant="primary" size="lg" className="action-btn">
                            Comenzar ahora
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;