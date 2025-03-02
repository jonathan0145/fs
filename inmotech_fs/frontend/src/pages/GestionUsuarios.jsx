// import React, { useState, useEffect } from 'react';
// import { Table, Button, Modal, Form, Alert, Spinner } from 'react-bootstrap';
// import axios from 'axios';

// function GestionUsuarios() {
//     const [usuarios, setUsuarios] = useState([]);
//     const [modalShow, setModalShow] = useState(false);
//     const [modalUsuario, setModalUsuario] = useState({});
//     const [modoEdicion, setModoEdicion] = useState(false);
//     const [error, setError] = useState(null);
//     const [loading, setLoading] = useState(false);
//     const [successMessage, setSuccessMessage] = useState(null);
//     const [verModalShow, setVerModalShow] = useState(false);
//     const [usuarioDetalle, setUsuarioDetalle] = useState({});

//     useEffect(() => {
//         cargarUsuarios();
//     }, []);

//     const cargarUsuarios = async () => {
//         setLoading(true);
//         setError(null);
//         try {
//             const response = await axios.get('http://localhost:3000/usuarios');
//             setUsuarios(response.data);
//             setLoading(false);
//         } catch (error) {
//             setError(error.message || 'Error al cargar usuarios');
//             console.error('Error al cargar usuarios:', error);
//             setLoading(false);
//         }
//     };

//     const abrirModal = (usuario = {}) => {
//         setModalUsuario(usuario);
//         setModoEdicion(!!usuario.id);
//         setModalShow(true);
//         setError(null);
//         setSuccessMessage(null);
//     };

//     const cerrarModal = () => {
//         setModalShow(false);
//         setError(null);
//         setSuccessMessage(null);
//     };

//     const guardarUsuario = async (usuario) => {
//         setLoading(true);
//         setError(null);
//         setSuccessMessage(null);
//         try {
//             if (modoEdicion) {
//                 await axios.put(`http://localhost:3000/usuarios/${usuario.id}`, usuario);
//                 setSuccessMessage('Usuario actualizado con éxito');
//             } else {
//                 await axios.post('http://localhost:3000/usuarios', usuario);
//                 setSuccessMessage('Usuario creado con éxito');
//             }
//             cargarUsuarios();
//             cerrarModal();
//             setLoading(false);
//         } catch (error) {
//             setError(error.message || 'Error al guardar usuario');
//             console.error('Error al guardar usuario:', error);
//             setLoading(false);
//         }
//     };

//     const eliminarUsuario = async (id) => {
//         setLoading(true);
//         setError(null);
//         setSuccessMessage(null);
//         try {
//             await axios.delete(`http://localhost:3000/usuarios/${id}`);
//             cargarUsuarios();
//             setSuccessMessage('Usuario eliminado con éxito');
//             setLoading(false);
//         } catch (error) {
//             setError(error.message || 'Error al eliminar usuario');
//             console.error('Error al eliminar usuario:', error);
//             setLoading(false);
//         }
//     };

//     const abrirVerModal = (usuario) => {
//         setUsuarioDetalle(usuario);
//         setVerModalShow(true);
//     };

//     const cerrarVerModal = () => {
//         setVerModalShow(false);
//     };

//     return (
//         <div className="container">
//             <h1>Gestión de Usuarios</h1>
//             {error && <Alert variant="danger">{error}</Alert>}
//             {successMessage && <Alert variant="success">{successMessage}</Alert>}
//             <Button variant="primary" onClick={() => abrirModal()}>Crear Usuario</Button>
//             {loading ? (
//                 <div className="text-center">
//                     <Spinner animation="border" role="status">
//                         <span className="visually-hidden">Cargando...</span>
//                     </Spinner>
//                 </div>
//             ) : (
//                 <Table striped bordered hover responsive>
//                     <thead>
//                         <tr>
//                             <th>ID</th>
//                             <th>Usuario</th>
//                             <th>Acciones</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {usuarios.map(usuario => (
//                             <tr key={usuario.id}>
//                                 <td>{usuario.id}</td>
//                                 <td>{usuario.id}</td>
//                                 <td>
//                                     <Button variant="info" onClick={() => abrirModal(usuario)}>Editar</Button>{' '}
//                                     <Button variant="success" onClick={() => abrirVerModal(usuario)}>Ver</Button>{' '}
//                                     <Button variant="danger" onClick={() => eliminarUsuario(usuario.id)}>Eliminar</Button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </Table>
//             )}

