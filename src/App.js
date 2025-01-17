import { Routes, Route } from 'react-router-dom';
import { Home } from './Components/Home';
import { Login } from './Components/Login';
import { ProtectedRoute } from './Components/ProtectedRoute';
import { Register } from './Components/Register';
import { AuthProvider } from './Context/authContext';

function app() {
  return (
    <div className='h-screen'>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<ProtectedRoute><Home/></ProtectedRoute>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </AuthProvider>
    </div>
  )
}
export default app;