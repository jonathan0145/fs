
// import React from 'react';
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import AuthForm from './pages/AuthForm';
// import Home from './pages/Home';
// import GestionUsuarios from './pages/GestionUsuarios';

// // Componente para proteger rutas
// function ProtectedRoute({ children }) {
//   const token = localStorage.getItem('token'); // Obtiene el token

//   if (!token) {
//     return <Navigate to="/" replace />; // Redirige a / si no hay token
//   }

//   return children; // Permite el acceso a la ruta protegida
// }//!averiguar como hacer que funcione esto terminar de hacer lo de login y registro

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//           <Route path="/" element={<AuthForm />} />
//             <Route path="/home" element={
//               <ProtectedRoute>
//                 <Home />
//               </ProtectedRoute>
//               }
//             />
//           <Route
//             path="/gestionUsuarios"
//             element={
//               <ProtectedRoute>
//                 <GestionUsuarios />
//               </ProtectedRoute>
//             }
//           />
//       </Routes>
//     </BrowserRouter>
//     );
// }

// export default App;

// import React, { useEffect, useState } from 'react';
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import AuthForm from './pages/AuthForm';
// import Home from './pages/Home';
// import GestionUsuarios from './pages/GestionUsuarios';
// import { jwtDecode } from 'jwt-decode'; // Importación corregida

// // Hook personalizado para la autenticación
// function useAuth() {
//     const [isAuthenticated, setIsAuthenticated] = useState(false);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const token = localStorage.getItem('token');
//         if (token) {
//             try {
//                 const decodedToken = jwtDecode(token);
//                 if (decodedToken.exp * 1000 > Date.now()) {
//                     setIsAuthenticated(true);
//                 } else {
//                     localStorage.removeItem('token');
//                 }
//             } catch (error) {
//                 localStorage.removeItem('token');
//             }
//         }
//         setLoading(false);
//     }, []);

//     return { isAuthenticated, loading };
// }

// // Componente para proteger rutas
// function ProtectedRoute({ children }) {
//     const { isAuthenticated, loading } = useAuth();

//     if (loading) {
//         return <div>Cargando...</div>;
//     }

//     if (!isAuthenticated) {
//         return <Navigate to="/" replace />;
//     }

//     return children;
// }

// function App() {
//     return (
//         <BrowserRouter>
//             <Routes>
//                 <Route path="/" element={<AuthForm />} />
//                 <Route
//                     path="/home"
//                     element={
//                         <ProtectedRoute>
//                             <Home />
//                         </ProtectedRoute>
//                     }
//                 />
//                 <Route
//                     path="/gestionUsuarios"
//                     element={
//                         // <ProtectedRoute>
//                           <GestionUsuarios />
//                        /* </ProtectedRoute> */
//                     }
//                 />
//             </Routes>
//         </BrowserRouter>
//     );
// }

// export default App;

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './routes.js'; // Asegúrate de que la ruta sea correcta

function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;