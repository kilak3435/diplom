import { Navigate } from 'react-router-dom';
import{useAuth}from '../context/AuthContext';

export default function ProtectedRoute({ children, requireAdmin = false }) {
  const { user }=useAuth();

  if (!user){
    // If not logged in,redirect to login page
    return <Navigate to="/login" replace />;
  }

  if (requireAdmin && user.role !== 'admin'){
    // If requires admin but user is not admin, redirect to home
    return <Navigate to="/" replace />;
  }

  return children;
}