//             <Modal show={modalShow} onHide={cerrarModal}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>{modoEdicion ? 'Editar Usuario' : 'Crear Usuario'}</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <Form onSubmit={(e) => {
//                         e.preventDefault();
//                         guardarUsuario(modalUsuario);
//                     }}>
//                         <Button variant="primary" type="submit">Guardar</Button>
//                     </Form>
//                 </Modal.Body>
//             </Modal>

//             <Modal show={verModalShow} onHide={cerrarVerModal}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>Detalles de Usuario</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <p><strong>ID:</strong> {usuarioDetalle.id}</p>
//                     <p><strong>Usuario:</strong> {usuarioDetalle.id}</p>
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Button variant="secondary" onClick={cerrarVerModal}>Cerrar</Button>
//                 </Modal.Footer>
//             </Modal>
//         </div>
//     );
// }

// export default GestionUsuarios;

// import React, { useState, useEffect } from 'react';
// import { Table, Button, Modal, Form, Alert, Spinner } from 'react-bootstrap';
// import axios from 'axios';

// function GestionUsuarios() {
//     const [usuarios, setUsuarios] = useState([]);
//     const [modalShow, setModalShow] = useState(false);
//     const [usuarioEditar, setUsuarioEditar] = useState(null);
//     const [usuarioCrear, setUsuarioCrear] = useState({ User_user: '', User_password: '' });
//     const [modoEdicion, setModoEdicion] = useState(false);
//     const [error, setError] = useState(null);
//     const [loading, setLoading] = useState(false);
//     const [successMessage, setSuccessMessage] = useState(null);
//     const [verModalShow, setVerModalShow] = useState(false);
//     const [usuarioDetalle, setUsuarioDetalle] = useState({});

//     useEffect(() => {
//         cargarUsuarios();
//     }, []);

//     const cargarUsuarios = async () => {
//         setLoading(true);
//         setError(null);
//         try {
//             const response = await axios.get(process.env.REACT_APP_API_BASE_URL);
//             setUsuarios(response.data);
//             console.log(response.data);////////////////////////////////////////////////
//             setLoading(false);
//         } catch (error) {
//             setError(error.message || 'Error al cargar usuarios');
//             console.error('Error al cargar usuarios:', error);
//             setLoading(false);
//         }
//     };

//     const abrirModal = (usuario = null) => {
//         if (usuario) {
//             setUsuarioEditar(usuario);
//             setUsuarioCrear({ User_user: usuario.User_user, User_password: '' });
//             setModoEdicion(true);
//         } else {
//             setUsuarioCrear({ User_user: '', User_password: '' });
//             setModoEdicion(false);
//         }
//         setModalShow(true);
//         setError(null);
//         setSuccessMessage(null);
//     };

//     const cerrarModal = () => {
//         setModalShow(false);
//         setError(null);
//         setSuccessMessage(null);
//     };

//     const guardarUsuario = async () => {
//         setLoading(true);
//         setError(null);
//         setSuccessMessage(null);
//         try {
//             if (modoEdicion) {
//                 await axios.put(`${process.env.REACT_APP_API_BASE_URL}/${usuarioEditar.id}`, usuarioCrear);
//                 setSuccessMessage('Usuario actualizado con éxito');
//             } else {
//                 await axios.post(process.env.REACT_APP_API_BASE_URL, usuarioCrear);
//                 setSuccessMessage('Usuario creado con éxito');
//             }
//             cargarUsuarios();
//             cerrarModal();
//             setLoading(false);
//         } catch (error) {
//             setError(error.message || 'Error al guardar usuario');
//             console.error('Error al guardar usuario:', error);
//             setLoading(false);
//         }
//     };

//     const eliminarUsuario = async (id) => {
//         setLoading(true);
//         setError(null);
//         setSuccessMessage(null);
//         try {
//             await axios.delete(`${process.env.REACT_APP_API_BASE_URL}/${id}`);
//             cargarUsuarios();
//             setSuccessMessage('Usuario eliminado con éxito');
//             setLoading(false);
//         } catch (error) {
//             setError(error.message || 'Error al eliminar usuario');
//             console.error('Error al eliminar usuario:', error);
//             setLoading(false);
//         }
//     };

