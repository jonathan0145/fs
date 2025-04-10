import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaTools, FaNewspaper, FaEnvelope } from 'react-icons/fa';
import logo from '../assets/images/logo/logo_200x200.png';
import UserManager from './components/users/UserManager';

const Navigation = () => {
    return (
        <Navbar style={{ backgroundColor: '#122C4F' }} variant="dark" expand="lg" className="mb-4">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img
                        src={logo}
                        width="40"
                        height="40"
                        className="d-inline-block align-top me-2"
                        alt="InmoTech Logo"
                        style={{ marginTop: '-5px' }}
                    />
                    InmoTech
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/" className="d-flex align-items-center" style={{ color: '#FBF9E4' }}>
                            <FaHome className="me-1" /> Inicio
                        </Nav.Link>
                        <Nav.Link as={Link} to="/about" className="d-flex align-items-center" style={{ color: '#FBF9E4' }}>
                            <FaInfoCircle className="me-1" /> Sobre Nosotros
                        </Nav.Link>
                        <Nav.Link as={Link} to="/services" className="d-flex align-items-center" style={{ color: '#FBF9E4' }}>
                            <FaTools className="me-1" /> Servicios
                        </Nav.Link>
                        <Nav.Link as={Link} to="/publication-tools" className="d-flex align-items-center" style={{ color: '#FBF9E4' }}>
                            <FaNewspaper className="me-1" /> Herramientas de Publicación
                        </Nav.Link>
                        <Nav.Link as={Link} to="/contact" className="d-flex align-items-center" style={{ color: '#FBF9E4' }}>
                            <FaEnvelope className="me-1" /> Contacto
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation; 