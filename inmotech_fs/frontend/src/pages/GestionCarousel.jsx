import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Form, Modal, Alert } from 'react-bootstrap';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';
import '../styles/gestionCarousel.css';

const GestionCarousel = () => {
    const [slides, setSlides] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [currentSlide, setCurrentSlide] = useState({
        id: null,
        title: '',
        description: '',
        image: ''
    });
    const [isEditing, setIsEditing] = useState(false);
    const [alert, setAlert] = useState({ show: false, message: '', variant: 'success' });

    // Cargar diapositivas desde localStorage al iniciar
    useEffect(() => {
        const savedSlides = JSON.parse(localStorage.getItem('carouselSlides')) || [];
        setSlides(savedSlides);
    }, []);

    // Guardar diapositivas en localStorage cuando cambien
    useEffect(() => {
        localStorage.setItem('carouselSlides', JSON.stringify(slides));
    }, [slides]);

    const handleOpenModal = (slide = null) => {
        if (slide) {
            setCurrentSlide(slide);
            setIsEditing(true);
        } else {
            setCurrentSlide({
                id: Date.now(), // Usar timestamp como ID
                title: '',
                description: '',
                image: ''
            });
            setIsEditing(false);
        }
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setCurrentSlide({
            id: null,
            title: '',
            description: '',
            image: ''
        });
        setIsEditing(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCurrentSlide(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSaveSlide = () => {
        // Validar campos
        if (!currentSlide.title || !currentSlide.description || !currentSlide.image) {
            setAlert({
                show: true,
                message: 'Todos los campos son obligatorios',
                variant: 'danger'
            });
            return;
        }

        if (isEditing) {
            // Actualizar diapositiva existente
            setSlides(prevSlides => 
                prevSlides.map(slide => 
                    slide.id === currentSlide.id ? currentSlide : slide
                )
            );
            setAlert({
                show: true,
                message: 'Diapositiva actualizada correctamente',
                variant: 'success'
            });
        } else {
            // Agregar nueva diapositiva
            setSlides(prevSlides => [...prevSlides, currentSlide]);
            setAlert({
                show: true,
                message: 'Diapositiva agregada correctamente',
                variant: 'success'
            });
        }

        handleCloseModal();
    };

    const handleDeleteSlide = (id) => {
        if (window.confirm('¿Estás seguro de que deseas eliminar esta diapositiva?')) {
            setSlides(prevSlides => prevSlides.filter(slide => slide.id !== id));
            setAlert({
                show: true,
                message: 'Diapositiva eliminada correctamente',
                variant: 'success'
            });
        }
    };

    return (
        <div className="gestion-carousel-container">
            <Container>
                <Row className="mb-4">
                    <Col>
                        <h1 className="gestion-title">Gestión del Carrusel</h1>
                        <p className="gestion-subtitle">
                            Administra las diapositivas que se muestran en la página principal
                        </p>
                    </Col>
                </Row>

                {alert.show && (
                    <Alert 
                        variant={alert.variant} 
                        onClose={() => setAlert({...alert, show: false})} 
                        dismissible
                        className="mb-4"
                    >
                        {alert.message}
                    </Alert>
                )}

                <Row className="mb-4">
                    <Col>
                        <Button 
                            variant="primary" 
                            className="add-slide-btn"
                            onClick={() => handleOpenModal()}
                        >
                            <FaPlus className="me-2" />
                            Agregar Nueva Diapositiva
                        </Button>
                    </Col>
                </Row>

                <Row>
                    {slides.length === 0 ? (
                        <Col>
                            <Card className="empty-state-card">
                                <Card.Body className="text-center">
                                    <h3>No hay diapositivas</h3>
                                    <p>Agrega tu primera diapositiva para el carrusel</p>
                                    <Button 
                                        variant="outline-primary" 
                                        onClick={() => handleOpenModal()}
                                    >
                                        <FaPlus className="me-2" />
                                        Agregar Diapositiva
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ) : (
                        slides.map(slide => (
                            <Col xs={12} md={6} lg={4} key={slide.id} className="mb-4">
                                <Card className="slide-card">
                                    <div 
                                        className="slide-preview" 
                                        style={{ backgroundImage: `url(${slide.image})` }}
                                    />
                                    <Card.Body>
                                        <Card.Title>{slide.title}</Card.Title>
                                        <Card.Text>{slide.description}</Card.Text>
                                        <div className="slide-actions">
                                            <Button 
                                                variant="outline-primary" 
                                                size="sm"
                                                onClick={() => handleOpenModal(slide)}
                                            >
                                                <FaEdit className="me-1" />
                                                Editar
                                            </Button>
                                            <Button 
                                                variant="outline-danger" 
                                                size="sm"
                                                onClick={() => handleDeleteSlide(slide.id)}
                                            >
                                                <FaTrash className="me-1" />
                                                Eliminar
                                            </Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    )}
                </Row>
            </Container>

            {/* Modal para agregar/editar diapositiva */}
            <Modal show={showModal} onHide={handleCloseModal} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>
                        {isEditing ? 'Editar Diapositiva' : 'Agregar Nueva Diapositiva'}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Título</Form.Label>
                            <Form.Control
                                type="text"
                                name="title"
                                value={currentSlide.title}
                                onChange={handleInputChange}
                                placeholder="Ingresa el título de la diapositiva"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Descripción</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                name="description"
                                value={currentSlide.description}
                                onChange={handleInputChange}
                                placeholder="Ingresa la descripción de la diapositiva"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>URL de la Imagen</Form.Label>
                            <Form.Control
                                type="text"
                                name="image"
                                value={currentSlide.image}
                                onChange={handleInputChange}
                                placeholder="Ingresa la URL de la imagen"
                            />
                        </Form.Group>
                        {currentSlide.image && (
                            <div className="image-preview-container mb-3">
                                <p className="mb-2">Vista previa:</p>
                                <div 
                                    className="image-preview" 
                                    style={{ backgroundImage: `url(${currentSlide.image})` }}
                                />
                            </div>
                        )}
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={handleSaveSlide}>
                        {isEditing ? 'Guardar Cambios' : 'Agregar Diapositiva'}
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default GestionCarousel;