//     const abrirVerModal = (usuario) => {
//         setUsuarioDetalle(usuario);
//         setVerModalShow(true);
//     };

//     const cerrarVerModal = () => {
//         setVerModalShow(false);
//     };
//     console.log(usuarios);
//     console.log(loading)
//     return (
//         <div className="container">
//             <h1>Gestión de Usuarios</h1>
//             {error && <Alert variant="danger">{error}</Alert>}
//             {successMessage && <Alert variant="success">{successMessage}</Alert>}
//             <Button variant="primary" onClick={() => abrirModal()}>Crear Usuario</Button>
//             {loading ? (
//                 <div className="text-center">
//                     <Spinner animation="border" role="status">
//                         <span className="visually-hidden">Cargando...</span>
//                     </Spinner>
//                 </div>
//             ) : (
//                 <Table striped bordered hover responsive>
//                     <thead>
//                         <tr>
//                             <th>ID</th>
//                             <th>Usuario</th>
//                             <th>Acciones</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {usuarios.map(usuario => (
//                             <tr key={usuario.id}>
//                                 <td>{usuario.id}</td>
//                                 <td>{usuario.User_user}</td>
//                                 <td>
//                                     <Button variant="info" onClick={() => abrirModal(usuario)}>Editar</Button>{' '}
//                                     <Button variant="success" onClick={() => abrirVerModal(usuario)}>Ver</Button>{' '}
//                                     <Button variant="danger" onClick={() => eliminarUsuario(usuario.id)}>Eliminar</Button>
//                                 </td>
//                             </tr>
//                         ),console.log(usuario))}
//                     </tbody>
//                 </Table>
//             )}

//             <Modal show={modalShow} onHide={cerrarModal}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>{modoEdicion ? 'Editar Usuario' : 'Crear Usuario'}</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <Form onSubmit={(e) => {
//                         e.preventDefault();
//                         guardarUsuario();
//                     }}>
//                         <Form.Group>
//                             <Form.Label>Usuario</Form.Label>
//                             <Form.Control type="text" placeholder="Usuario" value={usuarioCrear.User_user} onChange={(e) => setUsuarioCrear({ ...usuarioCrear, User_user: e.target.value })} />
//                         </Form.Group>
//                         <Form.Group>
//                             <Form.Label>Contraseña</Form.Label>
//                             <Form.Control type="password" placeholder="Contraseña" value={usuarioCrear.User_password} onChange={(e) => setUsuarioCrear({ ...usuarioCrear, User_password: e.target.value })} />
//                         </Form.Group>
//                         <Button variant="primary" type="submit">Guardar</Button>
//                     </Form>
//                 </Modal.Body>
//             </Modal>

//             <Modal show={verModalShow} onHide={cerrarVerModal}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>Detalles de Usuario</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <p><strong>ID:</strong> {usuarioDetalle.id}</p>
//                     <p><strong>Usuario:</strong> {usuarioDetalle.User_user}</p>
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Button variant="secondary" onClick={cerrarVerModal}>Cerrar</Button>
//                 </Modal.Footer>
//             </Modal>
//         </div>
//     );
// }

// export default GestionUsuarios;

import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Form, Alert, Spinner } from 'react-bootstrap';
import axios from 'axios';

