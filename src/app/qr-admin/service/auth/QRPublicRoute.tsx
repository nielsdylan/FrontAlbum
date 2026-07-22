// src/routes/PublicRoute.tsx

import { useEffect, useState, type ReactNode  } from "react";
import { Navigate } from "react-router";
import { QRisAuthenticated } from './QRisAuthenticated.tsx';
import Loader from '@/components/Loader'

interface PublicRouteProps {
  children: ReactNode;
}

function QRPublicRoute({ children }: PublicRouteProps) {
  const [loading, setLoading] = useState(true);
  const [authStatus, setAuthStatus] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const status = await QRisAuthenticated();
      setAuthStatus(status);
      setLoading(false);
    };

    checkAuth();
  }, []);

  if (loading) {
    // return <div>Cargando...</div>;
    return <Loader height="100vh"/>;
  }
  
  if (authStatus) {
    return <Navigate to="/qr-admin/dashboard" />;
  }

  return <>{children}</>;
}

export default QRPublicRoute;