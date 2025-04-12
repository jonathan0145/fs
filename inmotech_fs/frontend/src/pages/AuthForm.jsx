import React, { useState } from 'react';
<<<<<<< HEAD
import { Form, Button, Container, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import authService from '../services/authService';

const AuthForm = () => {
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(true);
    const [credentials, setCredentials] = useState({
        nombre: '',
        email: '',
        password: '',
        rol: 'admin'  // Por defecto para crear el primer admin
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (isLogin) {
                const response = await authService.login(credentials);
                if (response.usuario.rol === 'admin') {
                    navigate('/admin');
                } else {
                    navigate('/inicio');
                }
            } else {
                await authService.registro(credentials);
                setIsLogin(true);
                setError('Registro exitoso. Por favor inicia sesión.');
            }
        } catch (error) {
            setError(error.response?.data?.mensaje || 'Error en la operación');
        }
    };

    return (
        <Container className="mt-5">
            <h2>{isLogin ? 'Iniciar Sesión' : 'Registro'}</h2>
            {error && <Alert variant={error.includes('exitoso') ? 'success' : 'danger'}>{error}</Alert>}
            <Form onSubmit={handleSubmit}>
                {!isLogin && (
                    <Form.Group className="mb-3">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                            type="text"
                            name="nombre"
                            value={credentials.nombre}
                            onChange={handleChange}
                            required={!isLogin}
                        />
                    </Form.Group>
                )}

                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={credentials.email}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        value={credentials.password}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Button variant="primary" type="submit" className="me-2">
                    {isLogin ? 'Iniciar Sesión' : 'Registrarse'}
                </Button>
                <Button variant="link" onClick={() => setIsLogin(!isLogin)}>
                    {isLogin ? '¿No tienes cuenta? Regístrate' : '¿Ya tienes cuenta? Inicia sesión'}
                </Button>
            </Form>
        </Container>
    );
=======
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import '../styles/AuthForm.css';  // Asegúrate de que esta línea esté presente

const AuthForm = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    nombre: '',
    apellido: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      let response;
      if (isLogin) {
        response = await api.post('/auth/login', {
          email: formData.email,
          password: formData.password
        });
      } else {
        response = await api.post('/auth/register', formData);
      }

      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        // Configurar el token en los headers para futuras peticiones
        api.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
        navigate('/home');
      }
    } catch (err) {
      console.error('Error de autenticación:', err);
      setError(
        err.response?.data?.message || 
        'Error en la autenticación. Por favor, intente nuevamente.'
      );
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="auth-container">
      <div className="auth-form-container">
        <h2>{isLogin ? 'Iniciar Sesión' : 'Registro'}</h2>
        {error && <div className="error-message">{error}</div>}
        
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <>
              <div className="form-group">
                <input
                  type="text"
                  name="nombre"
                  placeholder="Nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="apellido"
                  placeholder="Apellido"
                  value={formData.apellido}
                  onChange={handleChange}
                  required
                />
              </div>
            </>
          )}
          
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="submit-btn">
            {isLogin ? 'Iniciar Sesión' : 'Registrarse'}
          </button>
        </form>

        <p className="toggle-form">
          {isLogin ? '¿No tienes cuenta?' : '¿Ya tienes cuenta?'}
          <button 
            className="toggle-btn"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? 'Regístrate' : 'Inicia Sesión'}
          </button>
        </p>
      </div>
    </div>
  );
>>>>>>> 4d5d530d25248b77ac1329c9afb0e3789ebe84a9
};

export default AuthForm;