function GestionUsuarios() {
    const [usuarios, setUsuarios] = useState([]);
    const [modalShow, setModalShow] = useState(false);
    const [usuarioEditar, setUsuarioEditar] = useState(null);
    const [usuarioCrear, setUsuarioCrear] = useState({ User_user: '', User_password: '' });
    const [modoEdicion, setModoEdicion] = useState(false);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState(null);
    const [verModalShow, setVerModalShow] = useState(false);
    const [usuarioDetalle, setUsuarioDetalle] = useState({});

    useEffect(() => {
        cargarUsuarios();
    }, []);

    const cargarUsuarios = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get(process.env.REACT_APP_API_BASE_URL);
            setUsuarios(response.data);
            console.log(response.data); //verificamos los datos recibidos
            setLoading(false);
        } catch (error) {
            setError(error.message || 'Error al cargar usuarios');
            console.error('Error al cargar usuarios:', error);
            console.log(error); // verificamos errores.
            setLoading(false);
        }
    };

    const abrirModal = (usuario = null) => {
        if (usuario) {
            setUsuarioEditar(usuario);
            setUsuarioCrear({ User_user: usuario.User_user, User_password: '' });
            setModoEdicion(true);
        } else {
            setUsuarioCrear({ User_user: '', User_password: '' });
            setModoEdicion(false);
        }
        setModalShow(true);
        setError(null);
        setSuccessMessage(null);
    };

    const cerrarModal = () => {
        setModalShow(false);
        setError(null);
        setSuccessMessage(null);
    };

    const guardarUsuario = async () => {
        setLoading(true);
        setError(null);
        setSuccessMessage(null);
        try {
            if (modoEdicion) {
                await axios.put(`${process.env.REACT_APP_API_BASE_URL}/${usuarioEditar.id}`, usuarioCrear);
                setSuccessMessage('Usuario actualizado con éxito');
            } else {
                await axios.post(process.env.REACT_APP_API_BASE_URL, usuarioCrear);
                setSuccessMessage('Usuario creado con éxito');
            }
            cargarUsuarios();
            cerrarModal();
            setLoading(false);
        } catch (error) {
            setError(error.message || 'Error al guardar usuario');
            console.error('Error al guardar usuario:', error);
            setLoading(false);
        }
    };

    const eliminarUsuario = async (id) => {
        setLoading(true);
        setError(null);
        setSuccessMessage(null);
        try {
            await axios.delete(`${process.env.REACT_APP_API_BASE_URL}/${id}`);
            cargarUsuarios();
            setSuccessMessage('Usuario eliminado con éxito');
            setLoading(false);
        } catch (error) {
            setError(error.message || 'Error al eliminar usuario');
            console.error('Error al eliminar usuario:', error);
            setLoading(false);
        }
    };

    const abrirVerModal = (usuario) => {
        setUsuarioDetalle(usuario);
        setVerModalShow(true);
    };

    const cerrarVerModal = () => {
        setVerModalShow(false);
    };

    console.log(usuarios); //verificamos el estado de usuarios
    console.log(loading); //verificamos el estado de carga

    return (
        <div className="container">
            <h1>Gestión de Usuarios</h1>
            {error && <Alert variant="danger">{error}</Alert>}
            {successMessage && <Alert variant="success">{successMessage}</Alert>}
            <Button variant="primary" onClick={() => abrirModal()}>Crear Usuario</Button>
            {loading ? (
                <div className="text-center">
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Cargando...</span>
                    </Spinner>
                </div>
            ) : (
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Usuario</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usuarios.map((usuario) => (
                            <tr key={usuario.id}>
                                <td>{usuario.id}</td>
                                <td>{usuario.User_user}</td>
                                <td>
                                    <Button variant="info" onClick={() => abrirModal(usuario)}>Editar</Button>{' '}
                                    <Button variant="success" onClick={() => abrirVerModal(usuario)}>Ver</Button>{' '}
                                    <Button variant="danger" onClick={() => eliminarUsuario(usuario.id)}>Eliminar</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}

            <Modal show={modalShow} onHide={cerrarModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{modoEdicion ? 'Editar Usuario' : 'Crear Usuario'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={(e) => {
                        e.preventDefault();
                        guardarUsuario();
                    }}>
                        <Form.Group>
                            <Form.Label>Usuario</Form.Label>
                            <Form.Control type="text" placeholder="Usuario" value={usuarioCrear.User_user} onChange={(e) => setUsuarioCrear({ ...usuarioCrear, User_user: e.target.value })} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" placeholder="Contraseña" value={usuarioCrear.User_password} onChange={(e) => setUsuarioCrear({ ...usuarioCrear, User_password: e.target.value })} />
                        </Form.Group>
                        <Button variant="primary" type="submit">Guardar</Button>
                    </Form>
                </Modal.Body>
            </Modal>

            <Modal show={verModalShow} onHide={cerrarVerModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Detalles de Usuario</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p><strong>ID:</strong> {usuarioDetalle.id}</p>
                    <p><strong>Usuario:</strong> {usuarioDetalle.User_user}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={cerrarVerModal}>Cerrar</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default GestionUsuarios;