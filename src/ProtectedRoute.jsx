// ProtectedRoute.js
import { Navigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { authCheck } from './utils/authCheckUtils';

export function ProtectedRoute({ children }) {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(null);
  
  useEffect(() => {
    checkLoginStatus();
  }, []);

   async function checkLoginStatus() {
    try {
      const res = await authCheck();
      setIsUserLoggedIn(res);   
    }
    catch (error) {
      console.error("Error checking auth status:", error);
      setIsUserLoggedIn(false);
    }
  }
  if (isUserLoggedIn === null) {
    // You might want to show a loading spinner here
    return <div>Loading...</div>;
  }
  if (!isUserLoggedIn) {
    return <Navigate to="/login" replace />;
  }
  return children;
}