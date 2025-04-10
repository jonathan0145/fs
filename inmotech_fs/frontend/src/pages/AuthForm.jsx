import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Login from '../components/auth/Login';
import Register from '../components/auth/Register';
import logo from '../assets/images/logo/logo_200x200.png';
import '../styles/auth.css';

function AuthForm() {
    const [isLoginView, setIsLoginView] = useState(true);
    const navigate = useNavigate();

    const handleAuthSuccess = () => {
        navigate('/home');
    };

    return (
        <div className="auth-container">
            <Container>
                <Row className="justify-content-center">
                    <Col xs={12} sm={10} md={8} lg={6} xl={5}>
                        <div className="auth-logo">
                            <img 
                                src={logo}
                                alt="InmoTech Logo" 
                                className="mb-3"
                                style={{ maxWidth: '150px', height: 'auto' }}
                            />
                            <h1 className="platform-title">INMOTECH</h1>
                            <p className="platform-subtitle">Sistema de Gestión Inmobiliaria</p>
                        </div>
                        {isLoginView ? (
                            <Login 
                                onSuccess={handleAuthSuccess}
                                onSwitchView={() => setIsLoginView(false)}
                            />
                        ) : (
                            <Register 
                                onSuccess={handleAuthSuccess}
                                onSwitchView={() => setIsLoginView(true)}
                            />
                        )}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default AuthForm;