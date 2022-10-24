import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import LoadingCricle from '../components/Loading/loadingCircle';
import Layout from '../layout';
import ErrorPage from '../pages/ErrorPage';
import SignIn from '../pages/SignIn';
import PrivateRouter from './privateRouter';

// const SignIn = lazy(() => import('../pages/SignIn'));
const Dashboard = lazy(() => import('../pages/Dashboard'));

const AppRouter = () => {
  return (
    <Routes>
      <Route>
        <Route path="/signin" element={<SignIn />} />
        <Route
          path="/"
          element={
            <Suspense fallback={<LoadingCricle />}>
              <Layout>
                <Dashboard />
              </Layout>
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<LoadingCricle />}>
              <ErrorPage />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  )
}

export default AppRouter
