// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Card, Button } from 'react-bootstrap';
// import axios from 'axios'; // Importa axios

// function AuthForm() {
//     const [isLogin, setIsLogin] = useState(true);
//     const navigate = useNavigate();
//     const [username, setUsername] = useState(''); // Estado para el usuario
//     const [password, setPassword] = useState(''); // Estado para la contraseña

//     const handleSubmit = async (event) => { // Función asíncrona
//         event.preventDefault();

//         try {
//             const response = await axios.post(
//                 isLogin ? '/login' : '/register', // Ruta según el modo
//                 { username, password } // Datos del usuario
//             );

//             localStorage.setItem('token', response.data.token); // Guarda el token
//             navigate('/home'); // Redirige

//         } catch (error) {
//             console.error('Error de autenticación:', error);
//             // Muestra un mensaje de error al usuario
//         }
//     };

//     return (
//         <Card>
//             <Card.Body>
//                 <Card.Title>{isLogin ? 'Iniciar sesión' : 'Registrarse'}</Card.Title>
//                 <form onSubmit={handleSubmit}>
//                     <input
//                         type="text"
//                         placeholder="Usuario"
//                         value={username}
//                         onChange={(e) => setUsername(e.target.value)} // Actualiza el estado
//                     />
//                     <input
//                         type="password"
//                         placeholder="Contraseña"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)} // Actualiza el estado
//                     />
//                     <Button variant="primary" type="submit">
//                         {isLogin ? 'Iniciar sesión' : 'Registrarse'}
//                     </Button>
//                     <Card.Text className="mt-2">
//                         {isLogin ? '¿No tienes una cuenta?' : '¿Ya tienes una cuenta?'}
//                         <Button variant="link" onClick={() => setIsLogin(!isLogin)}>
//                             {isLogin ? 'Regístrate' : 'Inicia sesión'}
//                         </Button>
//                     </Card.Text>
//                 </form>
//             </Card.Body>
//         </Card>
//     );
// }

// export default AuthForm;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Button, Alert } from 'react-bootstrap';
import axios from 'axios';

function AuthForm() {
    const [isLogin, setIsLogin] = useState(true);
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null); // Estado para errores

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(null); // Limpia errores previos

        try {
            const response = await axios.post(
                isLogin ? 'http://localhost:3000/login' : 'http://localhost:3000/register', // Rutas completas
                { User_user: username, User_password: password } // Datos del usuario
            );

            localStorage.setItem('token', response.data.token);
            navigate('/home');
        } catch (error) {
            console.error('Error de autenticación:', error);
            setError('Credenciales inválidas. Inténtalo de nuevo.'); // Muestra mensaje de error
        }
    };

    return (
        <Card>
            <Card.Body>
                <Card.Title>{isLogin ? 'Iniciar sesión' : 'Registrarse'}</Card.Title>
                {error && <Alert variant="danger">{error}</Alert>} {/* Muestra el error */}
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Usuario"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button variant="primary" type="submit">
                        {isLogin ? 'Iniciar sesión' : 'Registrarse'}
                    </Button>
                    <Card.Text className="mt-2">
                        {isLogin ? '¿No tienes una cuenta?' : '¿Ya tienes una cuenta?'}
                        <Button variant="link" onClick={() => setIsLogin(!isLogin)}>
                            {isLogin ? 'Regístrate' : 'Inicia sesión'}
                        </Button>
                    </Card.Text>
                </form>
            </Card.Body>
        </Card>
    );
}

export default AuthForm;