import { Navigate, useLocation } from 'react-router-dom';
import LoadingCricle from '../components/Loading/loadingCircle';
import { useAuth } from '../contexts/auth';
import { routerBlockedWithOperator } from '../layout/menuConfig';
import ErrorPage from '../pages/ErrorPage';

const PrivateRouter = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated, user } = useAuth()
  const location = useLocation()
  if (!isAuthenticated && typeof isAuthenticated === 'boolean') {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/signin" state={{ from: location }} replace />
  }
  if (!isAuthenticated && typeof isAuthenticated === 'undefined') {
    return <LoadingCricle />
  }
  if (routerBlockedWithOperator.includes(location.pathname) && user?.role != 'ADMIN') {
    return <ErrorPage />
  }
  return children
};

export default PrivateRouter;